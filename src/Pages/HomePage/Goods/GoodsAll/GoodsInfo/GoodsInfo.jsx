import React, { useEffect, useState } from "react";
import "./GoodsInfo.scss";
import { Delete } from "../../../Delete/Delete";
import { ModalAdd } from "../../../AddBtn/ModalAdd/ModalAdd";
import { Care } from "../HardCare/Care";
import { Category } from "../HardCare/Category";
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "../../../../../Store/AsyncAction/getGoods";
import { getProduct } from "../../../../../Store/AsyncAction/getProduct";
import { Hight } from "../HardCare/Hight";
import { Pagination } from "../../../Pagination/Pagination";
import { paginationGoods } from "../../../../../Store/AsyncAction/pagination";
import { deleteProduct } from "../../../../../Store/AsyncAction/deleteProduct";
import { changeGoodsInput } from "../../../../../Store/Actions/Action";
export const GoodsInfo = () => {
  const goods = useSelector((state) => state.Goods.goods);
  const product = useSelector((state) => state.Goods.product);
  // const category = useSelector(state => state.Goods.category)
  console.log(product);
  // console.log(category)

  useEffect(() => {
    dispatch(getGoods());
  }, []);

  const getProductById = (id) => {
    dispatch(getProduct(id));
  };

  const [modalActive, setModalActive] = useState(false, getProductById);

  const [form, setForm] = useState({
    name: "",
    number: "",
    password: "",
    usertype: "",
    branch: "",
    is_active: true,
  });
  const dispatch = useDispatch();

  const onChange = (type, value) => {
    // dispatch(clearErr())
    console.log(type);
    dispatch(changeGoodsInput(type, value));
    // setForm({
    //   ...form,
    //   [type]: value,
    // });
    // console.log(form)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("signup", form);
    // dispatch(registerStaff(form))
  };

  return (
    <div>
      {/* {goods.results.map(item=>console.log(item))} */}
      {goods.results.map((element, index) => (
        <div className="goods_info1" key={element.id}>
          <div
            className="goods_info"
            onClick={() => setModalActive(true, getProductById(element.id))}
          >
            <div className="info_???">
              <h4>{index + 1}</h4>
            </div>
            <div className="info_img">
              <img src={element.image} width="84px" height="80px" />
            </div>
            <div className="info_title">
              <h4>{element.name}</h4>
            </div>
            <div className="info_category">
              <h4>{element.category.name}</h4>
            </div>
            <div className="info_description">
              <h4>{element.description}</h4>
            </div>
          </div>
          <div className="info_delete">
            <Delete id={element.id} take={deleteProduct} />
          </div>
        </div>
      ))}
      <Pagination
        next={goods.next}
        previous={goods.previous}
        take={paginationGoods}
      />
      <ModalAdd active={modalActive} setActive={setModalActive}>
        <div>
          <form className="goods_modal" onSubmit={onSubmit}>
            <h2>???????????? ????????????</h2>
            <label className="goods_label label_margin">???????????????? ????????</label>
            <img src={product.image} className="goods_img" />
            <label className="goods_label">????????????????</label>
            <input
              className="goods_input"
              value={product.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
            <label className="goods_label">????????</label>
            <input
              value={product.price + " c"}
              className="goods_input"
              onChange={(e) => onChange("price", e.target.value)}
            />
            <label className="goods_label">????????????????</label>
            <textarea
              className="goods_description"
              value={product.description}
            />
            <Care />
            {/* <pre>{product.complexity_of_care}</pre> */}
            <Hight />
            <Category />
            <button className="goods_button" type="submit">
              ??????????????????
            </button>
          </form>
        </div>
      </ModalAdd>
    </div>
  );
};
