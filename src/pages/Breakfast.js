import { useState, useCallback } from "react";
import PortalPopup from "../components/PortalPopup";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import "./Breakfast.css";

const Breakfast = () => {
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/lunch");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/lunch");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/snacks");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/snacks");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/drinks");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
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
      <div className="breakfast3">
        <div className="rectangle-parent14">
          <div className="group-child34" />
          <div className="cit-u-cafeteria3">CIT-U CAFETERIA</div>
          <div className="palabok2">Palabok</div>
          <div className="div28">₱40.00</div>
          <div className="lameh-nga-palabok1">Lameh nga palabok</div>
          <img className="image-116-icon" alt="" src="/image-1211@2x.png" />
          <button className="rectangle-parent15" onClick={onGroupButtonClick}>
            <div className="group-child35" onClick={onRectangle1Click} />
            <div className="all3">All</div>
          </button>
          <div className="rectangle-parent16">
            <div className="group-child36" />
            <div className="search-meal-here3">Search Meal Here</div>
            <img className="image-10-icon3" alt="" src="/image-10@2x.png" />
          </div>
          <div className="rectangle-parent17">
            <div className="group-child37" />
            <div className="breakfast4">Breakfast</div>
          </div>
          <button className="rectangle-parent18" onClick={onGroupButton1Click}>
            <div className="group-child35" onClick={onRectangle4Click} />
            <div className="lunch4">Lunch</div>
          </button>
          <button className="rectangle-parent19" onClick={onGroupButton2Click}>
            <div className="group-child35" onClick={onRectangle5Click} />
            <div className="snacks4">Snacks</div>
          </button>
          <button className="rectangle-parent20" onClick={onGroupButton3Click}>
            <div className="group-child35" onClick={onRectangle6Click} />
            <div className="drinks4">Drinks</div>
          </button>
          <div className="group-child41" />
          <div className="meatroll1">Meatroll</div>
          <div className="div29">₱15.00</div>
          <div className="so-meatty1">so meatty</div>
          <img className="image-117-icon" alt="" src="/image-120@2x.png" />
          <div className="group-child42" />
          <div className="batchoy2">Batchoy</div>
          <div className="div30">₱40.00</div>
          <div className="mas-hot-pa2">mas hot pa ni idle</div>
          <img className="image-118-icon" alt="" src="/image-1221@2x.png" />
          <div className="rectangle-parent21">
            <div className="group-child43" />
            <div className="hotcake">Hotcake</div>
            <div className="div31">₱10.00</div>
            <div className="mas-hot-pa3">mas hot pa sa pinas</div>
            <img className="image-65-icon" alt="" src="/image-65@2x.png" />
            <img className="image-65-icon" alt="" src="/image-65@2x.png" />
          </div>
        </div>
        <img className="breakfast-child" alt="" src="/rectangle-11.svg" />
        <img className="campuseats-icon3" alt="" src="/campuseats1.svg" />
        <img className="image-30-icon3" alt="" src="/image-301@2x.png" />
        <div className="jan-shaono3">Jan Shaono</div>
        <img
          className="frame-icon8"
          alt=""
          src="/frame5.svg"
          onClick={openDropDownPopup}
        />
        <div className="div32">21-1927-07762</div>
        <button className="image-813" onClick={openCartPopup} />
        <button className="image-803" onClick={onImage80Click} />
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

export default Breakfast;
