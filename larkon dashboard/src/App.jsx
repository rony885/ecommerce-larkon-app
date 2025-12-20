// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./App.css";
// import Header from "./components/Header/Header";
// import ActivityTimeline from "./components/ActivityTimeline/ActivityTimeline";
// import SidebarTheme from "./components/SidebarTheme/SidebarTheme";
// import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
// import Loader from "./components/Loader";
// import NotFound from "./components/NotFound";

// import Dashboard from "./pages/Home/Dashboard";
// import ProductsList from "./pages/Products/ProductsList";
// import AddProduct from "./pages/Products/AddProduct";
// import ProductGrid from "./pages/Products/ProductGrid";
// import ProductEdit from "./pages/Products/ProductEdit";

// import CategoryList from "./pages/Category/CategoryList";
// import CategoryEdit from "./pages/Category/CategoryEdit";
// import AddCategory from "./pages/Category/AddCategory";

// import Warehouse from "./pages/Inventory/Warehouse";
// import ReceivedOrder from "./pages/Inventory/ReceivedOrder";

// import OrderList from "./pages/Order/OrderList";
// import OrderDetails from "./pages/Order/OrderDetails";
// import OrderCart from "./pages/Order/OrderCart";
// import CheckOut from "./pages/Order/CheckOut";

// import PurchasesList from "./pages/Purchases/PurchasesList";
// import PurchasesOrder from "./pages/Purchases/PurchasesOrder";
// import PurchaseReturns from "./pages/Purchases/PurchaseReturns";

// import Settings from "./pages/Settings/Settings";
// import Profile from "./pages/Profile/Profile";

// import SellersList from "./pages/Sellers/SellersList";
// import SellerDetails from "./pages/Sellers/SellerDetails";
// import SellerEdit from "./pages/Sellers/SellerEdit";
// import AddSeller from "./pages/Sellers/AddSeller";

// import RoleList from "./pages/Roles/RoleList";
// import RoleEdit from "./pages/Roles/RoleEdit";
// import RoleAdd from "./pages/Roles/RoleAdd";

// import ErrorWithBody from "./pages/Pages/ErrorWithBody";

// import SignIn from "./pages/Authentication/SignIn";
// import SignUp from "./pages/Authentication/SignUp";
// import ResetPassword from "./pages/Authentication/ResetPassword";
// import LockScreen from "./pages/Authentication/LockScreen";

// import Blog from "./pages/Blog/Blog";
// import BlogEdit from "./pages/Blog/BlogEdit";
// import BlogAdd from "./pages/Blog/BlogAdd";

// import Brand from "./pages/Products/Brand";
// import Unit from "./pages/Products/Unit";
// import Supplier from "./pages/Settings/Supplier";
// import Courier from "./pages/Settings/Courier";
// import DeliveryType from "./pages/Settings/DeliveryType";
// import Client from "./pages/Settings/Client";
// import { useApiContext } from "./context/ApiContext";
// // import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSidebarEnabled, setIsSidebarEnabled] = useState(false);
//   const { c_user } = useApiContext();
//   const aT = localStorage.getItem("atoozSuperuserandstaffAccessToken");
//   const rT = localStorage.getItem("atoozSuperuserandstaffRefreshToken");

//   const ProtectedRoute = ({ children }) => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (!accessToken) return <Navigate to="/" />;
//     return children;
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const htmlElement = document.documentElement;
//       const currentSize = htmlElement.getAttribute("data-menu-size");

//       if (window.innerWidth <= 1140) {
//         if (currentSize !== "hidden") {
//           htmlElement.setAttribute("data-menu-size", "hidden");
//         }
//       } else {
//         htmlElement.setAttribute("data-menu-size", "sm-hover-active");
//       }
//     };

//     // Run once when mounted
//     handleResize();

//     // Listen for resize events
//     window.addEventListener("resize", handleResize);

//     // Clean up
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const htmlElement = document.documentElement;
//   const bodyElement = document.body;

//   // Handle toggle logic
//   const handleToggle = () => {
//     const dataMenuSize = htmlElement.getAttribute("data-menu-size");

//     // Only execute the toggle logic if datamenusize is "hidden"
//     if (dataMenuSize === "hidden") {
//       if (isSidebarEnabled) {
//         htmlElement.classList.remove("sidebar-enable");
//         bodyElement.style.overflow = ""; // Reset overflow
//       } else {
//         htmlElement.classList.add("sidebar-enable");
//         bodyElement.style.overflow = "hidden"; // Hide overflow
//       }

//       setIsSidebarEnabled(!isSidebarEnabled); // Toggle sidebar state
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const logoutUser = async () => {
//     try {
//       const refreshToken = localStorage.getItem("refreshToken");
//       await fetch(`${process.env.REACT_APP_BASE_URL}/custom_user/logout/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ refresh_token: refreshToken }),
//       });

//       // Clear tokens
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");
//       console.log("Logged out successfully");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!aT) {
//     return (
//       <BrowserRouter basename="/">
//         <Routes>
//           <Route path="/" element={<SignIn />} />
//           <Route path="/" element={<SignIn />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }

//   return (
//     <>
//       <BrowserRouter>
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <div className="wrapper">
//             <Header handleTogglle={handleToggle} logoutUser={logoutUser} />
//             <ActivityTimeline />
//             <SidebarTheme />
//             <SidebarMenu handleTogglle={handleToggle} />

//             <Routes>
//               <Route
//                 path="/"
//                 // element={<Dashboard />}
//                 element={
//                   <ProtectedRoute>
//                     <Dashboard />
//                   </ProtectedRoute>
//                 }
//               ></Route>
//               <Route path="/blogs" element={<Blog />}></Route>
//               <Route path="/add-blog" element={<BlogAdd />}></Route>
//               <Route path="/blog-edit/:id" element={<BlogEdit />}></Route>

//               <Route path="/product-list" element={<ProductsList />}></Route>
//               <Route path="/brand" element={<Brand />}></Route>
//               <Route path="/unit" element={<Unit />}></Route>
//               <Route path="/product-edit/:id" element={<ProductEdit />}></Route>
//               <Route path="/product-add" element={<AddProduct />}></Route>
//               <Route path="/product-grid" element={<ProductGrid />}></Route>

//               <Route path="/category-list" element={<CategoryList />}></Route>
//               <Route
//                 path="/category-edit/:id"
//                 element={<CategoryEdit />}
//               ></Route>
//               <Route path="/category-add" element={<AddCategory />}></Route>

//               <Route path="/supplier" element={<Supplier />}></Route>
//               <Route path="/courier" element={<Courier />}></Route>
//               <Route path="/delivery-type" element={<DeliveryType />}></Route>
//               <Route path="/client" element={<Client />}></Route>
//               <Route path="/general-settings" element={<Settings />}></Route>

//               <Route
//                 path="/inventory-warehouse"
//                 element={<Warehouse />}
//               ></Route>
//               <Route
//                 path="/inventory-received-orders"
//                 element={<ReceivedOrder />}
//               ></Route>

//               <Route path="/orders-list" element={<OrderList />}></Route>
//               <Route path="/order-detail" element={<OrderDetails />}></Route>
//               <Route path="/order-cart" element={<OrderCart />}></Route>
//               <Route path="/order-checkout" element={<CheckOut />}></Route>

//               <Route path="/purchase-list" element={<PurchasesList />}></Route>
//               <Route
//                 path="/purchase-order"
//                 element={<PurchasesOrder />}
//               ></Route>
//               <Route
//                 path="/purchase-returns"
//                 element={<PurchaseReturns />}
//               ></Route>

//               <Route path="/settings" element={<Settings />}></Route>
//               <Route path="/profile" element={<Profile />}></Route>

//               <Route path="/seller-list" element={<SellersList />}></Route>
//               <Route path="/seller-details" element={<SellerDetails />}></Route>
//               <Route path="/seller-edit" element={<SellerEdit />}></Route>
//               <Route path="/seller-add" element={<AddSeller />}></Route>

//               <Route path="/role-list" element={<RoleList />}></Route>
//               <Route path="/role-edit" element={<RoleEdit />}></Route>
//               <Route path="/role-add" element={<RoleAdd />}></Route>

//               <Route path="/pages-404" element={<ErrorWithBody />}></Route>

//               {/* <Route path="/sign-in" element={<SignIn />}></Route>
//               <Route path="/sign-up" element={<SignUp />}></Route>
//               <Route path="/password" element={<ResetPassword />}></Route>
//               <Route path="/lock-screen" element={<LockScreen />}></Route> */}

//               <Route path="*" element={<NotFound />}></Route>
//             </Routes>
//           </div>
//         )}
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

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
import OrderDetails from "./pages/Order/OrderDetails";
import CheckOut from "./pages/Order/CheckOut";

import PurchasesList from "./pages/Purchases/PurchasesList";
import PurchasesOrder from "./pages/Purchases/PurchasesOrder";
import PurchaseReturns from "./pages/Purchases/PurchaseReturns";

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
import AddPurchase from "./pages/Purchases/AddPurchase";

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
        }
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

            <Route path="/orders-list" element={<OrderList />}></Route>
            <Route path="/order-detail" element={<OrderDetails />}></Route>
            <Route path="/order-checkout" element={<CheckOut />}></Route>

            <Route path="/purchase-list" element={<PurchasesList />}></Route>
            <Route path="/purchase-add" element={<AddPurchase />}></Route>
            <Route path="/purchase-order" element={<PurchasesOrder />}></Route>
            <Route
              path="/purchase-returns"
              element={<PurchaseReturns />}
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
