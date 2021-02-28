import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--typescript": Boolean,
      "-t": "--typescript",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    name: args._[0] || undefined,
    typescript: args["--typescript"] || false,
  };
}

async function promptForMissingOptions(options) {
  const questions = [];

  if (!options.typescript) {
    questions.push({
      type: "confirm",
      name: "typescript",
      message: "Do you want to use TypeScript?",
      default: false,
    });
  }

  if (!options.name) {
    questions.push({
      type: "input",
      name: "name",
      message: "What do you want to name your blog?",
      validate: function (input) {
        if (input.length > 0) return true;
        return "Enter valid blog name";
      },
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    typescript: options.typescript || answers.typescript,
    name: options.name || answers.name,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
