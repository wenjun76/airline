const path = require('path')
const resolve = dir => path.join(__dirname, dir)
 
module.exports={

    chainWebpack: config => {
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@',resolve('src'))
            .set('assets',resolve('src/assets'))
            // .set('commonjs',resolve('src/commonjs'))
            .set('components',resolve('src/components'))
            // .set('network',resolve('src/network'))
            .set('views',resolve('src/views'))
            .set('network',resolve('src/network'))
            //注意 store 和 router 没必要配置
　　　　
    }
}