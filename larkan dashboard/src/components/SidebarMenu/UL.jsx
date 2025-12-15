import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UL = ({ handleTogglle }) => {
  const location = useLocation(); // Get current URL path
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  // Ref for the active element
  const activeItemRef = useRef(null);

  // Scroll to active item when route changes
  useEffect(() => {
    setTimeout(() => {
      if (activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 50); // delay to allow sidebar/menu to open
  }, [location.pathname]);

  // Sync active menu and submenu with the current URL
  useEffect(() => {
    const path = location.pathname;
    // Define menu mappings based on paths
    const menuMappings = {
      "/": "dashboard",

      // Blogs
      "/blogs": "blogs",
      // Products
      "/product-list": "products",
      "/product-grid": "products",
      "/brand": "products",
      "/unit": "products",
      "/product-edit": "products",
      "/product-add": "products",
      // Category
      "/category-list": "category",
      // "/category-edit": "category",
      "/category-add": "category",

      // General Settings
      "/supplier": "setting",
      "/courier": "setting",
      "/delivery-type": "setting",
      "/client": "setting",
      "/general-settings": "setting",

      // Inventory
      "/inventory-warehouse": "inventory",
      "/inventory-received-orders": "inventory",
      // Orders
      "/orders-list": "orders",
      "/order-detail": "orders",
      "/order-cart": "orders",
      "/order-checkout": "orders",
      // Purchases
      "/purchase-list": "purchases",
      "/purchase-order": "purchases",
      "/purchase-returns": "purchases",
      // Settings
      // "/settings": "settings",
      // Profile
      "/profile": "profile",
      // Seller
      "/seller-list": "sellers",
      "/seller-details": "sellers",
      "/seller-edit": "sellers",
      "/seller-add": "sellers",
      // Role
      "/role-list": "roles",
      "/role-edit": "roles",
      "/role-add": "roles",
      // Authentication
      "/sign-in": "authentication",
      "/sign-up": "authentication",
      "/password": "authentication",
      "/lock-screen": "authentication",
    };

    // Define submenu mappings based on paths
    const subMenuMappings = {
      "/": "",

      // Blogs
      "/blogs": "blogs",

      // Products
      "/product-list": "product-list",
      "/brand": "brand",
      "/unit": "unit",
      "/product-grid": "product-grid",
      "/product-edit": "product-edit",
      "/product-add": "product-add",

      // Category
      "/category-list": "category-list",
      // "/category-edit": "category-edit",
      "/category-add": "category-add",

      // General Settings
      "/supplier": "supplier",
      "/courier": "courier",
      "/delivery-type": "delivery-type",
      "/client": "client",
      "/general-settings": "general-settings",

      // Inventory
      "/inventory-warehouse": "inventory-warehouse",
      "/inventory-received-orders": "inventory-received-orders",
      // Orders
      "/orders-list": "orders-list",
      "/order-detail": "order-detail",
      "/order-checkout": "order-checkout",
      // Purchases
      "/purchase-list": "purchase-list",
      "/purchase-returns": "purchase-returns",

      // Settings
      // "/settings": "settings",
      // Profile
      "/profile": "profile",

      // Sellers
      "/seller-list": "seller-list",
      "/seller-details": "seller-details",
      "/seller-edit": "seller-edit",
      "/seller-add": "seller-add",
      // Role
      "/role-list": "role-list",
      "/role-edit": "role-edit",
      "/role-add": "role-add",

      // Authentication
      "/sign-in": "sign-in",
      "/sign-up": "sign-up",
      "/password": "password",
      "/lock-screen": "lock-screen",
    };

    // Update active menu and active submenu based on the URL path
    if (path.startsWith("/product-update")) {
      setActiveMenu("products");
      setActiveSubMenu("product-update");
    } else if (path.startsWith("/product-stock")) {
      setActiveMenu("products");
      setActiveSubMenu("product-stock");
    } else {
      setActiveMenu(menuMappings[path] || "");
      setActiveSubMenu(subMenuMappings[path] || "");
    }
  }, [location.pathname]);

  // Handle submenu toggle (open/close)
  const handleSubMenuToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };

  return (
    <>
      <ul className="navbar-nav" id="navbar-nav">
        <li className="menu-title">General</li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "dashboard" ? "active" : ""}`}
            to="/"
            ref={location.pathname === "/" ? activeItemRef : null}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Dashboard </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "blogs" ? "active" : ""}`}
            to="/blogs"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Blog</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "products" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("products")}
            to="#sidebarProducts"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarProducts"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:t-shirt-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Products </span>
          </Link>

          <div
            className={`collapse ${activeMenu === "products" ? "show" : ""}`}
            id="sidebarProducts"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "brand" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/brand"
                  ref={activeSubMenu === "brand" ? activeItemRef : null}
                >
                  Brand
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "unit" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/unit"
                  ref={activeSubMenu === "unit" ? activeItemRef : null}
                >
                  Unit
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/product-list"
                  ref={activeSubMenu === "product-list" ? activeItemRef : null}
                >
                  List
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-grid" ? "active" : ""
                  }`}
                  to="/product-grid"
                  onClick={handleTogglle}
                >
                  Grid
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-edit" ? "active" : ""
                  }`}
                  to="/product-edit"
                  onClick={handleTogglle}
                >
                  Edit
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-add" ? "active" : ""
                  }`}
                  to="/product-add"
                  onClick={handleTogglle}
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "category" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("category")}
            to="#sidebarCategory"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarCategory"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:clipboard-list-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Category </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "category" ? "show" : ""}`}
            id="sidebarCategory"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "category-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/category-list"
                >
                  List
                </Link>
              </li>
              {/* <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "category-edit" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/category-edit"
                >
                  Edit
                </Link>
              </li> */}
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "category-add" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/category-add"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "setting" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("setting")}
            to="#sidebarSetting"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarSetting"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Settings </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "setting" ? "show" : ""}`}
            id="sidebarSetting"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "supplier" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/supplier"
                >
                  Supplier
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "courier" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/courier"
                >
                  Courier
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "delivery-type" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/delivery-type"
                >
                  Delivery Type
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "client" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/client"
                >
                  Client
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "general-settings" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/general-settings"
                >
                  GeneralSettings
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "inventory" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("inventory")}
            to="#sidebarInventory"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarInventory"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:box-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Inventory </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "inventory" ? "show" : ""}`}
            id="sidebarInventory"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "inventory-warehouse" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/inventory-warehouse"
                >
                  Warehouse
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "inventory-received-orders"
                      ? "active"
                      : ""
                  }`}
                  onClick={handleTogglle}
                  to="/inventory-received-orders"
                >
                  Received Orders
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "orders" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("orders")}
            to="#sidebarOrders"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarOrders"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:bag-smile-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Orders </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "orders" ? "show" : ""}`}
            id="sidebarOrders"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "orders-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/orders-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "order-detail" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/order-detail"
                >
                  Details
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "order-cart" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/order-cart"
                >
                  Cart
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "order-checkout" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/order-checkout"
                >
                  Check Out
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "purchases" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("purchases")}
            to="#sidebarPurchases"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarPurchases"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:card-send-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Purchases </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "purchases" ? "show" : ""}`}
            id="sidebarPurchases"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "purchase-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/purchase-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "purchase-order" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/purchase-order"
                >
                  Order
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "purchase-returns" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/purchase-returns"
                >
                  Return
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "settings" ? "active" : ""}`}
            to="/settings"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Settings </span>
          </Link>
        </li>

        <li className="menu-title mt-2">Users</li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "profile" ? "active" : ""}`}
            to="/profile"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Profile </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "roles" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("roles")}
            to="#sidebarRoles"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarRoles"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:user-speak-rounded-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Roles </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "roles" ? "show" : ""}`}
            id="sidebarRoles"
          >
            <ul className="nav sub-navbar-nav">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link
                    className={`sub-nav-link  ${
                      activeSubMenu === "role-list" ? "active" : ""
                    }`}
                    onClick={handleTogglle}
                    to="/role-list"
                  >
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className={`sub-nav-link  ${
                      activeSubMenu === "role-edit" ? "active" : ""
                    }`}
                    onClick={handleTogglle}
                    to="/role-edit"
                  >
                    Edit
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className={`sub-nav-link  ${
                      activeSubMenu === "role-add" ? "active" : ""
                    }`}
                    onClick={handleTogglle}
                    to="/role-add"
                  >
                    Create
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "sellers" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("sellers")}
            to="#sidebarSellers"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarSellers"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:shop-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Sellers </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "sellers" ? "show" : ""}`}
            id="sidebarSellers"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "seller-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/seller-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "seller-details" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/seller-details"
                >
                  Details
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "seller-edit" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/seller-edit"
                >
                  Edit
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "seller-add" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/seller-add"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="menu-title mt-2">Other</li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "pages" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("pages")}
            to="#sidebarPages"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarPages"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:gift-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Pages </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "pages" ? "show" : ""}`}
            id="sidebarPages"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "pages-404" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/pages-404"
                >
                  404 Error
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "authentication" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("authentication")}
            to="#sidebarAuthentication"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarAuthentication"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:lock-keyhole-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Authentication </span>
          </Link>
          <div
            className={`collapse ${
              activeMenu === "authentication" ? "show" : ""
            }`}
            id="sidebarAuthentication"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "sign-in" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/sign-in"
                  ref={activeSubMenu === "sign-in" ? activeItemRef : null}
                >
                  Sign In
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "sign-up" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/sign-up"
                >
                  Sign Up
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "password" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/password"
                >
                  Reset Password
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "lock-screen" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/lock-screen"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

export default UL;
