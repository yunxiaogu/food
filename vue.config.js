module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 默认会有'@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  outputDir: 'dist', //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: false, //是否自动弹出浏览器页面
    host: "localhost",
    port: '8080',
    https: true, //是否使用https协议
    hotOnly: false, //是否开启热更新
    proxy: {
      '/api': {
        target: 'https://way.jd.com/jisuapi', //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
