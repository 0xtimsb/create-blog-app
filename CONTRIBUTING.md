# Contributing to Create Blog App

Loving Create Blog App and want to get involved? Thanks! There are plenty of ways you can help.

Please take a moment to review this document in order to make the contribution process straightforward and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Core Ideas

As much as possible, we try to avoid adding configuration and flags. The purpose of this tool is to provide the best experience for people getting started to blogging and they don't have to get deeper into web development, and this will always be our first priority.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope for Create React App. Generally always have a related issue with discussions for whatever you are including.

### Overview of directory structure

```
packages/
  babel-preset-react-app/
  create-react-app/
  eslint-config-react-app/
  react-dev-utils/
  react-scripts/
```

## Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/smitbarmase/create-blog-app`

2. Run `npm install` in the root `create-blog-app` folder.

Once it is done, you can modify any file locally.

3. You can create `npm link` to test package locally and make changes to it.

4. If you want to change template it can be found here`templates/basic`

If you want to try out the end-to-end flow with the global CLI, you can do this too:

```sh
npx create-blog-app my-blog-app
cd my-blog-app
```

and then run `yarn dev` or `npm run dev`.

## Tips for contributors using Windows

The scripts in tasks folder and other scripts in `package.json` will not work in Windows out of the box. However, using [Bash on windows](https://msdn.microsoft.com/en-us/commandline/wsl/about) makes it easier to use those scripts without any workarounds. The steps to do so are detailed below:

### Install Bash on Ubuntu on Windows

A good step by step guide can be found [here](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

### Install Node.js and yarn

Even if you have node and yarn installed on your windows, it would not be accessible from the bash shell. You would have to install it again. Installing via [`nvm`](https://github.com/creationix/nvm#install-script) is recommended.
