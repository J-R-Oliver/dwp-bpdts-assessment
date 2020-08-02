# DWP BPDTS Assessment

<table>
<tr>
<td>
An API which calls the API at https://bpdts-test-app.herokuapp.com/, and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London.
</td>
</tr>
</table>

### Prerequisites

To install this project you will need to have:

- [Node.js](https://nodejs.org)

Tested on `Node.js v12/v13/v14`.

### Installation

To start, please `fork` and `clone` the repository to your local machine. First you will need to install the dependencies.

```
npm install
```

The following command will start the server listening on the default port of 9090. A different port can be provided as an environment variable.

```
npm start
```

## Endpoints

There are two endpoints available:

> `api/people`

Returns all people available from the BPDTS endpoint.

> `api/people/london`

Returns all people who are listed as either living in London or whose current coordinates are within 50 miles of London.

## Testing

All tests have been written using [Jest](https://jestjs.io). A pre-written script has been made to initiate a test run.

```
npm test
```

A pretest script has been written and configured to run `eslint` automatically prior to starting Jest. This will highlight any linting errors.

Prior to any `commit` or `push` a full test run will be started. This has been automated using [Husky](https://github.com/typicode/husky).

## Linting

This project is being linted with `eslint` configured with the following rule sets:

- [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Prettier](https://github.com/prettier/eslint-config-prettier)
- [Jest](https://github.com/jest-community/eslint-plugin-jest)
- [Jest Formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
- [Node](https://github.com/mysticatea/eslint-plugin-node)
- [Node Security](https://github.com/nodesecurity/eslint-plugin-security)

## Built With

- [Express](http://expressjs.com) - a fast, unopinionated, minimalist web framework for Node.js.
- [Axios](https://github.com/axios/axios) - a promise based HTTP client for the browser and node.js.
- [Haversine](https://github.com/njj/haversine#readme) -
  a simple haversine formula module for Node.js
