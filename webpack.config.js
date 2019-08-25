const path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports =(env) => {
//   return require(`./webpack.${env}.js`)
// }

// "build:dev": "webpack --env dev --progress --profile --colors",
// "build:prod": "webpack --env prod --progress --profile --colors",

module.exports = {
  entry: {
    navBar: './src/navBar/navBar.jsx',
    photography: './src/portfolioComponents/photography.jsx',
    contact: './src/resumeComponents/contact.jsx',
    school: './src/resumeComponents/school.jsx',
    skill: './src/resumeComponents/skill.jsx',
    job: './src/resumeComponents/job.jsx',
    recipe: './src/recipeComponents/recipe.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/resumeComponents/contactImage', to: 'contactImage' },
      { from: 'src/resumeComponents/jobImages', to: 'jobImages' },
      { from: 'src/portfolioComponents/3DModeling', to: '3DModeling' },
      { from: 'src/portfolioComponents/MoviePoster', to: 'MoviePoster' },
      { from: 'src/portfolioComponents/DukeDurham', to: 'DukeDurham' },
      { from: 'src/portfolioComponents/PennyProject', to: 'PennyProject' },
      { from: 'src/portfolioComponents/Photoshop', to: 'Photoshop' },
      { from: 'src/portfolioComponents/photographyStyles.less', to: 'styleSheets' },
      { from: 'src/navBar/navBarStyles.less', to: 'styleSheets' },
      { from: 'src/resumeComponents/contactStyles.less', to: 'styleSheets' },
      { from: 'src/resumeComponents/educationStyles.less', to: 'styleSheets' },
      { from: 'src/resumeComponents/jobStyles.less', to: 'styleSheets' },
      { from: 'src/resumeComponents/skillStyles.less', to: 'styleSheets' },
      { from: 'src/recipeComponents/recipe.less', to: 'styleSheets' },
      { from: 'src/sharedStyles.less', to: 'styleSheets' },
    ])
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: [
            /component\.jsx$/, // select component by RegExp
            /\.async\.jsx$/, // select component by extension
            "/abs/path/to/component.jsx" // absolute path to component
        ],
        loader: "react-proxy-loader"
      },
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|JPG)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: ''
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  }
};