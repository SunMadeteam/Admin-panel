import { ADD_CATEGORY, ADD_CATEGORY_FAILURE, ADD_PRODUCT, ADD_PRODUCT_FAILURE } from "../../const";

const initialState = {
  category: {},
  product: {},
  err: {},
  res:{}
};

export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, category: action.payload };
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
      case ADD_PRODUCT:
      return { ...state, product: action.payload };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        res: action.payload,
      };
    default:
      return state;
  }
};
