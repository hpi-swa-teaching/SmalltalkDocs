# Smaprat Frontend

## Introduction

The frontend was built using React - a framework for progressive webapps. Therefore, the whole webUI is a single-page application. Altough this allows for smoother transitions and less loading times, it does come with some noteworthy caveats.

Since the site itself is single page, a single artifact `index.html` will be produced. It is the webservers obligation to serve this file to all requests which do not reference locally existent files (like JS or CSS etc.). Therefore, an example Nginx config is provided as [nginx.example](./nginx.example) within this repository. For smaller deployments and local instances, one might as well make use of the Smaprat APP server that comes with Smaprat API and runs within the Squeak image as well (www folder is xxx). In both cases, you'll have to download a recent artifacts .zip from the Github Actions page and place its files in the corresponding www folder of your webserver.

Not only deployments require special treatment - also development comes with some specialties. Since the raw source code files within this directory are not executable by themselves, you'll need a React development server in order to serve the local source code. You can find notes on this below.

## Setup

### IDE configuration

* Do not forget to install Jest Plugin for Webstorm (Preferences - Languages & Frameworks - JavaScript - Libraries - Download - 'jest' - Download and Install)
* If you use VS Code add following statement to settings.json  

``` json
{
    "eslint.alwaysShowStatus": true,
    "eslint.workingDirectories": [
        "./app"
    ]
}
```

### Installation

Clone the designated branch of this repository to a local directory. Next, open the `./app` directory - it is the working directory for all frontend development.

Since React depends on NodeJS and NPM, you'll have to install a current version of both. The latest NodeJS LTS 12 and the most recent version of NPM are recommended. Then, install all node modules by running `npm install` - this will make sure to statify all development dependencies within the `./package.lock`. You can now use the React scripts below to run and build the code.

### Available React scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

#### `npm lint`

This will run ESLint for JS as well as StyleLint for CSS to make your code conforms to our coding guidelines. A correctly configured IDE show already show possible issues while developing.

#### `npm lint-fix`

Fix all auto-fixable linter issues within the code. Often, this function is already included within the IDE.

#### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Code overview

The source code is mainly contained within the `./src` directory. The `./public` directory only contains some assets and static html files with e.g. the site title. All content is generated dynamically by JS.

In the following, we will explore the `./src` directory a little further.

### Components

### Config

### Resources

### Routes

### Styles

### Test-Utils

### Utils
