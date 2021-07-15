import Navbar from "../Navbar/Navbar";
import "../Header/Header.css";
import React from "react";
import Hero from "../../images/Hero@3x.png";
import Item1 from "../../images/Item1.png";
import Item2 from "../../images/Item2.png";
import Item3 from "../../images/Item3.png";
import Item4 from "../../images/Item4.png";

class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="container">
          <Navbar />
          <div className="mainPageWrapper">
            <div className="rotateTxtWrapper">
              <p className="rotateTxt">organic</p>
            </div>
            <div className="mainTitle">
              <p className="taglineTxt">
                Live on <br />
                <span>fruits &amp; vegetables </span>
                <br />
                to live Healthy
              </p>

              <p className="taglineTxtInfo">
                <b>100% Healthy &amp; fresh</b>
              </p>

              <button className="shopBtn">Shop Now</button>
            </div>
            <div className="mainImg">
              <img src={Hero} alt="hero"/>
            </div>
          </div>
        </div>
        <div className="brandHighlights">
          <div className="highlightWrapper">
            <img src={Item1} alt="Grocery"/>
            <div className="highlightInfoWrapper">
              <h2>Grocery</h2>
              <p>Fresh grocery delivered</p>
            </div>
          </div>

          <div className="highlightWrapper">
            <img src={Item2} alt="Salads"/>
            <div className="highlightInfoWrapper">
              <h2>Salads</h2>
              <p>Order nutricious salads</p>
            </div>
          </div>

          <div className="highlightWrapper">
            <img src={Item3} alt="Cart"/>
            <div className="highlightInfoWrapper">
              <h2>Cart Value</h2>
              <p>Cart value review your cart</p>
            </div>
          </div>

          <div className="highlightWrapper">
            <img src={Item4} alt="Grocery"/>
            <div className="highlightInfoWrapper">
              <h2>Grocery</h2>
              <p>Fresh grocery delivered</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
