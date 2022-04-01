import axios from "axios";

export function request(config){

    const instance = axios.create({
        method: 'get',
        baseURL: 'http://175.178.151.53:8080',
        timeout: 5000
        
    })
    
    // instance.interceptors.request.use(config => {
    //     console.log(config);
    //     return config
    // }, err => {
    //     console.log(err);
    // })

    instance.interceptors.response.use(res => {
        //console.log(res);
        return res.data
    }, err => {
        //console.log(err);
    })

    return instance(config)
    
}

// export function request(config, success, error){

//     return new Promise((resolve, reject) => {

//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
    
//         instance(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })

//     })
// }

// export function request(config, success, error){

//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance(config).then(res => {
//         success(res)
//     }).catch(err => {
//         error(err)
//     })


// }