import React from "react"

import tokenServices from "./TokenServices";

function findUser(){
    const token = tokenServices.getToken()
    if(token){
        const opts = {
            headers: {
                'Authorization' : 'Bearer ' + tokenServices.getToken()
            }
        }
        return fetch("api/user/get", opts)
            .then((resp) =>{
                if(resp.ok) return resp.json();
                throw new Error('could not find user')
            })
    }else{
        return ''
    }

}

const userServices = {
    findUser,
}

export default userServices