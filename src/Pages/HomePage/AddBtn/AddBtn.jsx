import React from "react";
import "./AddBtn.scss";
import { useState } from "react";
import { ModalAdd } from "./ModalAdd/ModalAdd";
import { AddStaff } from "./AddStaff/AddStaff";
import { AddCategory } from "./AddCategory/AddCategory";
import { AddProduct } from "./AddProduct/AddProduct";
const AddBtn = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const [modalActiveStaff, setModalActiveStaff] = useState(false);
  const [modalActiveCategory, setModalActiveCategory] = useState(false);
  const [modalActiveProduct, setModalActiveProduct] = useState(false);

  return (
    <div className="add_content">
      {open === false ? (
        <button className="add_btn" onClick={toggle}>
          Добавить
        </button>
      ) : (
        <div className="add_info">
          <button className="add_revers" onClick={toggle}>
            <p>Добавить</p>
          </button>
          <button onClick={() => setModalActiveProduct(true)}>
            <p>Товары</p>
          </button>
          <button onClick={() => setModalActiveCategory(true)}>
            <p>Категории</p>
          </button>
          <button onClick={() => setModalActiveStaff(true)}>
            <p>Сотрудники</p>
          </button>
        </div>
      )}
      <ModalAdd active={modalActiveStaff} setActive={setModalActiveStaff}>
        <AddStaff />
      </ModalAdd>
      <div className="category_modal">
        <ModalAdd
          active={modalActiveCategory}
          setActive={setModalActiveCategory}
        >
          <AddCategory />
        </ModalAdd>
      </div>
      <div className="product_modal">
      <ModalAdd active={modalActiveProduct} setActive={setModalActiveProduct}>
        <AddProduct />
      </ModalAdd>
      </div>
    </div>
  );
};

export default AddBtn;
