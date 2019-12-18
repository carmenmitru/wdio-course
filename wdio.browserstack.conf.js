require('dotenv').config();

// import the default configuration
var defaultConfig = require('./wdio.conf.js').config;

// setup capabilities
let capabilities = [{
    // setup browser
    browserName: 'chrome',
    // setup build name : username +  current date 
    build: process.env.BROWSERSTACK_USERNAME + " " + new Date().toDateString(),
    // setup project name
    project: 'WebdriverIO Course'
}]

// we dont't need the path property
delete defaultConfig.path;

// clone default config and set up browserstack service
var browserStackConfig = Object.assign(defaultConfig, {
    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    browserstackLocal: true,
    capabilities
});

exports.config = browserStackConfig;