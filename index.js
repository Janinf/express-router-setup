'use strict';

/**
 * Sets up an express router with via a configuration function and return the router.
 * @param configureRouter {function(Router)} Function to configure the express router.
 * @returns {Router}
 */
module.exports = configureRouter => {
    const router = require('express').Router();
    configureRouter(router);
    return router;
};
