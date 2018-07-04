const webpack = require('webpack')
// vue.config.js
module.exports = {
    // options...
    configureWebpack:{
        plugins: [
            new webpack.ProvidePlugin({

                $:"jquery",

                jQuery:"jquery",

                "windows.jQuery":"jquery"

            })
        ]
    },
    devServer:{
        port:1995
    },
    baseUrl: process.env.NODE_ENV === 'development'
        ? '/'
        : '/production-sub-path/'
}