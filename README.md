# Setting up a React project using Webpack and Typescript

This is the step-by-step hands-on to setup a complete React app from scratch with scalable structure and modern utilities. We will discover how to combine all pieces of stuff to convert from typescript code to ES5 code which can be understood from browser

## 🌄 Initialize Project

First of all, let's initialize the project by generating the `package.json` that helps us to manage the `dependencies`, `devDependencies`, and `scripts`. We're going to use `-y` to keep some default settings on the `package.json` file

    npm init -y

## 🌄 Install and setup Typescript

The idea of this article is to create a large-scale project from scratch so it's really a big shortcoming if we don't have Typescript. Let's install Typescript and generate the `tsconfig.json` to manage Typescript settings

    npm i typescript -D
    npx tsc --init

The `tsconfig.json` can be like this

    {
      "compilerOptions": {
        "target": "ES6",
        "jsx": "react-jsx",
        "module": "commonjs",
        "moduleResolution": "node",
        "paths": {
          "*": ["./src/*"]
        },
        "types": ["node", "jest", "@testing-library/jest-dom"],
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true
      },
      "include": ["src/**/*"],
      "exclude": ["node_modules", "**/*.test.ts"]
    }

## 🌄 Install React and React DOM

We intend to create a React application so that's why we can't live with react and react-dom packages. The React package contains all necessary utilities to define a React component while React DOM package serves as the entry point to the DOM and server renderers for React

    npm i react react-dom

We also need the declaration types for `react` and `react-dom` by running the command below

    npm i @types/react @types/react-dom -D

## 🌄 Install and setup Babel

Browsers have no idea about JSX code while we're writing the JSX code so one of the keys setup we need to achieve is Babel installation. Babel and it's ecosystem will be responsible for transforming the JSX to the Vanilla JS. We will get deeper into each package after installing the below commands

    npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime babel-loader -D
    npm i @babel/runtime

We also need the `.babelrc.json` for Babel configuration at the root dir

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

- `@babel/core`: core to run Babel
- `@babel/preset-env`: allow use the latest JS code without caring about which syntax transforms
- `@babel/preset-react`: used to transform jsx code to js code
- `@babel/preset-typescript`: used to transform typescript
- `@babel/runtime`: contains Babel modular runtime helpers
- `@babel/plugin-transform-runtime`: come along with @babel/runtime
- `babel-loader`: serve as a JS file loader to Babel

## 🌄 Install and setup Webpack

Webpack is a module bundler. Its main purpose is to bundle JS files after being transformed by Babel for usage in the browser. Now there are some other bundlers such as Rollup but webpack is still a big one. Install webpack and its related packages by running the command below

    npm i webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin -D

There are 3 webpack config files in this repo. Of course, we can still have more for other environments such as uat...but to keep the repo short, we just have 3 now

- `webpack.base.js`: the main config file
- `webpack.dev.js`: the config file for development
- `webpack.prod.js`: the config file for production

To start development or bundle for production, we need to add some scripts below

    "start": "webpack serve --config webpack/webpack.dev.js",
    "start:prod": "npm run build && cd dist && npx serve",
    "build": "webpack --config webpack/webpack.prod.js",

Packages:

- `webpack`: module bundler
- `webpack-cli`: integrate with webpack via command line interface
- `webpack-dev-server`: create a web server on localhost to run the app (only development)
- `webpack-merge`: combine webpack configs into one
- `html-webpack-plugin`: inject bundled files to the index.html

## 🌄 Install and setup Styled-Components

We will use styled-component to format html tags

    npm i babel-plugin-styled-components @types/styled-components -D
    npm i styled-components

Add `babel-plugin-styled-components` to plugins in `.babelrc.json`

    "plugins": ["babel-plugin-styled-components"]

## 🌄 Handle Images

The below rule can tell Webpack how to treat with image files

    "rules": [
      {
        test: /\.(?:ico|jpg|jpeg|png)$/i,
        type: "asset/resource",
      }
    ]

Resolve the type checking for image files by adding a declaration to `typings/global.d.ts` file

    declare module "*.jpe";
    declare module "*.jpeg";
    declare module "*.png";

## 🌄 Handle SVG

To server SVG file as a React component, we need to install the `@svgr/webpack`

    npm i @svgr/webpack -D

Installing the `@svgr/webpack` is just a first step, we still need to add a new rule to `webpack.base.js`

    "rules": [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      }
    ]

Like image files, we also need to add a declaration to `typings/global.d.ts` file

    declare module "*.svg";

## 🌄 Install and setup ESLint

We write JS code daily but i'm pretty sure we can't avoid make mistake completely, especially in deadline. ESLint helps us on finding and fixing problems with our JS code quickly. Let deep dive by running the command

    npm i eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-jsx-a11y -D
    npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

Like Webpack, Babel or Typescript, ESLint need a configuration file to run. Adding the `.eslintrc.json` at the root dir and refer the file on the repo

The final step is adding the lint script to package.json

    "lint": "eslint src --ext .ts,.tsx,.js --fix"

Packages:

- `eslint`: lint and fix problem with JS code
- `eslint-plugin-react`: specific linting rules for React
- `eslint-plugin-react-hooks`: specific linting rules for React hooks
- `eslint-plugin-import`: prevent issues with misspelling of file paths and import names
- `eslint-import-resolver-typescript`: add TypeScript support to `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`: does a static evaluation of the JSX to spot accessibility issues in React apps
- `@typescript-eslint/parser`: lint TypeScript source code
- `@typescript-eslint/eslint-plugin`: provides lint rules for TypeScript codebase

## 🌄 Install and setup Prettier

An application can be developed by a lot of developers with different coding style. Confirm a coding convention with the same format is fairly important and Prettier can help us in this case.

    npm i prettier eslint-config-prettier eslint-plugin-prettier -D

Prettier also need a config file named `.prettierrc.json` at the root dir and integrate with ESLint. We can achieve it by updating the extends in `.eslintrc.json` file as below

    "extends": ["prettier", "plugin:prettier/recommend"]

The final step is adding the format script to package.json

    "format": "prettier src/**/*.{ts,tsx,js,json} --write",

Packages:

- `prettier`:
- `eslint-config-prettier`:
- `eslint-plugin-prettier`:

## 🌄 Install and setup Lint-Staged and Husky

Lint Staged and Husky usually come together which help us with some validation before doing a git commit. In our scope, Husky is responsible for triggering the Lint Staged on the pre-commit and Lint Staged allows to run ESlint and Prettier with staged files

    npm i lint-staged husky -D

Initialize the husky by command

    npx husky-init && npm install

Adding the lint-staged to package.json

    "lint-staged": {
      "src/**/*.{ts,tsx,js,json}": [
        "prettier --write",
        "eslint --fix"
      ]
    }

Packages

- `lint-staged`: run scripts with staged files
- `husky`: trigger action on pre-commit

## 🌄 Install and setup Copy Webpack Plugin, Clean Webpack Plugin, Bundle Stats Webpack Plugin, DotEnv

These packages are useful in the bundle process, please refer the description for more detail

    npm i copy-webpack-plugin clean-webpack-plugin bundle-stats-webpack-plugin dotenv-webpack -D

Packages:

- `copy-webpack-plugin`: copy asset files from source to bundle dir
- `clean-webpack-plugin`: remove the bundle dir before generate a new one
- `bundle-stats-webpack-plugin`: display the detail of bundle size
- `dotenv-webpack`: inject variables to process.env

## 🌄 Resolve Absolute Paths

Make the code more clear and reduce the git changes in relative path whenever a file location is changed. Continue to run the command below

    npm i babel-plugin-module-resolver -D

Add the `babel-plugin-module-resolver` to `.babelrc.json` plugins

    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./src"],
          "extensions": [".ts", ".tsx", ".js"]
        }
      ],
    ]

We also need `jsconfig.json` at the root dir with config as below

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

Finally, updating the paths on `tsconfig.json` as below

    "paths": {
      "*": ["./src/*"]
    },

## 🌄 Install and setup Commit Lint

If Prettier helps us confirm the convention on coding, the Commit Lint will take care about the commit message. Don't forget to create the `.commitlintrc.json` at root and running the below command

    npm i @commitlint/config-conventional @commitlint/cli -D

Commit Lint also needs Husky to be triggered on the pre-commit step, so we can't lack of adding commit-msg command to Husky

    npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'

## 🌄 Install and setup Jest, React Testing Library

Install Jest and React Testing Library by running the commands

    npm i jest jest-environment-jsdom ts-jest -D
    npm i @testing-library/react @testing-library/jest-dom -D

Add the `jest.config.js` at root dir and `jest.setup.js` file at jest dir. Jest also need to integrate with ESLint via `eslint-plugin-jest`

    npm i eslint-plugin-jest -D

Add `jest` to ESLint plugins
Add `plugin:jest/recommended` to ESLint extends
Add `jest: true` to ESLint env
Add `jest` and `@testing-library/jest-dom` to `types` in `tsconfig.json`

Finally, adding the test and test coverage scripts to the package.json. The result will be in coverage dir

    "test": "jest",
    "test:cov": "jest --coverage"

## 🌄 Install and setup Redux-Toolkit

Follow the [instruction](https://redux-toolkit.js.org/tutorials/quick-start) from redux-toolkit.js.org
