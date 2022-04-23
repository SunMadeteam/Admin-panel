import React, {useState} from "react";
import "./CompletedFilter.scss";
export const CompletedFilter = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      {open === false ? (
        <div className="filter_icon__img" onClick={toggle}></div>
      ) : (
        <div className="completed_filter">
          <div>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Фильтр</p>
            <div className="filter_icon__img2" onClick={toggle}></div>
          </div>
          <div>
          <label className="custom-radio">
            <p>За день</p> <input type="radio" name="filter" />
            <span></span>
          </label>
          </div>
          <div>
          <label className="custom-radio">
            <p>За неделю</p> <input type="radio" name="filter"/>
            <span></span>
          </label>
          </div>
          <div>
          <label className="custom-radio">
            <p>За текущий месяц</p> <input type="radio" name="filter"/>
            <span></span>
            </label>
          </div>
          <div>
          <label className="custom-radio">
            <p>За 3 месяца</p> <input type="radio" name="filter"/>
            <span></span>
            </label>
          </div>
          <div>
          <label className="custom-radio">
            <p>За 6 месяцев</p> <input type="radio" name="filter"/>
            <span></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
