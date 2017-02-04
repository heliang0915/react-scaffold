/**
 * @author: heliang
 * @date: 2017/1/13
 */
let path=require("path");
let webpack=require('webpack');
let HtmlWebpackPlugin=require("html-webpack-plugin");

var ExtractTextPlugin=require("extract-text-webpack-plugin");
var CommonsChunkPlugin=webpack.optimize.CommonsChunkPlugin;

let reactPath=path.join(__dirname,"./node_modules/react/dist/react.js");
let reactDomPath=path.join(__dirname,'./node_modules/react-dom/dist/react-dom.js');

console.log("生产环境...");


console.log(new webpack.optimize.UglifyJsPlugin);

module.exports={
    entry:{
        app:path.resolve(__dirname,'src/app.js'),
        libs:['react','react-dom','react-router','react-redux','isomorphic-fetch']
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js?[hash]'
    },
    devServer:{
      contentBase:"build",
      stats:{colors:true}
    },
    resolve:{
       extensions:['','.js','.css','.jsx'] //,
       // alias:{
       //     'react':reactPath,
       //     'react-dom':reactDomPath
       // }
    },
    module:{
        loaders:[
            {
             test:/\.js$/,
             loaders:['babel'], //'react-hot',
             exclude:path.resolve(__dirname,'node_modules')
            },
            { test: /\.css$/,
                //将分散的css合并
                loader: ExtractTextPlugin.extract("style", "css")
            },{
             test:/\.json$/,
             loader:'json'
            },{
              test:/\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
              loader:'url?limit=1000'
            }
        ],
        noParse:[reactPath,reactDomPath]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/template/index.ejs'),
            title:'生产环境'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        //合并第三方代码
        new CommonsChunkPlugin({
            name:"libs",
            filename:"libs.js?[hash]",
            minChunks:Infinity
        }),
        //压缩时去掉警告
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                // remove all comments(注释)
                comments: false
            }
        }),
        //合并css
        new ExtractTextPlugin("[name].css?[hash]"),
        new webpack.NoErrorsPlugin()
    ]
}


