![Backend CI](https://github.com/hpi-swa-teaching/SmalltalkDocs/workflows/Backend%20CI/badge.svg?branch=dev) ![Frontend CI](https://github.com/hpi-swa-teaching/SmalltalkDocs/workflows/Frontend%20CI/badge.svg?branch=dev)
# 🗄️ SmalltalkDocs

## Squeak API

### How to install
```
Metacello new
	baseline: 'SmalltalkDocs';
	repository: 'github://hpi-swa-teaching/SmalltalkDocs:dev/packages';
	load.
```

## React App: småprat

### Notes for developers

* Do not forget to install Jest Plugin for Webstorm (Preferences - Languages & Frameworks - JavaScript - Libraries - Download - 'jest' - Download and Install)
* Only use functional code style
* If you use VS Code add following statement to settings.json<br/>
	`{
		"eslint.alwaysShowStatus": true,
		"eslint.workingDirectories": [
			"./app"
		]
	}`

### How to start

#### Start the backend

Run `SmapratApi newStarted` to start the Api on port 4567, or specify a port using `SmapratApi newStartedOn: <aPort>`. You can also use the RatPack Control Panel which can be found under Tools -> RatPack Control Panel.

#### Start the frontend

Run `npm install` if you have not already done so. Now you can start the developement version of the frontend using `npm start`.


### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

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
