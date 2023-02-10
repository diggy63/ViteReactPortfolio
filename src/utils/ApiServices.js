export function getJson(){
    return fetch("/api",{
        headers:{

        }
    }).then((res) => {
        console.log(res)
        if(res.ok) return res.json();
        throw new Error("result from api not there");
    }) 
}