import { useState, useCallback } from "react";
import PortalPopup from "../components/PortalPopup";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import "./Lunch.css";

const Lunch = () => {
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/breakfast");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/breakfast");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/snacks");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/snacks");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/drinks");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/drinks");
  }, [navigate]);

  const openDropDownPopup = useCallback(() => {
    setDropDownPopupOpen(true);
  }, []);

  const closeDropDownPopup = useCallback(() => {
    setDropDownPopupOpen(false);
  }, []);

  const openCartPopup = useCallback(() => {
    setCartPopupOpen(true);
  }, []);

  const closeCartPopup = useCallback(() => {
    setCartPopupOpen(false);
  }, []);

  const onImage80Click = useCallback(() => {
    // Please sync "Favorites" to the project
  }, []);

  return (
    <>
      <div className="lunch2">
        <div className="rectangle-parent9">
          <div className="group-child24" />
          <div className="porksteak">Porksteak</div>
          <div className="div23">₱50.00</div>
          <div className="si-idle-kay">si idle kay baboy og genshin</div>
          <img className="image-119-icon1" alt="" src="/image-1191@2x.png" />
          <div className="group-child25" />
          <div className="fried-chicken-1pc">Fried Chicken (1pc)</div>
          <div className="div24">₱20.00</div>
          <div className="si-idle-kay1">si idle kay baboy og genshin</div>
          <img className="image-120-icon1" alt="" src="/image-1201@2x.png" />
          <div className="group-child26" />
          <div className="cit-u-cafeteria2">CIT-U CAFETERIA</div>
          <div className="palabok1">Palabok</div>
          <div className="div25">₱40.00</div>
          <div className="lameh-nga-palabok">Lameh nga palabok</div>
          <img className="image-121-icon1" alt="" src="/image-1211@2x.png" />
          <div className="group-child27" />
          <div className="search-meal-here2">Search Meal Here</div>
          <img className="image-10-icon2" alt="" src="/image-10@2x.png" />
          <button className="rectangle-parent10" onClick={onGroupButtonClick}>
            <div className="group-child28" onClick={onRectangle4Click} />
            <div className="breakfast2">Breakfast</div>
          </button>
          <div className="group-child29" />
          <div className="lunch3">Lunch</div>
          <div className="group-child30" />
          <div className="batchoy1">Batchoy</div>
          <div className="div26">₱40.00</div>
          <div className="mas-hot-pa1">mas hot pa ni idle</div>
          <img className="image-122-icon1" alt="" src="/image-1221@2x.png" />
        </div>
        <button className="rectangle-parent11" onClick={onGroupButton1Click}>
          <div className="group-child28" onClick={onRectangle7Click} />
          <div className="all2">All</div>
        </button>
        <button className="rectangle-parent12" onClick={onGroupButton2Click}>
          <div className="group-child28" onClick={onRectangle8Click} />
          <div className="snacks3">Snacks</div>
        </button>
        <button className="rectangle-parent13" onClick={onGroupButton3Click}>
          <div className="group-child28" onClick={onRectangle9Click} />
          <div className="drinks3">Drinks</div>
        </button>
        <img className="lunch-child" alt="" src="/rectangle-11.svg" />
        <img className="campuseats-icon2" alt="" src="/campuseats1.svg" />
        <img className="image-30-icon2" alt="" src="/image-301@2x.png" />
        <div className="jan-shaono2">Jan Shaono</div>
        <img
          className="frame-icon7"
          alt=""
          src="/frame5.svg"
          onClick={openDropDownPopup}
        />
        <div className="div27">21-1927-07762</div>
        <button className="image-812" onClick={openCartPopup} />
        <button className="image-802" onClick={onImage80Click} />
      </div>
      {isDropDownPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropDownPopup}
        >
          <DropDown onClose={closeDropDownPopup} />
        </PortalPopup>
      )}
      {isCartPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.5)"
          placement="Top right"
          onOutsideClick={closeCartPopup}
        >
          <Cart onClose={closeCartPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Lunch;
