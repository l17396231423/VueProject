// vue.config.js
module.exports = {
    lintOnSave: false,
    devServer:{
        proxy: {
            '/api':{
                target:'http://api.mm2018.com:8090/api',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':'http://api.mm2018.com:8090/api'
                }
            }
        }
    }
}