// Saves a JSON to HTTP Server

var url = require('url');
var http = require('http');
var querystring = require('querystring');
var config = require('../config.js');

module.exports = function(data, options, callback) {

    //console.log('data', data);
    //console.log('options', options);
    var req_opts = url.parse(config.http.url);

    req_opts.method = 'POST';
    req_opts.headers = {
        'Content-Type': config.http.content_type
    };

    if (config.http.content_type === 'x-www-form-urlencoded') {
        data = querystring.stringify(JSON.parse(data));
    }

    var req = http.request(req_opts, function(res) {
        res.setEncoding('utf8');
        console.log(res.headers);
        res.on('data', function (chunk) {
            console.log(chunk.toString());
        });
        if ([200, 201, 202].indexOf(res.statusCode) >= 0) {
            callback();
        } else {
            callback('Request failed: ' + res.statusCode);
        }
    });

    //console.log(req._headers);
    //console.log(data);
    // writes data to request body
    req.end(data);
};
