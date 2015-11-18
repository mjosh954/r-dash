import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import open from 'open';

const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening on Localhost:3000');
  open('http://localhost:3000');
});
