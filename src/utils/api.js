const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000"


const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel){
    try{
        const response = await fetch(url,options)
        if(response.status === 204){
            return null
        }

        const payload = await response.json()
        if(payload.error){
            return Promise.reject({message: payload.error})
        }
        return payload.data
    }catch(error){
        if(error.name !== "AbortError"){
            throw error
        }
        return Promise.resolve(onCancel)
    }
}


export async function listEvents(date,signal){
    const url = new URL(`${API_BASE_URL}/events`);
    url.searchParams.append("date", date)
    return await fetchJson(url,{headers,signal},[])
}