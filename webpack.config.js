const path = require('path');
const HtmlWebPackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js', // de entrada tenemos el index.js
  output: {
    path: path.resolve(__dirname, 'dist'), // resuelve el patch me dtecta el directorio donde estoy me crea la carpeta dist
    filename: 'bundle.js', // le colocamos un nombre a nuestra carpeta de salida
  },
  // resolver las extenciones que tenemos para el proyecto
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // modulo con las reglas necesarias para el proyecto
  module: {
    rules: [
      {
        // identificar nuestros archivos de js y jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // excluimos los node modules
        use: {
          loader: 'babel-loader', // usamos el babel loader que instalamos para el loader
        },
      },
      {
        test: /\.html$/, // hacemos lo mismo con los archivos html
        use: [
          {
            loader: 'html-loader', // lo cargamos con html loader posteriormente descargado
          },
        ],
      },
      { // reglas para el css
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // con lo que se descargo lo usamos como loader
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  // ahora creamos los plugins
  plugins: [
    // creamos una nueva referencia al html webpack plugin
    new HtmlWebPackplugin({
      // template donde esta ubicado el archivo y filename cual nombre le vamos a colocar
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
};
