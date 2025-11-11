import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { IoIosSearch } from "react-icons/io";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "TRANG CHỦ", path: "/" },
    { label: "GIỚI THIỆU", path: "/introduce" },
    { label: "BẾN XE", path: "/bus-station" },
    { label: "TUYẾN ĐƯỜNG", path: "/routes" },
    { label: "KIỂM TRA VÉ", path: "/check-ticket" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="navigation-bar">
        <div className="nav-container">

          <div className="logo-section">
            <span className="logo-icon">
              <img src="/logo.png" alt="logo" />
            </span>
          </div>

          <nav className="nav-menu">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button className="search-icon-btn">
              <IoIosSearch />
            </button>
          </nav>

          <button className="hamburger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <div className="logo-section">
            <span className="logo-icon">🚌</span>
            <div className="logo-text">
              <span className="logo-vivu">VIVU</span>
              <span className="logo-today">TODAY</span>
            </div>
          </div>

          <button className="close-menu" onClick={toggleMenu}>✕</button>
        </div>

        <nav className="side-menu-nav">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `side-nav-item ${isActive ? "active" : ""}`
              }
              onClick={toggleMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}></div>
      )}
    </>
  );
};

export default NavigationBar;
