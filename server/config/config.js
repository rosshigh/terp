var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

var config = {
    root: rootPath,
    port: 80,
    db: 'mongodb://127.0.0.1/ts410',
  }

module.exports = config;
