import axios from "axios";
import { SEARCH_PRODUCT_BY_NAME } from "../../const";


export const searchProductByName = (id) => {
    return async (dispatch) => {
      const response = await axios(`https://sunmadebackend.herokuapp.com/api/products/?search=${id}`, {
        headers: {
          Authorization: "Token " + localStorage.getItem("token-sunMade"),
        },
      });
      dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: response.data });
    };
  };
  