import * as types from "./cartactiontype";

const cartInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case types.CART_DATA_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.CART_DATA_SUCESS: {
      return { ...state, loading: false, error: false, data: payload };
    }
    case types.CART_DATA_FAIL: {
      return { ...state, loading: false, error: true };
    }
  }

  return state;
};
