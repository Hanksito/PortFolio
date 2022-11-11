import "../styleBtn.css";
import { useSelector, useDispatch } from "react-redux";
import { boleanStyle, boleanStyleF, selectbolean } from "../store/temaSlice";
const BtnTema = () => {
  const dispatch = useDispatch();
  const bolean = useSelector(selectbolean);
  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        className="dn"
        id="dn"
        onClick={() => {
          if (bolean) {
            dispatch(boleanStyleF());
          }
          dispatch(boleanStyle());
          console.log(bolean);
        }}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};

export default BtnTema;
