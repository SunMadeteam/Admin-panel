import  axios  from "axios";
import { ADD_CATEGORY, ADD_CATEGORY_FAILURE, API_POST_ADD_CATEGORY } from "../../const";


export const addCategory = (formData) => {
//   console.log("в экшыне",formData)
    return async (dispatch) => {
      return axios(API_POST_ADD_CATEGORY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Token ' + localStorage.getItem('token-sunMade')
        },
        data: JSON.stringify(formData), 
      })
        .then(() => {
          dispatch({ type: ADD_CATEGORY, payload: formData });
        })
        .catch((err) =>
          dispatch({ type: ADD_CATEGORY_FAILURE, payload: err.response.data })
        );
    };
  };