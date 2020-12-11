module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,//change host origin
                pathRewrite:{
                    '/api':''
                }
            }
        },
    },
    publicPath:'./',
    outputDir:'mimall',
    //indexPath:'index.html',
    productionSourceMap:false,
    chainWebpack: (config)=>{
        config.plugins.delete('prefetch');//删除预加载
    }
}