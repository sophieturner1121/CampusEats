import { useState, useCallback } from "react";
import PortalPopup from "../components/PortalPopup";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import "./Snacks.css";

const Snacks = () => {
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/breakfast");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/breakfast");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onRectangle10Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/lunch");
  }, [navigate]);

  const onRectangle11Click = useCallback(() => {
    navigate("/lunch");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/drinks");
  }, [navigate]);

  const onRectangle12Click = useCallback(() => {
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
      <div className="snacks1">
        <div className="rectangle-parent4">
          <div className="group-child11" />
          <div className="bingo">Bingo</div>
          <div className="div15">₱11.00</div>
          <div className="mas-sweet-pa">mas sweet pa ni bff</div>
          <img className="image-119-icon" alt="" src="/image-119@2x.png" />
          <div className="cit-u-cafeteria1">CIT-U CAFETERIA</div>
          <div className="group-child12" />
          <div className="search-meal-here1">Search Meal Here</div>
          <img className="image-10-icon1" alt="" src="/image-10@2x.png" />
          <div className="group-child13" />
          <div className="snacks2">Snacks</div>
          <div className="group-child14" />
          <div className="meatroll">Meatroll</div>
          <div className="div16">₱15.00</div>
          <div className="so-meatty">so meatty</div>
          <img className="image-120-icon" alt="" src="/image-120@2x.png" />
          <div className="group-child15" />
          <div className="chocolate-stick">Chocolate Stick</div>
          <div className="div17">₱12.00</div>
          <div className="mas-cold-pa">mas cold pa kaysa ni bff</div>
          <img className="image-121-icon" alt="" src="/image-121@2x.png" />
          <div className="group-child16" />
          <div className="hotdog-w-bun">Hotdog w/ Bun</div>
          <div className="div18">₱25.00</div>
          <div className="mas-hot-pa">mas hot pa ni idle</div>
          <img className="image-122-icon" alt="" src="/image-122@2x.png" />
          <div className="group-child17" />
          <div className="pinipig">Pinipig</div>
          <div className="div19">₱25.00</div>
          <div className="mas-cold-pa1">mas cold pa kaysa ni bff</div>
          <img className="image-123-icon" alt="" src="/image-123@2x.png" />
          <div className="group-child18" />
          <div className="magic-creams">Magic Creams</div>
          <div className="div20">₱11.00</div>
          <div className="mas-sweet-pa1">mas sweet pa ni bff</div>
          <img className="image-124-icon" alt="" src="/image-124@2x.png" />
          <div className="group-child19" />
          <div className="fita">Fita</div>
          <div className="div21">₱11.00</div>
          <div className="mas-refreshing-kaysa1">
            mas refreshing kaysa ni bff
          </div>
          <img className="image-125-icon" alt="" src="/image-125@2x.png" />
        </div>
        <button className="rectangle-parent5" onClick={onGroupButtonClick}>
          <div className="group-child20" onClick={onRectangle9Click} />
          <div className="breakfast1">Breakfast</div>
        </button>
        <button className="rectangle-parent6" onClick={onGroupButton1Click}>
          <div className="group-child20" onClick={onRectangle10Click} />
          <div className="all1">All</div>
        </button>
        <button className="rectangle-parent7" onClick={onGroupButton2Click}>
          <div className="group-child20" onClick={onRectangle11Click} />
          <div className="lunch1">Lunch</div>
        </button>
        <button className="rectangle-parent8" onClick={onGroupButton3Click}>
          <div className="group-child20" onClick={onRectangle12Click} />
          <div className="drinks2">Drinks</div>
        </button>
        <img className="snacks-child" alt="" src="/rectangle-11.svg" />
        <img className="campuseats-icon1" alt="" src="/campuseats1.svg" />
        <img className="image-30-icon1" alt="" src="/image-301@2x.png" />
        <div className="jan-shaono1">Jan Shaono</div>
        <img
          className="frame-icon6"
          alt=""
          src="/frame5.svg"
          onClick={openDropDownPopup}
        />
        <div className="div22">21-1927-07762</div>
        <button className="image-811" onClick={openCartPopup} />
        <button className="image-801" onClick={onImage80Click} />
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

export default Snacks;
