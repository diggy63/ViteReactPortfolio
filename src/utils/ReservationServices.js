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