# route_network

[![Netlify Status](https://api.netlify.com/api/v1/badges/838fc75a-a001-48eb-93c9-a12767e1e49c/deploy-status)](https://app.netlify.com/sites/inspiring-spence-c048ce/deploys)

This app plots great circles between airports on a world map. A running version can be found [here](https://inspiring-spence-c048ce.netlify.app/).

![Screenshot](/client/public/screen.PNG)

## Instructions

You can enter airport pairs on the **Data Edit** page by using the respective four letter [ICAO airport codes](https://en.wikipedia.org/wiki/ICAO_airport_code) and assign a category to it. To just view a basic example simply _Load sample data_. The **Map Display** page then shows all the entered routings and allows the user to view the whole network of flights that e.g. he has taken.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### Installation:

To run [Netlify Functions](https://www.netlify.com/products/functions/) used by the backend locally on your machine you will need to have [netlify-cli](https://www.npmjs.com/package/netlify-cli) installed with the following command:

`npm install netlify-cli -g`

If you already have [netlify-cli](https://www.npmjs.com/package/netlify-cli) installed, install the projects dependencies with

`npm install`

To start both the backend server as well as the client run:

`npm start`

To visit App in browser:

`localhost:3000/`

The tests of this repository are written using [cypress](https://cypress.io) and can be found in the `cypress/integration`-folder. To run the test suite use

`npx cypress open`
