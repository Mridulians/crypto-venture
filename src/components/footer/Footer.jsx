// import React from 'react'
import { data1, data2, data3, data4, data5, data6 } from "./Footer.js";
import "./Footer.css";
import New from "./New.jsx";
const Footer = () => {
  return (
    <>
      <div className="complete_footer">

        <div className="footer">
          <div>
            <h2 className="section_heading">NEWS</h2>
            <div className="footer_lists">
              {data1.map((item, index) => {
                return (
                  <div key={index}>
                    <h1>{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="section_heading">FEATURES</h2>
            <div className="footer_lists">
              {data2.map((item, index) => {
                return (
                  <div key={index}>
                    <h1>{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="section_heading">MARKET TOOLS</h2>
            <div className="footer_lists">
              {data3.map((item, index) => {
                return (
                  <div key={index}>
                    <h1>{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="section_heading">LEARN</h2>
            <div className="footer_lists">
              {data4.map((item, index) => {
                return (
                  <div key={index}>
                    <h1>{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="section_heading">ABOUT US</h2>
            <div className="footer_lists">
              {data5.map((item, index) => {
                return (
                  <div key={index}>
                    <h1>{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="section_heading">INDUSTRY</h2>
            <div className="footer_lists">
              {data6.map((item, index) => {
                return (
                  <div key={index}>
                    <h1>{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="below_footer">
          <p>Are you a journalist or an editor?</p>
          <button>Join us</button>
        </div>

      </div>

      <New />
    </>
  );
};

export default Footer;
