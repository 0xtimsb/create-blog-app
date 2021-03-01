import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
import execa from "execa";
import Listr from "listr";
import nconf from "nconf";
import { projectInstall } from "pkg-install";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

async function initGit(options) {
  const result = await execa("git", ["init"], {
    cwd: options.targetDirectory,
  });
  if (result.failed) {
    return Promise.reject(new Error("Failed to initialize git"));
  }
  return;
}

async function makeChangesToBlogConfig(options) {
  const configPath = path.resolve(options.targetDirectory, "blogconfig.json");
  nconf.use("file", { file: configPath });
  nconf.load();
  if (options.name) nconf.set("title", options.name + " | Blog");
  if (options.name) nconf.set("name", options.name);
  if (options.github) nconf.set("github", options.github);
  if (options.twitter) nconf.set("twitter", options.twitter);
  nconf.save((err) => {
    if (err) {
      return Promise.reject(
        new Error("Failed to make changes to blog.config.js")
      );
    }
  });
  return;
}

export async function createProject(options) {
  const targetDir = path.resolve(process.cwd(), options.projectName);
  options.targetDirectory = targetDir;

  try {
    await access(targetDir, fs.constants.R_OK);
    console.error(
      `%s Directory "${options.projectName}" already exists`,
      chalk.red.bold("ERROR")
    );
    process.exit(1);
  } catch {}

  const currentFileUrl = import.meta.url;
  const templateDir = path.resolve(
    new URL(currentFileUrl).pathname,
    "../../templates",
    "create-blog-app"
  );
  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error("%s Invalid template name", chalk.red.bold("ERROR"));
    process.exit(1);
  }

  console.log(
    "\nCreating a new blog app in",
    chalk.green(options.targetDirectory)
  );

  const tasks = new Listr([
    {
      title: "Copying project files.",
      task: () => copyTemplateFiles(options),
    },
    {
      title: "Initializing git.",
      task: () => initGit(options),
    },
    {
      title: "Installing packages. This might take a couple of minutes.",
      task: () =>
        projectInstall({
          cwd: options.targetDirectory,
        }),
    },
    {
      title: "Finalizing things. Almost done.",
      task: () => makeChangesToBlogConfig(options),
    },
  ]);

  await tasks.run();

  console.log(
    chalk.green("\nSuccess!"),
    "Created blog at",
    chalk.blueBright(options.targetDirectory)
  );
  console.log("\nInside that directory, you can run several commands:");
  console.log(chalk.blueBright("\n\tnpm run dev"));
  console.log("\tStarts the development server.");
  console.log("\nWe suggest that you begin by typing:");
  console.log(chalk.blueBright("\ncd"), options.projectName);
  console.log(chalk.blueBright("npm run dev\n"));
  return true;
}
