require('dotenv').config();

// import the default configuration
var defaultConfig = require('./wdio.conf.js').config;


// we dont't need the path property
delete defaultConfig.path;

// clone default config and set up browserstack service
var browserStackConfig = Object.assign(defaultConfig, {
    capabilities: [
        {
            browserName: 'chrome',
            platform: 'WIN10',
            version: 'latest'
        }
    ],
    services: ['testingbot'],
    user: process.env.TB_KEY,
    key: process.env.TB_SECRET,
    tbTunnel: true
});

exports.config = browserStackConfig;