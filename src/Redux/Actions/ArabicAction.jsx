import axios from "axios"


export const getArabicMovies =()=>(dispatch)=>{
   
    return axios.get("")
    .then((response)=>{
        dispatch({
            type:"GET_COMPANIES",
            payload:response.data
        })
    })
    .catch((err)=>console.log(err))
}