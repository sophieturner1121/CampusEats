import { useState, useCallback } from "react";
import PortalPopup from "../components/PortalPopup";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import "./Drinks.css";

const Drinks = () => {
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onDrinksContainerClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/breakfast");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/breakfast");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/lunch");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/lunch");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/snacks");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/snacks");
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
      <div className="drinks" onClick={onDrinksContainerClick}>
        <div className="rectangle-container">
          <div className="group-child2" />
          <div className="water">Water</div>
          <div className="div11">₱15.00</div>
          <div className="mas-refreshing-kaysa">
            mas refreshing kaysa ni bff
          </div>
          <img className="image-126-icon" alt="" src="/image-126@2x.png" />
          <div className="cit-u-cafeteria">CIT-U CAFETERIA</div>
          <div className="group-child3" />
          <div className="search-meal-here">Search Meal Here</div>
          <img className="image-10-icon" alt="" src="/image-10@2x.png" />
          <div className="group-child4" />
          <div className="drinks1">Drinks</div>
          <div className="group-child5" />
          <div className="coke">Coke</div>
          <div className="div12">₱30.00</div>
          <div className="mas-lami-pa">mas lami pa ni bff</div>
          <img className="image-127-icon" alt="" src="/image-127@2x.png" />
          <div className="group-child6" />
          <div className="mt-dew">Mt. Dew</div>
          <div className="div13">₱30.00</div>
          <div className="mas-lami-pa1">mas lami pa ni bff</div>
          <img className="image-128-icon" alt="" src="/image-128@2x.png" />
        </div>
        <button className="group-button" onClick={onGroupButtonClick}>
          <div className="group-child7" onClick={onRectangle5Click} />
          <div className="breakfast">Breakfast</div>
        </button>
        <button className="rectangle-parent1" onClick={onGroupButton1Click}>
          <div className="group-child7" onClick={onRectangle6Click} />
          <div className="all">All</div>
        </button>
        <button className="rectangle-parent2" onClick={onGroupButton2Click}>
          <div className="group-child7" onClick={onRectangle7Click} />
          <div className="lunch">Lunch</div>
        </button>
        <button className="rectangle-parent3" onClick={onGroupButton3Click}>
          <div className="group-child7" onClick={onRectangle8Click} />
          <div className="snacks">Snacks</div>
        </button>
        <img className="drinks-child" alt="" src="/rectangle-11.svg" />
        <img className="campuseats-icon" alt="" src="/campuseats1.svg" />
        <img className="image-30-icon" alt="" src="/image-301@2x.png" />
        <div className="jan-shaono">Jan Shaono</div>
        <img
          className="frame-icon5"
          alt=""
          src="/frame5.svg"
          onClick={openDropDownPopup}
        />
        <div className="div14">21-1927-07762</div>
        <button className="image-81" onClick={openCartPopup} />
        <button className="image-80" onClick={onImage80Click} />
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

export default Drinks;
