import axios from "axios"

const instance=axios.create({
  baseURL:"http://211.67.177.56:8080",
  timeout:1500,
})
 const xhr={
     get(url,data,config={})
     {
        let headers={
         'token':sessionStorage.getItem('token')
       };
        config.headers={...config.headers,...headers}
       return new Promise((resolve,reject)=>{
         instance.get(url,{params:data,...config}).then(res=>{
            resolve(res.data);
         }).catch(err=>{
            reject(err)
         })
       })
     },
     myFetch(url,data,config={},method)
     {
       let headers={
         'token':sessionStorage.getItem('token')
       };
       config.headers={...config.headers,...headers}
       return new Promise((resolve,reject)=>{
         instance[method](url,data,config).then(res=>{
           resolve(res.data);
         }).catch(err=>{
           reject(err)
         })
       })
     },
     post(url,data)
     {
       return this.myFetch(url,data,{},"post");
     }
 }

 export {
  xhr
}
