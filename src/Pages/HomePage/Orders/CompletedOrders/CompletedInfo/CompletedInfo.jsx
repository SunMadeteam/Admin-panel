import React, { useEffect, useState } from "react";
import "./CompletedInfo.scss";
import { Delete } from "../../../Delete/Delete";
import { ModalClient } from "../../Modals/ModalClient/ModalClient";
import "./CompletedInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOrderCompleted } from "../../../../../Store/AsyncAction/getOrder";
import { getOrderById } from "../../../../../Store/AsyncAction/getOrderById";
import { Pagination } from "../../../Pagination/Pagination";
import { paginationOrder } from "../../../../../Store/AsyncAction/pagination";
import { deleteOrder } from "../../../../../Store/AsyncAction/deleteOrder";
import { getOrderDetail } from "../../../../../Store/AsyncAction/getOrderDetail";
export const CompletedInfo = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderCompleted());
  }, []);
  const orderDetailById = (id) =>{
    dispatch(getOrderDetail(id))
    dispatch(getOrderById(id))
  }
  const order = useSelector((state) => state.Order.order);

  return (
    <div className="all">
      {order.results.map((element, index) => (
        <div className="order_info" key={index}>
          <div
            className="order_info"
            onClick={() =>
              setModalActive(true, orderDetailById(element.id))
            }
          >
            <div className="check_№">
              <h4>{index}</h4>
            </div>
            <div className="check_time">
              <h4>{element.date}</h4>
            </div>
            <div className="check_number">
              <h4>{element.user===null?element.number:element.user.number}</h4>
            </div>
            <div className="check_name">
              <h4>{element.user===null?element.name:element.user.name}</h4>
            </div>
            <div className="check_adres">
              <h4>{element.adress}</h4>
            </div>
          </div>
          <div className="check_delete">
            <Delete id={element.id} take={deleteOrder} />
          </div>
        </div>
      ))}
      <Pagination
        next={order.next}
        previous={order.previous}
        take={paginationOrder}
      />
      <ModalClient active={modalActive} setActive={setModalActive}>
        <div className="modal_text">
          <h3>№ 13</h3>
        </div>
        <div className="modal_order__flex">
          <label>Имя</label>
          <input className="modal_order__input" placeholder="Леонид"></input>
          <label>Номер</label>
          <input
            className="modal_order__input"
            placeholder="+996 000 111 111"
          ></input>
          <label>Адрес</label>
          <input
            className="modal_order__input input_height"
            placeholder="Жибек-Жолу 305, дом 30, кв. 5"
          ></input>
        </div>
        <div className="modal_goods__processed">
          <div className="goods_flex">
            <h3 className="goods_№">№</h3>
            <h3 className="goods_photo">Фото</h3>
            <h3 className="goods_title">Название</h3>
            <h3 className="goods_number">Кол-во</h3>
            <h3 className="goods_sum">Сумма</h3>
          </div>
          <div className="goods_content">
            <p className="content_№">1</p>
            <div className="img_1"></div>
            <p className="content_title">Монстера</p>
            <input className="input_number" placeholder="3"></input>
            <p>8400 c</p>
            <div className="goods_delete">
              <Delete />
            </div>
          </div>
          <div className="goods_content">
            <p className="content_№">2</p>
            <div className="img_2"></div>
            <p className="content_title">Листова земля</p>
            <input className="input_number" placeholder="3"></input>
            <p>1200 c</p>
            <div className="goods_delete">
              <Delete />
            </div>
          </div>
          <div className="goods_content">
            <p className="content_№">3</p>
            <div className="img_3"></div>
            <p className="content_title">Лейка</p>
            <input className="input_number" placeholder="3"></input>
            <p>1000 c</p>
            <div className="goods_delete">
              <Delete />
            </div>
          </div>
          <p className="modal_total__processed">10 600 c</p>
        </div>
        <div className="kur">
          <div className="kur_status">
            <div>
              <label>Имя</label>
              <p>Леонид</p>
            </div>
            <div className="kur_completed">Завершил</div>
          </div>

          <div className="kur_number">
            <label>Номер</label>
            <p>+996 000 111 111</p>
          </div>
          <div className="kur_adress">
            <label>Филиал</label>
            <p>Жибек-Жолу 305, дом 30, кв 5</p>
          </div>
        </div>
      </ModalClient>
    </div>
  );
};

export default CompletedInfo;
