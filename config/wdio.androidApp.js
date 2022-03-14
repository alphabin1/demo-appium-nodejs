const {config} = require('./wdio.conf');

config.capabilities = [
    {
        maxInstances: 1,
        platformName: 'Android',
        platformVersion: '10',
        deviceName: 'a0b3e700',
        appPackage: 'com.wdiodemoapp',
        appActivity: '.MainActivity'
    }
];

exports.config = config;