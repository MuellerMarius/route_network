# route_network

[![Heroku status](https://heroku-badges.herokuapp.com/?app=route-network)](https://route-network.herokuapp.com/)

This app plots great circles between airports on a world map. A running version can be found [here](https://route-network.herokuapp.com/) and a sample screencast showing a sample workflow can be found at the bottom of this readme.

![Screenshot](/client/public/screenshot.png)

## Instructions

You can enter airport pairs on the **Data Edit** page by using the respective four letter [ICAO airport codes](https://en.wikipedia.org/wiki/ICAO_airport_code) and assign a category to it. If you don't know the respective airport code you can simply use _Lookup Airport_ to search for either the airport name or the ICAO-, or IATA-code.

To just view a basic example simply _Load sample data_. The **Map Display** page then shows all the entered routings and allows the user to view the whole network of flights that e.g. he has taken.

## Resources

- The topologies for the world map are provided by [TopoJSON](https://github.com/topojson/world-atlas)

- The airport database is provided by [Open Flights](https://github.com/jpatokal/openflights)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### Installation:

The client side of this app (`client`-folder) is build using React as a framework and the server side (`server`-folder) mainly uses [Express](https://expressjs.com/).

The install script will automatically install the server and client dependencies. Install the projects dependencies from the root directory with

`npm install`

To run the application in developer-mode (automatic refresh/restart upon code changes) run

`npm run dev`

To visit the client-side in your browser go to:

`localhost:3000`
_Note: The server is running on port `8080`_

Please note that this App is deployed using [Heroku](https://heroku.com/) and therefore the `npm run start` script is used only to startup the server in production mode. To be able to use this locally on your machine, you will have to run `npm run build` first, as the `build`-version of the client has to be generated first to be served by the server. You can then visit the App in your browser by going to `localhost:8080`

### Tests:

The tests of this repository are written using [cypress](https://cypress.io) and can be found in the `cypress/integration`-folder. To run the test suite use

`npm run test`

This will start the application server and open the Cypress Test Runner.
_Note: Before you run the tests make sure that you have build the applicaton using `npm run build`_

## Screencast

![Screencast](/client/public/screencast.gif)
