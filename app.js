'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();
var PUBLIC = _path2.default.resolve('./public');

if (process.env.NODE_ENV === 'development') {
    var webpackConfig = require('../../webpack.dev.js');
    var compiler = (0, _webpack2.default)(webpackConfig);
    // Use webpack-dev-middleware for serving app.bundle.js
    app.use((0, _webpackDevMiddleware2.default)(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true }
    }));
    // Use webpack-hot-middleware for hot reloading.
    app.use((0, _webpackHotMiddleware2.default)(compiler, {
        log: console.log
    }));
} else {
    // Otherwise all assets are serving statically.
    app.use(express.static('public'));
}

// API routes.
app.get('/api/*', function (req, res) {
    return res.json({ "success": false });
});

// Any other routes return the client app.
app.get('/*', function (req, res) {
    return res.sendFile(_path2.default.join(PUBLIC, 'index.html'));
});

app.listen(3000, function () {
    return console.log('Example app listening on port 3000!');
});
