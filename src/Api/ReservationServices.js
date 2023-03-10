import tokenServices from '../Utils/TokenServices'


export function getReservations(){
    return fetch("/api/reservations/getall",{
        headers:{

        }
    }).then((res) => {
        console.log(res)
        if(res.ok) return res.json();
        throw new Error("result from api not there");
    }) 
}

export function getOne(id){
    return fetch(`/api/reservations/get/${id}`,{
        method:"GET",
        headers:{
            "Content-Type": "applications/json",
            'Authorization' : 'Bearer ' + tokenServices.getToken()
        }
    }).then((res) => {
        console.log(res)
        if(res.ok) return res.json();
        throw new Error("result from api not there");
    }) 
}

export function postReservation(body){
    return fetch('api/reservations/create',{
     method: "POST",
     body: JSON.stringify(body),
     headers:{
       "Content-Type": "application/json",
     }
    }).then((resp) =>{
       if(resp.ok) return resp.json();
       throw new Error('could not add')
    })
}

export function scanEmail(){
    return fetch("/api/emailReader/Scan", {
        method:"GET",
        headers:{
            "Content-Type": "applications/json",
            'Authorization' : 'Bearer ' + tokenServices.getToken()
        }

    }).then((resp) =>{
        console.log(resp)
        return resp.json();
    })
}

export function deleteReservation(id){
    return fetch(`api/reservations/delete/${id}`,{
     method: "DELETE",
     headers:{
       "Content-Type": "application/json",
       'Authorization' : 'Bearer ' + tokenServices.getToken()
     }
    }).then((resp) =>{
       if(resp.ok) return resp.json();
       throw new Error('could not add')
    })
}