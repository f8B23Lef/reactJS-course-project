module.exports = process.env.NODE_ENV === 'production'
  ? require('./webpack.prod')
  : require('./webpack.dev');
