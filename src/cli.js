import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--name": String,
      "--github": String,
      "--twitter": String,
      "-n": "--name",
      "-g": "--github",
      "-t": "--twitter",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    projectName: args._[0] || undefined,
    name: args["--name"] || undefined,
    github: args["--github"] || undefined,
    twitter: args["--twitter"] || undefined,
  };
}

async function promptForMissingOptions(options) {
  let questions = [];

  if (!options.projectName) {
    questions.push({
      type: "input",
      name: "projectName",
      message: "What do you want to name your project? (Required)",
      validate: function (input) {
        if (input.length > 0) return true;
        return "Enter valid project name!";
      },
    });
  }

  if (!options.name) {
    questions.push({
      type: "input",
      name: "name",
      message: "What is your name? (Optional)",
      default: undefined,
    });
  }

  if (!options.github) {
    questions.push({
      type: "input",
      name: "github",
      message: "What is your GitHub username? (Optional)",
      default: undefined,
    });
  }

  if (!options.twitter) {
    questions.push({
      type: "input",
      name: "twitter",
      message: "What is your Twitter username? (Optional)",
      default: undefined,
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    projectName: options.projectName || answers.projectName,
    name: options.name || answers.name,
    github: options.github || answers.github,
    twitter: options.twitter || answers.twitter,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
