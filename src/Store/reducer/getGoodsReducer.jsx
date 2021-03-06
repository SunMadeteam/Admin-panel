import {
  GET_GOODS,
  GET_PRODUCT,
  PAGINATION_GOODS,
  DELETE_PRODUCT,
  GET_CATEGORY,
  GET_CATEGORY_BY_ID,
  GET_GOODS_BY_CATEGORY,
  CHANGE_GOODS_INPUT,
  SEARCH_PRODUCT_BY_NAME,
} from "../../const";

const initialState = {
  goods: {
    results: [],
  },
  product: {
    results: [],
  },
  category: {},
};

export const getGoodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS:
      return { ...state, goods: action.payload };
    case GET_PRODUCT:
      return { ...state, product: action.payload };
    case PAGINATION_GOODS:
      return { ...state, goods: action.payload };
    case DELETE_PRODUCT:
      return {
        ...state,
        goods: {
          results: state.goods.results.filter(
            (element) => action.payload !== element.id
          ),
        },
      };
    case GET_CATEGORY:
      return { ...state, category: action.payload };
    case GET_GOODS_BY_CATEGORY:
      return { ...state, goods: action.payload };
    // case CHANGE_GOODS_INPUT:
    //   return { ...state, product:{...state.product, action.payload };
    case SEARCH_PRODUCT_BY_NAME:
      return { ...state, goods: action.payload };
    case SEARCH_PRODUCT_BY_NAME:
      return { ...state, goods: action.payload };
    default:
      return state;
  }
};
