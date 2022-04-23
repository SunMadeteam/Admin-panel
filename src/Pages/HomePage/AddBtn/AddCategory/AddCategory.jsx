import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../../Store/AsyncAction/addCategory";
import "./AddCategory.scss";
export const AddCategory = () => {

    const dispatch = useDispatch()

    const formik=useFormik({
        initialValues:{
            name:""
        },
        onSubmit:(values)=>{
            dispatch(addCategory(values))
        }
    })
  return (
    <div className="add_category">
      <p style={{ fontSize: "26px", fontWeight: "bold", marginTop: "17px" }}>
        Добавить категорию
      </p>

      <form onSubmit={formik.handleSubmit}>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#989797",
            textAlign: "left",
            marginLeft: "50px",
            marginTop: "28px",
            marginBottom: "5px",
          }}
        >
          Новая категория
        </p>
        <input
          className="add_category__input"
          placeholder="Категория"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <p style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#989797",
            textAlign: "left",
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "5px",
          }}>Добавить фото</p>
        <input
          className="add_category__photo"
          type="text"
          name="photo"
          value=""
        />
        <button type="submit" className="add_category__button">ДОБАВИТЬ</button>
      </form>
    </div>
  );
};
