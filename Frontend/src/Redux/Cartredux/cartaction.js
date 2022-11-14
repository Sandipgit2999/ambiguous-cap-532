import axios from "axios";
import * as types from "./cartactiontype";

export const getCart = () => async (dispatch) => {
  dispatch({ type: types.CART_DATA_LOADING });
  return axios
    .get(`https://ambigious-cap-backend.onrender.com/cart`)
    .then((r) => {
      console.log(r.data);
      dispatch({ type: types.CART_DATA_SUCESS, payload: r.data });
    })
    .catch(() => dispatch({ type: types.CART_DATA_FAIL }));
};
