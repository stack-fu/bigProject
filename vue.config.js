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
        }
    },
    publicPath:'/mimall',
    indexPath:'mimall.html',
    productionSourceMap:false,
    chainWebpack: (config)=>{
        config.plugins.delete('prefetch');//删除预加载
    }
}