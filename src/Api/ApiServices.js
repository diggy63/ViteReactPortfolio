export function getJson(){
    return fetch("/api/gettest",{
        headers:{

        }
    }).then((res) => {
        console.log(res)
        if(res.ok) return res.json();
        throw new Error("result from api not there");
    }) 
}

export function postTest(name){
    console.log(name)
    return fetch('api/createtest',{
     method: "POST",
     body: JSON.stringify(name),
     headers:{
       "Content-Type": "application/json",
     }
    }).then((resp) =>{
       if(resp.ok) return resp.json();
       throw new Error('could not add')
    })
}