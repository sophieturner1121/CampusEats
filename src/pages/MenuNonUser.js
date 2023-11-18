import { useState, useCallback } from "react";
import Cart from "../components/Cart";
import PortalPopup from "../components/PortalPopup";
import PalabokForm from "../components/PalabokForm";
import HotcakeForm from "../components/HotcakeForm";
import { useNavigate } from "react-router-dom";
import styles from "./MenuNonUser.module.css";

const MenuNonUser = () => {
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onRectangle16Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onRectangle17Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onRectangle18Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onRectangle19Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openCartPopup = useCallback(() => {
    setCartPopupOpen(true);
  }, []);

  const closeCartPopup = useCallback(() => {
    setCartPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.menuNonUser}>
        <div className={styles.citUCafeteria}>CIT-U CAFETERIA</div>
        <PalabokForm />
        <div className={styles.menuNonUserChild} />
        <div className={styles.meatroll}>Meatroll</div>
        <div className={styles.div}>₱15.00</div>
        <div className={styles.soMeatty}>so meatty</div>
        <img className={styles.image72Icon} alt="" src="/image-72@2x.png" />
        <div className={styles.menuNonUserItem} />
        <div className={styles.batchoy}>Batchoy</div>
        <div className={styles.div1}>₱40.00</div>
        <div className={styles.masHotPa}>mas hot pa ni idle</div>
        <img className={styles.image63Icon} alt="" src="/image-63@2x.png" />
        <div className={styles.menuNonUserInner} />
        <div className={styles.porksteak}>Porksteak</div>
        <div className={styles.div2}>₱50.00</div>
        <div className={styles.siIdleKay}>si idle kay baboy og genshin</div>
        <img className={styles.image77Icon} alt="" src="/image-77@2x.png" />
        <div className={styles.rectangleDiv} />
        <div className={styles.chocolateStick}>Chocolate Stick</div>
        <div className={styles.div3}>₱12.00</div>
        <div className={styles.chocolateIceCream}>Chocolate Ice Cream</div>
        <img className={styles.image76Icon} alt="" src="/image-76@2x.png" />
        <div className={styles.menuNonUserChild1} />
        <div className={styles.coke}>Coke</div>
        <div className={styles.div4}>₱30.00</div>
        <div className={styles.masLamiPa}>mas lami pa ni bff</div>
        <img className={styles.image75Icon} alt="" src="/image-75@2x.png" />
        <div className={styles.menuNonUserChild2} />
        <div className={styles.bingo}>Bingo</div>
        <div className={styles.div5}>₱11.00</div>
        <div className={styles.masSweetPa}>mas sweet pa ni bff</div>
        <img className={styles.image73Icon} alt="" src="/image-73@2x.png" />
        <div className={styles.menuNonUserChild3} />
        <div className={styles.water}>Water</div>
        <div className={styles.div6}>₱15.00</div>
        <div className={styles.masRefreshingKaysa}>
          mas refreshing kaysa ni bff
        </div>
        <HotcakeForm />
        <img className={styles.image109Icon} alt="" src="/image-109@2x.png" />
        <div className={styles.menuNonUserChild4} />
        <div className={styles.hotdogWBun}>Hotdog w/ Bun</div>
        <div className={styles.div7}>₱25.00</div>
        <div className={styles.masHotPa1}>mas hot pa ni idle</div>
        <img className={styles.image110Icon} alt="" src="/image-1101@2x.png" />
        <div className={styles.menuNonUserChild5} />
        <div className={styles.friedChicken1pc}>Fried Chicken (1pc)</div>
        <div className={styles.div8}>₱20.00</div>
        <div className={styles.siIdleKay1}>si idle kay baboy og genshin</div>
        <img className={styles.image111Icon} alt="" src="/image-111@2x.png" />
        <div className={styles.menuNonUserChild6} />
        <div className={styles.pinipig}>Pinipig</div>
        <div className={styles.div9}>₱25.00</div>
        <div className={styles.masColdPa}>mas cold pa kaysa ni bff</div>
        <img className={styles.image112Icon} alt="" src="/image-112@2x.png" />
        <div className={styles.menuNonUserChild7} />
        <div className={styles.mtDew}>Mt. Dew</div>
        <div className={styles.div10}>₱30.00</div>
        <div className={styles.masLamiPa1}>mas lami pa ni bff</div>
        <img className={styles.image113Icon} alt="" src="/image-113@2x.png" />
        <div className={styles.menuNonUserChild8} />
        <div className={styles.magicCreams}>Magic Creams</div>
        <div className={styles.div11}>₱11.00</div>
        <div className={styles.masSweetPa1}>mas sweet pa ni bff</div>
        <img className={styles.image114Icon} alt="" src="/image-114@2x.png" />
        <div className={styles.menuNonUserChild9} />
        <div className={styles.fita}>Fita</div>
        <div className={styles.div12}>₱11.00</div>
        <div className={styles.masRefreshingKaysa1}>
          mas refreshing kaysa ni bff
        </div>
        <img className={styles.image115Icon} alt="" src="/image-115@2x.png" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.all}>All</div>
        </div>
        <div className={styles.menuNonUserChild10} />
        <div className={styles.searchMealHere}>Search Meal Here</div>
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        <div className={styles.rectangleGroup} onClick={onGroupContainer2Click}>
          <div className={styles.groupItem} onClick={onRectangle16Click} />
          <div className={styles.breakfast}>Breakfast</div>
        </div>
        <div
          className={styles.rectangleContainer}
          onClick={onGroupContainer3Click}
        >
          <div className={styles.groupItem} onClick={onRectangle17Click} />
          <div className={styles.lunch}>Lunch</div>
        </div>
        <div className={styles.groupDiv} onClick={onGroupContainer4Click}>
          <div className={styles.groupItem} onClick={onRectangle18Click} />
          <div className={styles.snacks}>Snacks</div>
        </div>
        <div
          className={styles.rectangleParent1}
          onClick={onGroupContainer5Click}
        >
          <div className={styles.groupItem} onClick={onRectangle19Click} />
          <div className={styles.drinks}>Drinks</div>
        </div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-1.svg" />
        <img className={styles.campuseatsIcon} alt="" src="/campuseats.svg" />
        <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
        <img
          className={styles.frameIcon}
          alt=""
          src="/frame2.svg"
          onClick={onFrameIconClick}
        />
        <img className={styles.image80Icon} alt="" src="/image-80@2x.png" />
        <button className={styles.image81} onClick={openCartPopup} />
      </div>
      {isCartPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCartPopup}
        >
          <Cart onClose={closeCartPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MenuNonUser;
