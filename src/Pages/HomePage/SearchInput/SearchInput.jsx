import React from "react";
import "./SearchInput.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { searchProductByName } from "../../../Store/AsyncAction/searchProductByName";
export const SearchInput = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      state: "",
    },
    onSubmit:(values) =>{
      dispatch(searchProductByName(values.state))
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="search_input"
          placeholder="Поиск в системе"
          name="state"
          type="text"
          value={formik.values.state}
          onChange={formik.handleChange}
        />
        <button className="search_icons" type="submit"></button>
      </form>
    </div>
  );
};
