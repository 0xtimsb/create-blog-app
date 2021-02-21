# Create Blog App

<img alt="Logo" align="right" src="" width="20%" />

Create your blog with one command.

Create Blog App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/smitbarmase/create-blog-app/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/smitbarmase/create-blog-app/discussions).

## Quick Overview

```sh
npx create-blog-app your-blog-name
cd your-blog-name
npm start
```

If you've previously installed `create-blog-app` globally via `npm install -g create-blog-app`, it is recommended you to uninstall the package using `npm uninstall -g create-blog-app` or `yarn global remove create-blog-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your blog.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='' width='600' alt='npm start'>
</p>

## Creating an Blog

**You’ll need to have Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-blog-app your-blog-name
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init blog-app your-blog-name
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create blog-app your-blog-name
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `your-blog-name` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
project-directory-here
```

No configuration or complicated folder structures, only the files you need to build your blog.<br>
Once the installation is done, you can open your project folder:

```sh
cd your-blog-name
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## Contributing

We'd love to have your helping hand on `create-blog-app`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## License

Create Blog App is open source software [licensed as MIT](https://github.com/smitbarmase/create-blog-app/blob/master/LICENSE).
