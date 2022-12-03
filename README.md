# Setting up a React project using Webpack and Typescript

This is the step-by-step hands-on to setup a complete React app from scratch with scalable structure and modern utilities. We will discover how to combine all pieces of stuff to convert from typescript code to ES5 code which can be understood from browser

## 🌄 Initialize Project

First of all, let's initialize the project by generating the package.json that helps us to manage me dependencies, devDependencies and scripts. We're going to use `-y` to keep some default settings on the package.json file

    npm init -y

## 🌄 Install and setup Typescript

The idea of this article is to create a large-scale project from scratch so it's really a big shortcoming if we don't have Typescript. Let's install Typescript and generate the tsconfig.json to manage Typescript settings

    npm i typescript -D
    npx tsc --init

## 🌄 Install React and React DOM

We intend to create a React application so that's why we can't live with react and react-dom packages. The React package contains all necessary utilities to define a React component while React DOM package serves as the entry point to the DOM and server renderers for React

    npm i react react-dom

We also need the declaration types for react and react-dom by running the command below

    npm i @types/react @types/react-dom -D

## 🌄 Babel

Browsers have no idea about JSX code while we're writing the JSX code so one of the keys setup we need to achieve is Babel installing. Babel and it's ecosystem will be responsible for transforming the JSX to the Vanilla JS. We will get deeper into each package after installing the below commands

    npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime babel-loader -D
    npm i @babel/runtime

We also need the `.babelrc.json` for babel configuration at the root dir

    {
      "presets": [
        "@babel/preset-env",
        [
          "@babel/preset-react",
          {
            "runtime": "automatic"
          }
        ],
        "@babel/preset-typescript"
      ],
      "plugins": [
        [
          "@babel/plugin-transform-runtime",
          {
            "regenerator": true
          }
        ],
      ]
    }

Packages:

- @babel/core: core to run Babel
- @babel/preset-env: allow use the latest JS code without caring about which syntax transforms
- @babel/preset-react: used to transform jsx code to js code
- @babel/preset-typescript: used to transform typescript
- @babel/runtime: contains Babel modular runtime helpers
- @babel/plugin-transform-runtime: come along with @babel/runtime
- babel-loader: serve as a JS file loader to Babel

## 🌄 Webpack

Webpack is a module bundler. Its main purpose is to bundle JS files after being transformed by Babel for usage in the browser. Now there are some other bundlers such as Rollup but webpack is still a big one. Install webpack and its related packages by running the command below

    npm i webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin -D

There are 3 webpack config files in this repo. Of course, we can still have more for other environments such as uat...but to keep the repo short, we just have 3 now

- webpack.base.js: the main config file
- webpack.dev.js: the config file for development
- webpack.prod.js: the config file for production

To start development or bundle for production, we need to add some scripts below

    "start": "webpack serve --config webpack/webpack.dev.js",
    "start:prod": "npm run build && cd dist && npx serve",
    "build": "webpack --config webpack/webpack.prod.js",

Packages:

- webpack: module bundler
- webpack-cli: integrate with webpack via command line interface
- webpack-dev-server: create a web server on localhost to run the app (only development)
- webpack-merge: combine webpack configs into one
- html-webpack-plugin: inject bundled files to the index.html

## 🌄 Styled-Components

Install dependencies

    npm i babel-plugin-styled-components @types/styled-components -D
    npm i styled-components

Add `babel-plugin-styled-components` to Babel plugin config

    "plugins": ["babel-plugin-styled-components"]

## 🌄 Handling Images

Resolve the type checking for images by adding `declare module "*.png"` to typings/global.d.ts file

Add a rule to webpack.base.js

## 🌄 Handling SVG

Install dependencies

    npm i @svgr/webpack -D

Resolve the type checking for images by adding `declare module "*.svg"` to typings/global.d.ts file
Add a new rule to webpack.base.js

## 🌄 ESLint

Install dependencies

    npm i eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-jsx-a11y -D
    npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

Adding the .eslintrc with the config as in repo
Adding the lint script to package.json

    "lint": "eslint src --ext .ts,.tsx,.js --fix"

## 🌄 Prettier

Install dependencies

    npm i prettier eslint-config-prettier eslint-plugin-prettier -D

Adding the .prettier at the root dir with the config as in repo
Update the eslint extends with

    "extends": ["prettier", "plugin:prettier/recommend"]

The final step is adding the format script to package.json

## 🌄 Lint-Staged and Husky

Install dependencies

    npm i lint-staged husky -D

Adding the lint-staged to package.json
Initialize the husky by command

    npx husky-init && npm install

## 🌄 Copy Webpack Plugin

Install dependencies

    npm i copy-webpack-plugin -D

Add new plugin to webpack.base.js

## 🌄 Clean Webpack Plugin

Install dependencies

    npm i clean-webpack-plugin -D

Add new plugin to webpack.base.js

## 🌄 Bundle Stats Webpack Plugin

Install dependencies

    npm i bundle-stats-webpack-plugin -D

Add new plugin to webpack.base.js

## 🌄 DotEnv

Install dependencies

    npm i dotenv-webpack -D

Add new plugin to webpack.dev.js and webpack.prod.js

## 🌄 Resolve Absolute Paths

Install dependencies

    npm i babel-plugin-module-resolver -D

Add module resolve to babel plugins

    [
      "module-resolver",
      {
        "root": ["./src"],
        "extensions": [".ts", ".tsx", ".js"]
      }
    ],

Create jsconfig.json

    {
      "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "paths": {
          "*": ["src/*"]
        }
      }
    }

## 🌄 Commit Lint

Install dependencies

    npm i @commitlint/config-conventional @commitlint/cli -D

Adding .commitlintrc

Adding hook

    npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'

## 🌄 Jest and React Testing Library

Install dependencies

    npm i jest jest-environment-jsdom ts-jest -D
    npm i @testing-library/react @testing-library/jest-dom -D

Add the `jest.config.js` file at root dir and `jest.setup.js` file to jest folder
Integrate with ESLint by install

    npm i eslint-plugin-jest -D

Add "jest" to eslint plugins
Add "plugin:jest/recommended" to eslint extends
Add "jest": true to eslint env
Add "jest" and "@testing-library/jest-dom" to types in tsconfig.json

Finally, adding the test and test coverage scripts to package.json
