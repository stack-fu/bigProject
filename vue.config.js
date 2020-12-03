module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://',
                changeOrigin:true,//change host origin
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}