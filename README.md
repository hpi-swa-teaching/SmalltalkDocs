# 🗄️ SmalltalkDocs "Smaprat"

![Backend CI](https://github.com/hpi-swa-teaching/SmalltalkDocs/workflows/Backend%20CI/badge.svg?branch=dev) [![Backend Coverage Status](https://coveralls.io/repos/github/hpi-swa-teaching/SmalltalkDocs/badge.svg?branch=dev)](https://coveralls.io/github/hpi-swa-teaching/SmalltalkDocs?branch=dev) ![Frontend CI](https://github.com/hpi-swa-teaching/SmalltalkDocs/workflows/Frontend%20CI/badge.svg?branch=dev)

## Introduction

SmalltalkDocs is a REST API for your Squeak image - it comes with the Smaprat web app to easily explore an image from within your web browser. The API is fully written in Smalltalk and known to work with Squeak 5.2, 5.3 and trunk. The provided Smaprat frontend is a React app and offers UI elements for all API capabilities.

## Installation

Please follow these steps to run a SmalltalkDocs Smaprat on your own computer/server.

### Smalltalk API

Open your Squeak image and run the following code from within a workspace:

``` smalltalk
Metacello new
    baseline: 'SmalltalkDocs';
    repository: 'github://hpi-swa-teaching/SmalltalkDocs:dev/packages';
    load.
```

Afterwards, you can open the "RatPack Control Panel" to start the API itself.

#### Development

To be able to actively develop for SmalltalkDocs, please clone this GitHub repository with the "Git Browser" and checkout all objects afterwards. (You may have to switch the baseline from above to the "dev" branch first!)

### Smaprat Frontend

Since the Smaprat frontend uses React, there are two fundamental ways to get a local copy running.

#### Easy installation

Download the latest artifact .zip from the Github Actions page of this repository - e.g. for [branch:dev](https://github.com/hpi-swa-teaching/SmalltalkDocs/actions?query=workflow%3A%22Frontend+CI%22+branch%3Adev).
The artifact is named "smaprat-frontend.zip" and contains a compiled version of the React `.jsx` code.

Next, you can place these files within the `www` folder of a supported webserver.  
One popular solution is [`serve`](github.com/vercel/serve) - install it via `npm i -g serve` and then run `serve -s .` inside the unzipped artifact directory (containing the `index.html` file).
*Alternatively, one can use e.g. Nginx with the provided file in `app/nginx.example`. This is recommended for larger scale deployments.*

#### Advanced installation

If you want to change things within the frontend or participate in development, please see [`./app/README.md`](./app/README.md) for more information.

## License

MIT License - see [`LICENSE`](./LICENSE)
