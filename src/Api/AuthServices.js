import tokenServices from "../Utils/TokenServices"

export function login(body){
    return fetch('api/auth/login',{
     method: "POST",
     body: JSON.stringify(body),
     headers:{
       "Content-Type": "application/json",
     }
    }).then((resp) =>{
       if(resp.ok) return resp.json();
       throw new Error('could not login')
    }).then((data) =>{
        tokenServices.setToken(data.access_token)
        return data
      })
}