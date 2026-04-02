import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import ActivityTimeline from "./components/ActivityTimeline/ActivityTimeline";
import SidebarTheme from "./components/SidebarTheme/SidebarTheme";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";

import Dashboard from "./pages/Home/Dashboard";
import ProductsList from "./pages/Products/ProductsList";
import AddProduct from "./pages/Products/AddProduct";
import ProductEdit from "./pages/Products/ProductEdit";

import CategoryList from "./pages/Category/CategoryList";
import CategoryEdit from "./pages/Category/CategoryEdit";
import AddCategory from "./pages/Category/AddCategory";

import OrderList from "./pages/Order/OrderList";
import AddOrder from "./pages/Order/AddOrder";
import OrderDetails from "./pages/Order/OrderDetails";
import CheckOut from "./pages/Order/CheckOut";

import PurchasesList from "./pages/Purchases/PurchasesList";
import AddPurchase from "./pages/Purchases/AddPurchase";
import PurchaseOverview from "./pages/Purchases/PurchaseOverview";

import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ResetPassword from "./pages/Authentication/ResetPassword";
import LockScreen from "./pages/Authentication/LockScreen";

import Blog from "./pages/Blog/Blog";
import BlogEdit from "./pages/Blog/BlogEdit";
import BlogAdd from "./pages/Blog/BlogAdd";

import Brand from "./pages/Products/Brand";
import Unit from "./pages/Products/Unit";
import Supplier from "./pages/Settings/Supplier";
import Courier from "./pages/Settings/Courier";
import DeliveryType from "./pages/Settings/DeliveryType";
import Client from "./pages/Settings/Client";
import { useApiContext } from "./context/ApiContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarEnabled, setIsSidebarEnabled] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);

  // ✅ Load user & token from localStorage
  // const accessToken = localStorage.getItem(
  //   "ecommerceSuperuserandstaffAccessToken"
  // );

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) setCurrentUser(JSON.parse(user));

  //   // Fake loader
  //   const timer = setTimeout(() => setIsLoading(false), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  const htmlElement = document.documentElement;
  const bodyElement = document.body;

  const handleToggle = () => {
    const size = htmlElement.getAttribute("data-menu-size");

    if (size === "hidden") {
      if (isSidebarEnabled) {
        htmlElement.classList.remove("sidebar-enable");
        bodyElement.style.overflow = "";
      } else {
        htmlElement.classList.add("sidebar-enable");
        bodyElement.style.overflow = "hidden";
      }
      setIsSidebarEnabled(!isSidebarEnabled);
    }
  };

  // Logout user
  // const logoutUser = async () => {
  //   try {
  //     const refresh = localStorage.getItem(
  //       "ecommerceSuperuserandstaffRefreshToken"
  //     );

  //     await fetch(`${process.env.REACT_APP_BASE_URL}/custom_user/logout/`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ refresh_token: refresh }),
  //     });

  //     localStorage.removeItem("ecommerceSuperuserandstaffAccessToken");
  //     localStorage.removeItem("ecommerceSuperuserandstaffRefreshToken");
  //     localStorage.removeItem("user");

  //     setCurrentUser(null); // clear current user
  //     window.location.href = "/sign-in";
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const { c_user } = useApiContext();
  const aT = localStorage.getItem("ecommerceSuperuserandstaffAccessToken");
  const rT = localStorage.getItem("ecommerceSuperuserandstaffRefreshToken");

  const logoutUser = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/custom_user/logout/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${aT}`,
          },
          body: JSON.stringify({
            refresh_token: rT,
          }),
        },
      );
      const data = await response.json();
      console.log("Logout response:", data);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!aT) {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // If logged in → show full app
  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          <Header
            handleTogglle={handleToggle}
            logoutUser={logoutUser}
            // currentUser={currentUser} // Pass current user to header
            c_user={c_user}
          />
          <ActivityTimeline />
          <SidebarTheme />
          <SidebarMenu handleTogglle={handleToggle} />

          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/blogs" element={<Blog />}></Route>
            <Route path="/add-blog" element={<BlogAdd />}></Route>
            <Route path="/blog-edit/:id" element={<BlogEdit />}></Route>

            <Route path="/product-list" element={<ProductsList />}></Route>
            <Route path="/brand" element={<Brand />}></Route>
            <Route path="/unit" element={<Unit />}></Route>
            <Route path="/product-edit/:id" element={<ProductEdit />}></Route>
            <Route path="/product-add" element={<AddProduct />}></Route>

            <Route path="/category-list" element={<CategoryList />}></Route>
            <Route path="/category-edit/:id" element={<CategoryEdit />}></Route>
            <Route path="/category-add" element={<AddCategory />}></Route>

            <Route path="/supplier" element={<Supplier />}></Route>
            <Route path="/courier" element={<Courier />}></Route>
            <Route path="/delivery-type" element={<DeliveryType />}></Route>
            <Route path="/client" element={<Client />}></Route>
            <Route path="/general-settings" element={<Settings />}></Route>

            <Route path="/order-list" element={<OrderList />}></Route>
            <Route path="/add-order" element={<AddOrder />}></Route>
            <Route path="/order-detail" element={<OrderDetails />}></Route>
            <Route path="/order-checkout" element={<CheckOut />}></Route>

            <Route path="/purchase-list" element={<PurchasesList />}></Route>
            <Route path="/purchase-add" element={<AddPurchase />}></Route>
            <Route
              path="/purchase-overview/:id"
              element={<PurchaseOverview />}
            ></Route>

            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/profile" element={<Profile />}></Route>

            <Route path="/password" element={<ResetPassword />}></Route>
            <Route path="/lock-screen" element={<LockScreen />}></Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
