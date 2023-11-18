import { useEffect } from "react";
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './auth/AuthContext';
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MenuNonUser from "./pages/MenuNonUser";
import Snacks2 from "./pages/Snacks2";
import Breakfast2 from "./pages/Breakfast2";
import Lunch2 from "./pages/Lunch2";
import Drinks from "./pages/Drinks";
import Lunch from "./pages/Lunch";
import Snacks from "./pages/Snacks";
import Drinks2 from "./pages/Drinks2";
import Breakfast from "./pages/Breakfast";
import Menu from "./pages/Menu";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;


  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/menu-nonuser":
        title = "";
        metaDescription = "";
        break;
      case "/snacks2":
        title = "";
        metaDescription = "";
        break;
      case "/breakfast2":
        title = "";
        metaDescription = "";
        break;
      case "/lunch2":
        title = "";
        metaDescription = "";
        break;
      case "/drinks2":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/drinks":
        title = "";
        metaDescription = "";
        break;
      case "/snacks":
        title = "";
        metaDescription = "";
        break;
      case "/breakfast":
        title = "";
        metaDescription = "";
        break;
      case "/lunch":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/menu-nonuser" element={<MenuNonUser />} />
      <Route path="/breakfast" element={<Breakfast />} />
      <Route path="/lunch" element={<Lunch />} />
      <Route path="/snacks" element={<Snacks />} />
      <Route path="/drinks" element={<Drinks />} />
      <Route path="/snacks2" element={<Snacks2 />} />
      <Route element={<ProtectedRoute />}>
      <Route path="/menu" element={<Menu />} />
      </Route>

      <Route path="/breakfast2" element={<Breakfast2 />} />
      <Route path="/lunch2" element={<Lunch2 />} />
      <Route path="/drinks2" element={<Drinks2 />} />
    </Routes>
  );
}
export default App;
