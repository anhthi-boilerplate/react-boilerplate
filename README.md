# Setting up a React project using Webpack and Typescript

This is the step-by-step hands-on to setup a complete React app from scratch with scalable structure and modern utilities. We will discover how to combine all pieces of stuff to convert from typescript code to ES5 which can be understood from browser

## 🌄 Preparation

Create the project structure and generate the package.json by

    npm init -y

Install react, react-dom and @types

    npm i react react-dom
    npm i @types/react @types/react-dom -D

## 🌄 Adding Typescript

Install dependencies

    npm i typescript -D

Generate tsconfig.json at the root dir with these config below

    npx tsc --init

## 🌄 Adding Babel

Install dependencies

    npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader -D

Create the .babelrc at the root dir for Babel config with below options

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
      ]
    }

## 🌄 Adding Webpack

Install dependencies

    npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D

Create webpack.base.js to setup Webpack

Adding html-webpack-plugin to the webpack plugins

Adding the start script to package.json file

    "start": "webpack serve --config webpack/webpack.base.js --open"
