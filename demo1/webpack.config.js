const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: { //开发服务配置
    port: 3000,
    progress: true,
    contentBase: './build',
    compress: true
  },

  mode: 'production', //模式 开发 development    生产 production

  entry: './src/index.js',  //入口

  output: {
    filename: 'bundle.[hash].js',  //打包后的文件名
    path: path.resolve(__dirname, 'build')   //路径必须是一个绝对路径
  },

  module: { // 模块
    rules: [ //规则
      {
        // @css-loader  解决@import这种语法的    style-loader 他是吧 css 插入 head 的 标签中
        // loader 的特点 希望单一
        // loader 的用法 字符串只用一个loader
        // 多个 loader 需要 []
        // loader 的顺序 默认是从右到左 从下到上 执行
        // loader 还可以写成对象方式1
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'body'
            }
          },
          'css-loader', // @import 解析路径
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'body'
            }
          },
          'css-loader', // @import 解析路径
          'less-loader' // less -> css
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  //模板文件
      filename: 'index.html',
      minify: {  //压缩
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ]

}
