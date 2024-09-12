const path = require('path');

module.exports = {
  entry: '../assets/js/auth.js', // Entrada principal do seu projeto
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Saída do bundle na pasta dist
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regra para transpilar arquivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/, // Regra para incluir arquivos .css
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i, // Regra para imagens
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true // Para garantir que o roteamento do React funcione
  }
};
