import * as types from "./actionTypes"
import axios from "axios"


export const getProducts =(params)=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST});
    return axios.get(`https://ambigious-cap-backend.onrender.com/makeup`,params)
    .then((res)=>{dispatch({type:types.GET_PRODUCTS_SUCCESS, payload:res.data})})
    .catch((err)=>{dispatch({type:types.GET_PRODUCTS_FAILURE,payload:err})})
}


// http://localhost:8080/products