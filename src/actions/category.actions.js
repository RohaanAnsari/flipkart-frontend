import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
  return async dispatch => {
    const res = await axios.get(`category/getcategory`);
    console.log(res);

    dispatch({ type: categoryConstants.GET_ALL_CATEGORY_REQUEST });

    setTimeout(() => {
      if (res.status === 200) {
        const { categoryList } = res.data;
        dispatch({
          type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
          payload: { categories: categoryList }
        })
      } else {

        dispatch({
          type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
          payload: { error: res.data.error }
        })

      }
    }, 2000);
  }
}