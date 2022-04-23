import  axios  from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_FAILURE, API_POST_ADD_PRODUCT } from "../../const";


export const addProduct = (formData) => {
//   console.log("в экшыне",formData)
    return async (dispatch) => {
      return axios(API_POST_ADD_PRODUCT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Token ' + localStorage.getItem('token-sunMade')
        },
        data: JSON.stringify(formData), 
      })
        .then(() => {
          dispatch({ type: ADD_PRODUCT, payload: formData });
        })
        .catch((err) =>
          dispatch({ type: ADD_PRODUCT_FAILURE, payload: err.response.data })
        );
    };
  };