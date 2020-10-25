
export const BasicRequest =  (peticion,url,param) => 
{

    switch(peticion){
        case 'REQUEST_LOGIN':
            return rqpost(url,param)

        break
        case 'REQUEST_MENU':
            return rqget(url,param)

        break
        default:
            return {}

    }
}
const rqget = async(url,param) =>{
    const option = {
        method: "GET",
        cache: 'no-cache',
        headers: {
            "Accept": 'application/json',
            "Content-Type":"application/json",
            "Authorization":param.token
        }
    }
    
    const response = await fetch(url,option);
    const json = await response.json();

   // console.log(json)
    return json
}

const rqpost = async(url,param) =>{
    const option = {
        method: "POST",
        cache: 'no-cache',
        body: JSON.stringify(param),
        headers: {
            "Accept": 'application/json',
            "Content-Type":"application/json"
        }
    }
    
    const response = await fetch(url,option);
    const json = await response.json();

    console.log(json)
    return json
}

