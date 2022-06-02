
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const url = require('url');
const fs = require('fs');
const favicon = require('favicon');

module.exports = function (app, config) {

    app.use(cors());
    app.use(express.static(config.root + '/public'));
    // app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));

    mongoose.Promise = require('bluebird');
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', function () {
        throw new Error('unable to connect to database at ' + config.db);
    });
    mongoose.connection.once('open', function callback() {
        console.log("Mongoose connected to the database");
    });

    mongoose.set('useFindAndModify', false);

    app.use(bodyParser.json({ limit: '1000mb' }));

    const models = fs.readdirSync('./app/models');
    models.forEach((model) => {
        require(config.root + '/app/models/' + model);
    });

    const controllers = fs.readdirSync('./app/controllers');
    controllers.forEach((controller) => {
        contoller = require(config.root + '/app/controllers/' + controller)(app, config);
    });

    // all other requests redirect to 404
    app.all("*", function (req, res, next) {
        var error = new Error('Route not found.');
        error.status = 404;
        return next(error);
    });

    // error handler for all the applications
    app.use(function (err, req, res, next) {
        console.log(err.stack);
        let url_parts = url.parse(req.url);
        let msg;
        switch (err.status) {
            case 401:
                code = err.status;
                msg = { event: 'error', code: 401, message: "Unauthorized Access-" + url_parts.pathname, error: 401, ip: req.connection.remoteAddress, err: err.stack.toString() };
                break;
            case 409:
                code = err.status;
                msg = { event: 'error', code: 409, message: "Duplicate record found-" + url_parts.pathname, error: 409, ip: req.connection.remoteAddress, err: err.stack.toString() };
                break;
            case 404:
                code = err.status;
                msg = { event: 'error', code: 404, message: url_parts.pathname, error: 404, ip: req.connection.remoteAddress, err: err.stack.toString() };
                break;
            default:
                code = 500;
                msg = { event: 'error', code: 500, message: url_parts.pathname, error: 500, ip: req.connection.remoteAddress, err: err.stack.toString() };
                break;
        }
        console.log(msg);

        return res.status(code).json(msg);

    });

};
