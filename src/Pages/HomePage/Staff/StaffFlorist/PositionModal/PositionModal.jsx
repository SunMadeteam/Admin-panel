import React, { useState } from "react";
import { useSelector } from "react-redux";

export const PositionModal = (props) => {
  
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const usertype = useSelector(state=>state.Staff.oneStaff.results)
  // console.log(usertype)
  
  const checkedValueCourier = () => {
    if (usertype[0].usertype === "runner") {
      return true;
    } else {
      return false;
    }
  };
  const checkedValueAdmin = () => {
    if (usertype[0].usertype === "admin") {
      return true;
    } else {
      return false;
    }
  };
  const checkedValueFlorist = () => {
    if (usertype[0].usertype === "florist") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div style={{position:"relative"}}>
      {open === false ? (
        <div className="add_flex">
          <h3 className="add_flex__usertype">Должность</h3>
          <div onClick={toggle} className="add_vector__img"></div>
        </div>
      ) : (
        <div>
          <div className="add_flex">
            <h3 className="add_flex__usertype">Должность</h3>
            <div onClick={toggle} className="add_vector__img2"></div>
          </div>
          <div className="add_flex1">
          <label className="custom-radio">
            <p>Админ</p>
            <input
              type="radio"
              name="radio"
              value="admin"
              checked={checkedValueAdmin()}
              // onChange={(e) => onChange("usertype", e.target.value)}
            />
            <span></span>
            </label>
          </div>
          <div className="add_flex1">
          <label className="custom-radio">
            <p>Курьер</p>
            <input
              type="radio"
              name="radio"
              value="runner"
              checked={checkedValueCourier()}
              // onChange={(e) => onChange("usertype", e.target.value)}
            />
            <span></span>
            </label>
          </div>
          <div className="add_flex1">
          <label className="custom-radio">
            <p>Флорист</p>
            <input
              type="radio"
              name="radio"
              value="florist"
              checked={checkedValueFlorist()}
              // onChange={(e) => onChange("usertype", e.target.value)}
            />
            <span></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
