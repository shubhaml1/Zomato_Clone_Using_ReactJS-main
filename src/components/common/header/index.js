import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon" />
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center" />
          </div>
            <div className="location-search-separator"></div>
            <div className="header-search-bar">
              <i className="fi fi-rr-search absolute-center search-icon"></i>
              <input
                placeholder="Search for restaurant, cuisine or a dish"
                className="search-input"
              />
            </div>
          </div>     
        <div className="profile-wrapper">
            <imp
              src="https://b.zmtcdn.com/data/user_profile_pictures/8a8/5f073be8f953b64ba7875bb40fce78a8.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
              className="header-profile-picture"
            ></imp>
            <span className="header-user-name">Shubham</span>
            <i className="fi fi-rr-angle-small-down absoulte-center profile-options-icon"></i>
          </div>
      </div>
    </div>
  );
};

export default Header;
