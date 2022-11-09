import * as types from "./actionTypes"


export const getProducts =(params)=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST});
    return axios.get(`http://localhost:8080/products`,params)
    .then((res)=>{dispatch({type:types.GET_PRODUCTS_SUCCESS, payload:res.data})})
    .catch((err)=>{dispatch({type:types.GET_PRODUCTS_FAILURE,payload:err})})
}

