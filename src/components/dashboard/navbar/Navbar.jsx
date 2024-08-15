import React, { useEffect, useState, useCallback } from "react";
import "./navbar.css";
import dummyNotification from "../../../utils/dashboardDummyData/empDashboardDummyNotification";
import userDemoImage from "../../../assets/user-demo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isEmpDashNotificationVisible, setIsEmpDashNotificationVisible] =
    useState(false);
  const [isEmpDashUserVisible, setIsEmpDashUserVisible] = useState(false);

  const handleEmpDashNotificationIconClick = (event) => {
    event.stopPropagation();
    setIsEmpDashNotificationVisible((prev) => !prev);
    setIsEmpDashUserVisible(false);
  };

  const handleEmpDashUserIconClick = (event) => {
    event.stopPropagation();
    setIsEmpDashUserVisible((prev) => !prev);
    setIsEmpDashNotificationVisible(false);
  };

  const handleOutsideClick = useCallback(() => {
    if (isEmpDashNotificationVisible) setIsEmpDashNotificationVisible(false);
    if (isEmpDashUserVisible) setIsEmpDashUserVisible(false);
  }, [isEmpDashNotificationVisible, isEmpDashUserVisible]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const resolveImage = (path) => {
    try {
      return require(`${path}`);
    } catch (err) {
      return require("../../../assets/user-demo.png"); // fallback image if the provided path fails
    }
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <>
      <header className="emp-dash-header">
        <span className="emp-dash-header-brand">
          dot<span className="emp-dash-header-brand-dot">.</span>insurance
        </span>
        <ul className="emp-dash-header-nav">
          <li className="emp-dash-nav-item">
            <i
              className="fa-solid fa-bell emp-dash-nav-link"
              onClick={handleEmpDashNotificationIconClick}
            ></i>
            <span
              className="dash-header-counter"
              style={{
                display: dummyNotification.length > 0 ? "inline" : "none",
              }}
            >
              {dummyNotification.length}
            </span>
            <div
              className={`dash-header-notification-panel ${
                isEmpDashNotificationVisible ? "show" : ""
              }`}
            >
              <div className="emp-dash-notification-panel-header">
                <div className="emp-dash-notification-panel-title">
                  Notification
                </div>
                <div className="emp-dash-notification-panel-read">
                  Mark all as read
                </div>
              </div>
              {dummyNotification.map((notif, index) => (
                <div key={index} className="emp-dash-notification-panel-body">
                  <div className="emp-dash-notification-body">
                    <div className="emp-dash-notification-img">
                      <img src={resolveImage(notif.picture)} alt="propic" />
                    </div>
                    <div className="emp-dash-notification-message-body">
                      <div className="emp-dash-notification-message">
                        <div className="notification-type">
                          {notif.notification_type}
                        </div>
                        <div className="notification-body">
                          {notif.notification_body}
                        </div>
                      </div>
                      <div className="emp-dash-notification-timestamp">
                        <div className="notification-time">
                          {notif.timestamp.split(",")[0]}
                        </div>
                        <div className="notification-date">
                          {notif.timestamp.split(",")[1]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="emp-dash-all-notification">
                <Link className="emp-dash-all-notification-btn">
                  All Notification
                </Link>
              </div>
            </div>
          </li>
          <li className="emp-dash-nav-item">
            <i
              className="fa-solid fa-user emp-dash-nav-link"
              onClick={handleEmpDashUserIconClick}
            ></i>
            <div
              className={`dropdown-content dash-header-user ${
                isEmpDashUserVisible ? "show" : ""
              }`}
            >
              <div className="user-info-submenu">
                <img src={userDemoImage} alt="propic" />
                <div className="user-info-submenu-info">
                  <div className="user-info-submenu-name">
                    <span className="header-user-submenu-title">Mr.</span>
                    <span className="header-user-submenu-name">Rahi</span>
                  </div>
                  <div className="user-info-submenu-designation">
                    <span className="header-user-designation">Owner</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="emp-header-user-info">
                <div className="header-user-uls">
                  <div className="header-user-list">
                    <i className="fa-solid fa-user-pen header-user-icon"></i>
                    <Link to="#" className="dropdown-content-links-list">
                      Edit Profile
                    </Link>
                  </div>
                  <div className="header-user-list">
                    <i className="fa-solid fa-lock header-user-icon"></i>
                    <Link to="#" className="dropdown-content-links-list">
                      Privacy and security
                    </Link>
                  </div>
                  <div className="header-user-list">
                    <i className="fa-solid fa-headset header-user-icon"></i>
                    <Link to="#" className="dropdown-content-links-list">
                      Help and support
                    </Link>
                  </div>
                  <div className="header-user-list">
                    <i className="fa-solid fa-right-from-bracket header-user-icon"></i>
                    <Link
                      to="/"
                      className="dropdown-content-links-list"
                      onClick={handleLogOut}
                    >
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
