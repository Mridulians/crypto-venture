// import React from 'react'
import Logo from "../../assets/logo_tele.svg";
import Data from "./Rates";
import "./Header.css";
import Language from "./language";
import { useState } from "react";
import { data1, data2, data3, data4, data5, data6 } from "../footer/Footer";
import Cross from "../../assets/cross.png";
import Cancel from "../../assets/cancel.png";
import Dropdowns from "./Dropdowns";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [search, setSearch] = useState(false);

  const onSearch = () => {
    setSearch(!search);
  };

  const closeSearch = () => {
    setSearch(false);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <div className="header">
        <img src={Logo} alt="Logo" />

        <div className="coin_rates flex justify-between gap-[1.5rem]">
          {Data.map((item) => {
            const isPositive = parseFloat(item.hike) > 0;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center"
              >
                <p className="" style={{color:"#fabc2c"}}>{item.name}</p>
                <p className="text-white">{item.price}</p>
                <p style={{ color: isPositive ? "green" : "red" }}>
                  {item.hike}
                </p>
              </div>
            );
          })}
        </div>

        <div className="select_wrapper">
          <Language />
          <h2 className="advertise">Advertise</h2>
        </div>
      </div>

      <Dropdowns />

      <nav className="mobile_nav">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-fg-primaryDefault md:text-fg-default md:group-hover:text-common-white"
          onClick={toggleSidebar}
        >
          <path
            d="M21 18.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v1zm0-6a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v1zm0-6a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v1z"
            fill="#FABC2C"
          ></path>
        </svg>

        <img src={Logo} alt="" className="mobile_logo" />

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-testid="header-button-magnifier"
          className="text-fg-primaryDefault md:text-fg-default md:group-hover:text-common-white"
          onClick={onSearch}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-.642 6.273a.525.525 0 00-.664-.054 7.5 7.5 0 112.025-2.025.525.525 0 00.054.665l4.288 4.287a.5.5 0 010 .708l-.707.707a.5.5 0 01-.708 0l-4.288-4.288z"
            fill="#FABC2C"
          ></path>
        </svg>
      </nav>

      {sidebarVisible && (
        <div className={`sidebar_content ${sidebarVisible ? "show" : ""}`}>
          <img
            src={Cross}
            alt=""
            onClick={toggleSidebar}
            className=" ml-[auto] my-[2rem] py-[0rem] px-[1rem]"
          />

          <div className="sidebar_content_lists">
            <div>
              <h2 className="section_heading text-yellow-600">NEWS</h2>
              <div className="sidebar_lists">
                {data1.map((item, index) => {
                  return (
                    <div
                      className="underline decoration-solid mb-[5px]"
                      key={index}
                    >
                      <h1>{item.name}</h1>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="section_heading text-yellow-600">FEATURES</h2>
              <div className="footer_lists">
                {data2.map((item, index) => {
                  return (
                    <div
                      className="underline decoration-solid mb-[5px]"
                      key={index}
                    >
                      <h1>{item.name}</h1>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="section_heading text-yellow-600">MARKET TOOLS</h2>
              <div className="footer_lists">
                {data3.map((item, index) => {
                  return (
                    <div
                      className="underline decoration-solid mb-[5px]"
                      key={index}
                    >
                      <h1>{item.name}</h1>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="section_heading text-yellow-600">LEARN</h2>
              <div className="footer_lists">
                {data4.map((item, index) => {
                  return (
                    <div
                      className="underline decoration-solid mb-[5px]"
                      key={index}
                    >
                      <h1>{item.name}</h1>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="section_heading text-yellow-600">ABOUT US</h2>
              <div className="footer_lists">
                {data5.map((item, index) => {
                  return (
                    <div
                      className="underline decoration-solid mb-[5px]"
                      key={index}
                    >
                      <h1>{item.name}</h1>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="section_heading text-yellow-600">INDUSTRY</h2>
              <div className="footer_lists">
                {data6.map((item, index) => {
                  return (
                    <div
                      className="underline decoration-solid mb-[5px]"
                      key={index}
                    >
                      <h1>{item.name}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {search && (
        <div className="flex px-[1rem] py-[0rem] border border-solid border-slate-600 h-[40px] items-center">
          🔍
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] outline-none"
          />
          <img src={Cancel} alt="" onClick={closeSearch} />
        </div>
      )}
    </>
  );
};

export default Header;
