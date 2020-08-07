# Smaprat Frontend

## Introduction

The frontend was built using React - a framework for progressive webapps. Therefore, the whole webUI is a single-page application. Altough this allows for smoother transitions and less loading times, it does come with some noteworthy caveats.

Since the site itself is single page, a single artifact `index.html` will be produced. It is the webservers obligation to serve this file to all requests which do not reference locally existent files (like JS or CSS etc.). To download a precompiled artifact, open the latest Github Actions build for e.g. master branch and download the `smaprat-frontend.zip` from within the FrontendCI job.  
For larger deployments, an example Nginx config is provided as [nginx.example](./nginx.example) within this repository. For smaller or locally running instances, one might as well make use of [`serve`](https://github.com/vercel/serve) which can be installed with `npm i -g serve`. Afterwards, it is as easy as issuing `serve -s .` inside the unzipped artifact's directory to start a local webserver with the correct configuration applied *(-s tell serve to run in single-page mode)*.

Not only deployments require special treatment - also development comes with some specialties. Since the raw source code files within this directory are not executable by themselves, you'll need a React development server in order to serve the local source code. You can find notes on this below.

## Developemnt Setup

### IDE Configuration

* If you use Webstorm, do not forget to install Jest plugin _(Preferences - Languages & Frameworks - JavaScript - Libraries - Download - 'jest' - Download and Install)_
* If you use VS Code, add following statement to settings.json  

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

### Available React Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

#### `npm run lint`

This will run ESLint for JS as well as StyleLint for CSS to make your code conforms to our coding guidelines. A correctly configured IDE show already show possible issues while developing.

#### `npm run lint-fix`

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

## Continuous Integration

In order to sustain a high code quality, automatic continuous integration is used to run several test. The process is split into three stages.

1. Run `npm run lint` to check against the defined coding standards. _(Failing this stage does not cause the build to fail!)_
2. In parallel, `npm test` runs all Jest tests. If a test fails, the whole CI build will fail.
3. Finally, a React production build will be issued with `npm run build` and its artifact provided as `smaprat-frontend.zip`.

## Code Overview

The source code is mainly contained within the `./src` directory. The `./public` directory only contains some assets and static html files with e.g. the site title. All content is generated dynamically by JS.

In the following, we will explore the `./src` directory a little further.

### Components

A component is a basic part of a user interface in React. Ideally, it can be reused in many different situations and may therefore appear differently within distinct pages.

Normally, a component receives information about what it should disable via provided `props`. The provided data is then used to render out predefined interface markups.

Each component also contains a specific test file which test basic behaviour using the Jest test runner.

### Config

The config folder usally contains constant specific to JS or SASS. In our case, a single `constants.js` contains information on where the used API can be found.

**Customization:** If you want to customize Smaprat and use it for a non-local deployment, this would be the only place within the code that requires a change. Keep in mind that the URL should always correspond to `//mysecret.subdomain.tld`.

### Resources

The resources folder contains images (mostly icons) which are used throughout the webapp. In contrast to assets definined within the `../public` folder, they will be processed by the React compiler.

### Routes

All pages with the single-page application are identified by their routes. A route can thereby include parameters in the form `/my/path/with/:id/and/:name` where `:id` and `:name` can afterwards be used in the code as variables.

The `App` folders contains the main route definitions while the actual route identifiers are generated within `../../utils/pathmapper.js`. This is considered good codestyle as it prevents an otherwise necessary shotgun surgery if a page's name was changed and would therefore require not only changing its route but also changing all links.

A page in react is composed of several components and rendered according to the parameters provided within the route identifier. For our application, each page has its own folder within the `routes` folder.

### Test-Utils

The `test-utils` directory contains helper scripts for the Jest test runner used within this project.

### Utils

All general purpose functions that do not directly render visible components are usally moved out of the `.jsx` files into so called utils classes. Those JS files contain general purpose code and provide a single point of change if e.g. an API route changes or a path identifier needs to be composed differently.
