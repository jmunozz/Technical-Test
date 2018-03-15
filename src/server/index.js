import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


const express = require('express');
const app = express();
const PUBLIC = path.resolve('./public');


if (process.env.NODE_ENV === 'development'){
    const webpackConfig = require('../../webpack.dev.js');
    const compiler = webpack(webpackConfig);
    // Use webpack-dev-middleware for serving app.bundle.js
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {colors: true}
      }));
    // Use webpack-hot-middleware for hot reloading.
    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }))
} else {
    // Otherwise all assets are serving statically.
    app.use(express.static('public'));
}

// API routes.
app.get('/api/*', (req, res) => res.json({"success": false   }))

// Any other routes return the client app.
app.get('/*', (req, res) => res.sendFile(path.join(PUBLIC, 'index.html')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))