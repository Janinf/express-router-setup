# Express Router Setup

An alternative way to create express router files.

## Installation
`npm install express-router-setup`

## Usage
### Examples
**index.js:**
```
const routerSetup = require('express-router-setup');

function configureRouter(router) {
    // Example route
    router.get("/", (req, res) => res.send('Hello World');
}

module.exports = routerSetup(configureRouter);
```

Or if you like to write short code like myself.

**index.js**
```
module.exports = require('express-router-setup')(router => {
    // Example route
    router.get("/", (req, res) => res.send('Hello World');
});
```

## API
This module is one function that creates an express router object, configures it with the
a custom configuration that the user can define via a function as a parameter
and then returns the router.

### Parameters
`configureRouter(Router)`

A function that receives a new express router object as a parameter. You can then
configure the router object however you want to.

* <code>Router</code>: An express router object
