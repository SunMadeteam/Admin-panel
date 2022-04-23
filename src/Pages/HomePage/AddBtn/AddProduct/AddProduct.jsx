import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../Store/AsyncAction/addProduct";
import "./AddProduct.scss";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const [openHight, setOpenHight] = useState(false);

  const roggle = () => {
    setOpenHight(!openHight);
  };

  const category = useSelector((state) => state.Goods.category);
  const fail = useSelector(state => state.Add.res)
  console.log(fail)
  const [openCategory, setOpenCategory] = useState(false);

  const foggle = () => {
    setOpenCategory(!openCategory);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      description: "",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frasteniya.dp.ua%2Fru%2Fkomnatnie-cveti%2F&psig=AOvVaw1BeIsB7iXADZd202iMxpHU&ust=1650745319608000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjThdW_qPcCFQAAAAAdAAAAABAD",
      hight: "",
      complexity_of_care: "",
      price: 0,
      florist: null,
      quantity: "",
    },
    onSubmit: (values) => {
        dispatch(addProduct(values))
    },
  });
  return (
    <div className="add_product">
      <form className="goods_modal" onSubmit={formik.handleSubmit}>
        <h2 style={{ marginTop: "17px" }}>Добавить товар</h2>
        <label className="goods_label label_margin">Добавить фото</label>
        <img src="alt" className="goods_img" />
        <label className="goods_label">Название</label>
        <input
          className="goods_input"
          placeholder="Название товара"
          name="name"
          type="text"
          value={formik.name}
          onChange={formik.handleChange}
        />
        <label className="goods_label">Цена</label>
        <input
          placeholder="Цена товара"
          name="price"
          type="text"
          value={formik.price}
          onChange={formik.handleChange}
          className="goods_input"
        />
        <label className="goods_label">Описание</label>
        <textarea
          placeholder="Описание товара"
          className="goods_description"
          name="description"
          type="text"
          value={formik.name}
          onChange={formik.handleChange}
        />

        <div className="care_position">
          {open === false ? (
            <div className="care_flex">
              <h3>Сложность ухода</h3>
              <div onClick={toggle} className="care_vector__img"></div>
            </div>
          ) : (
            <div>
              <div className="care_flex">
                <h3>Сложность ухода</h3>
                <div onClick={toggle} className="care_vector__img2"></div>
              </div>
              <div className="care_flex1">
                <label for="care">Лёгкий</label>
                <input
                  id="care"
                  value="easy"
                  type="radio"
                  name="complexity_of_care"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="care_flex1">
                <label for="care2">Средний</label>
                <input
                  id="care2"
                  value="middle"
                  type="radio"
                  name="complexity_of_care"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="care_flex1">
                <label for="care3">Сложный</label>
                <input
                  id="care3"
                  value="hard"
                  type="radio"
                  name="complexity_of_care"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          )}
        </div>

        {/* <pre>{product.complexity_of_care}</pre> */}

        <div className="category_position">
          {openHight === false ? (
            <div className="category_flex hight_flex">
              <h3>Высота</h3>
              <div onClick={roggle} className="category_vector__img"></div>
            </div>
          ) : (
            <div>
              <div className="category_flex hight_flex">
                <h3>Высота:</h3>
                <div onClick={roggle} className="category_vector__img2"></div>
              </div>
              <div className="category_flex1">
                <p>0.5 м</p>
                <input
                  name="hight"
                  value="0.50"
                  type="radio"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="category_flex1">
                <p>1 м</p>
                <input
                  name="hight"
                  value="1.00"
                  type="radio"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="category_flex1">
                <p>1.5 м</p>
                <input
                  name="hight"
                  value="1.50"
                  type="radio"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="category_flex1">
                <p>2 ма</p>
                <input
                  name="hight"
                  value="2.00"
                  type="radio"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="category_flex1">
                <p>2.5 м</p>
                <input
                  name="hight"
                  value="2.50"
                  type="radio"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="category_flex1">
                <p>3 м</p>
                <input
                  name="hight"
                  value="3.00"
                  type="radio"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="category_flex1">
                <p>3.5 м</p>
                <input
                  name="hight"
                  value="3.50"
                  type="radio"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          )}
        </div>

        <div className="category_position">
          {openCategory === false ? (
            <div className="category_flex">
              <h3>Категории</h3>
              <div onClick={foggle} className="category_vector__img"></div>
            </div>
          ) : (
            <div>
              <div className="category_flex">
                <h3>Категории</h3>
                <div onClick={foggle} className="category_vector__img2"></div>
              </div>
              {category.results.map((element, index) => (
                <label className="category_flex1" key={index}>
                  <p>{element.name}</p>
                  <input
                    name="category"
                    type="radio"
                    value={element.id}
                    onChange={formik.handleChange}
                  />
                </label>
              ))}
            </div>
          )}
        </div>

        <button className="goods_button" type="submit">
          СОХРАНИТЬ
        </button>
      </form>
    </div>
  );
};
