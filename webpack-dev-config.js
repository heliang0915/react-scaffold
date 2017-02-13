/**
 * @author: heliang
 * @date: 2017/1/13
 */
let path=require("path");
let webpack=require('webpack');
let HtmlWebpackPlugin=require("html-webpack-plugin");
//开发环境下使用
let OpenBrowserWebpackPlugin=require("open-browser-webpack-plugin");

let reactPath=path.join(__dirname,"./node_modules/react/dist/react.js");
let reactDomPath=path.join(__dirname,'./node_modules/react-dom/dist/react-dom.js');

console.log("开发环境...");

module.exports={
    entry:{
        app:path.resolve(__dirname,'src/app.js')
    },
    output:{
        path:path.resolve(__dirname,'build'),
        publicPath: '/',
        filename:'[name].js'
    },
    devServer:{
      contentBase:"build",
      stats:{colors:true}
    },
    devtool:"eval-source-map",
    resolve:{
       extensions:['','.js','.css','.jsx']
    },
    module:{
        loaders:[
            {
             test:/\.js$/,
             loaders:['babel'],
             exclude:path.resolve(__dirname,'node_modules')
            },{
             test:/\.css$/,
             loader:'style!css'
            },{
             test:/\.json$/,
             loader:'json'
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url?limit=5000&name=assets/images/[name].[ext]'
            },{
              test:/\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
              loader:'url?limit=1000&name=assets/font/[name].[ext]'
            },{
                test: /\.html$/,
                loader: 'html',
                query: {
                    minimize: true
                }
            }
        ],
        noParse:[reactPath,reactDomPath]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/template/index.ejs'),
            title:'开发环境'
        }),
        new OpenBrowserWebpackPlugin({
            url:"http://localhost:8080/"
        }),
        new webpack.NoErrorsPlugin()
    ]
}