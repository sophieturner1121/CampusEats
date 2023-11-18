import { useState, useCallback } from "react";
import PopUpMeal1 from "../components/PopUpMeal1";
import PortalPopup from "../components/PortalPopup";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [isPopUpMeal1Open, setPopUpMeal1Open] = useState(false);
  const [isPopUpMeal2Open, setPopUpMeal2Open] = useState(false);
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const navigate = useNavigate();


  const openPopUpMeal1 = useCallback(() => {
    setPopUpMeal1Open(true);
  }, []);

  const closePopUpMeal1 = useCallback(() => {
    setPopUpMeal1Open(false);
  }, []);

  const onGroupButtonClick = useCallback(() => {
    navigate("/breakfast");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/breakfast");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/lunch");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/lunch");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/snacks");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/snacks");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/drinks");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/drinks");
  }, [navigate]);

  const openPopUpMeal2 = useCallback(() => {
    setPopUpMeal2Open(true);
  }, []);

  const closePopUpMeal2 = useCallback(() => {
    setPopUpMeal2Open(false);
  }, []);

  const onImage80Click = useCallback(() => {
  }, []);

  const openCartPopup = useCallback(() => {
    setCartPopupOpen(true);
  }, []);

  const closeCartPopup = useCallback(() => {
    setCartPopupOpen(false);
  }, []);

  const openDropDownPopup = useCallback(() => {
    setDropDownPopupOpen(true);
  }, []);

  const closeDropDownPopup = useCallback(() => {
    setDropDownPopupOpen(false);
  }, []);

  return (
    <>
      <div className="menu1">
        <div className="rectangle-parent6">
          <button className="rectangle-button" onClick={openPopUpMeal1} />
          <div className="cit-u-cafeteria">CIT-U CAFETERIA</div>
          <div className="palabok2">Palabok</div>
          <div className="div25">₱40.00</div>
          <div className="lameh-nga-palabok">Lameh nga palabok</div>
          <img className="image-67-icon2" alt="" src="/image-671@2x.png" />
          <div className="rectangle-parent7">
            <div className="group-child19" />
            <div className="all">All</div>
          </div>
          <div className="rectangle-parent8">
            <div className="group-child20" />
            <div className="search-meal-here">Search Meal Here</div>
            <img className="image-10-icon" alt="" src="/image-10@2x.png" />
          </div>
          <button className="group-button" onClick={onGroupButtonClick}>
            <div className="group-child21" onClick={onRectangle2Click} />
            <div className="breakfast">Breakfast</div>
          </button>
          <button className="rectangle-parent9" onClick={onGroupButton1Click}>
            <div className="group-child21" onClick={onRectangle3Click} />
            <div className="lunch">Lunch</div>
          </button>
          <button className="rectangle-parent10" onClick={onGroupButton2Click}>
            <div className="group-child21" onClick={onRectangle4Click} />
            <div className="snacks">Snacks</div>
          </button>
          <button className="rectangle-parent11" onClick={onGroupButton3Click}>
            <div className="group-child21" onClick={onRectangle5Click} />
            <div className="drinks">Drinks</div>
          </button>
          <div className="group-child25" />
          <div className="meatroll">Meatroll</div>
          <div className="div26">₱15.00</div>
          <div className="so-meatty">so meatty</div>
          <img className="image-72-icon" alt="" src="/image-72@2x.png" />
          <div className="group-child26" />
          <div className="batchoy1">Batchoy</div>
          <div className="div27">₱40.00</div>
          <div className="mas-hot-pa">mas hot pa ni idle</div>
          <img className="image-63-icon1" alt="" src="/image-631@2x.png" />
          <div className="group-child27" />
          <div className="porksteak">Porksteak</div>
          <div className="div28">₱50.00</div>
          <div className="si-idle-kay">si idle kay baboy og genshin</div>
          <img className="image-77-icon" alt="" src="/image-77@2x.png" />
          <div className="group-child28" />
          <div className="chocolate-stick">Chocolate Stick</div>
          <div className="div29">₱12.00</div>
          <div className="mas-cold-pa">mas cold pa kaysa ni bff</div>
          <img className="image-76-icon" alt="" src="/image-76@2x.png" />
          <div className="group-child29" />
          <div className="coke2">Coke</div>
          <div className="div30">₱30.00</div>
          <div className="mas-lami-pa">mas lami pa ni bff</div>
          <img className="image-75-icon" alt="" src="/image-75@2x.png" />
          <div className="group-child30" />
          <div className="bingo">Bingo</div>
          <div className="div31">₱11.00</div>
          <div className="mas-sweet-pa">mas sweet pa ni bff</div>
          <img className="image-73-icon" alt="" src="/image-73@2x.png" />
          <div className="group-child31" />
          <div className="water">Water</div>
          <div className="div32">₱15.00</div>
          <div className="mas-refreshing-kaysa">
            mas refreshing kaysa ni bff
          </div>
          <button className="rectangle-parent12" onClick={openPopUpMeal2}>
            <div className="group-child32" />
            <div className="hotcake1">Hotcake</div>
            <div className="div33">₱10.00</div>
            <div className="mas-hot-pa1">mas hot pa sa pinas</div>
            <img className="image-65-icon" alt="" src="/image-65@2x.png" />
            <img className="image-65-icon" alt="" src="/image-65@2x.png" />
          </button>
          <img className="image-109-icon" alt="" src="/image-109@2x.png" />
          <div className="group-child33" />
          <div className="hotdog-w-bun">Hotdog w/ Bun</div>
          <div className="div34">₱25.00</div>
          <div className="mas-hot-pa2">mas hot pa ni idle</div>
          <img className="image-110-icon1" alt="" src="/image-1101@2x.png" />
          <div className="group-child34" />
          <div className="fried-chicken-1pc">Fried Chicken (1pc)</div>
          <div className="div35">₱20.00</div>
          <div className="si-idle-kay1">si idle kay baboy og genshin</div>
          <img className="image-111-icon" alt="" src="/image-111@2x.png" />
          <div className="group-child35" />
          <div className="pinipig">Pinipig</div>
          <div className="div36">₱25.00</div>
          <div className="mas-cold-pa1">mas cold pa kaysa ni bff</div>
          <img className="image-112-icon" alt="" src="/image-112@2x.png" />
          <div className="group-child36" />
          <div className="mt-dew">Mt. Dew</div>
          <div className="div37">₱30.00</div>
          <div className="mas-lami-pa1">mas lami pa ni bff</div>
          <img className="image-113-icon" alt="" src="/image-113@2x.png" />
          <div className="group-child37" />
          <div className="magic-creams">Magic Creams</div>
          <div className="div38">₱11.00</div>
          <div className="mas-sweet-pa1">mas sweet pa ni bff</div>
          <img className="image-114-icon" alt="" src="/image-114@2x.png" />
          <div className="group-child38" />
          <div className="fita">Fita</div>
          <div className="div39">₱11.00</div>
          <div className="mas-refreshing-kaysa1">
            mas refreshing kaysa ni bff
          </div>
          <img className="image-115-icon" alt="" src="/image-115@2x.png" />
        </div>
        <img className="menu-child" alt="" src="/rectangle-11.svg" />
        <img className="campuseats-icon" alt="" src="/campuseats1.svg" />
        <img className="image-30-icon" alt="" src="/image-301@2x.png" />
        <div className="jan-shaono">Jan Shaono</div>
        <button className="image-80" onClick={onImage80Click} />
        <button className="image-81" onClick={openCartPopup} />
        <button className="frame1" onClick={openDropDownPopup}>
          <img
            className="svgrepo-iconcarrier"
            alt=""
            src="/svgrepo-iconcarrier.svg"
          />
        </button>
        <div className="div40">21-1927-07762</div>
      </div>
      {isPopUpMeal1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUpMeal1}
        >
          <PopUpMeal1 onClose={closePopUpMeal1} />
        </PortalPopup>
      )}
      {isPopUpMeal2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closePopUpMeal2}
        >
          <PopUpMeal2 onClose={closePopUpMeal2} />
        </PortalPopup>
      )}
      {isCartPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.5)"
          placement="Top center"
          onOutsideClick={closeCartPopup}
        >
          <Cart onClose={closeCartPopup} />
        </PortalPopup>
      )}
      {isDropDownPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.5)"
          placement="Centered"
          onOutsideClick={closeDropDownPopup}
        >
          <DropDown onClose={closeDropDownPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Menu;
