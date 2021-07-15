import React from "react";
import "../Navbar/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMapMarkerAlt,
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "Home",
    };
  }
  render() {
    return (
      <div className="navbarContainer">
        <div className="brand">
          <h1 className="brandName">Farmiest!</h1>
        </div>

        <div className="pagesWrapper">
          {/* pages */}
          <a
            className={this.state.activeTab === "Home" ? "active" : ""}
            onClick={() => {
              this.setState({ activeTab: "Home" });
            }}
          >
            Home
          </a>
          <select className="storeSelect">
            <option value="store">Store</option>
            <option value="us">US</option>
            <option value="uk">UK</option>
          </select>
          <a
            className={this.state.activeTab === "Contact" ? "active" : ""}
            onClick={() => {
              this.setState({ activeTab: "Contact" });
            }}
          >
            Contact
          </a>
          <a
            className={this.state.activeTab === "About" ? "active" : ""}
            onClick={() => {
              this.setState({ activeTab: "About" });
            }}
          >
            About
          </a>
        </div>

        <div className="actionsWrapper">
          <button className="btn">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faUser} /> &nbsp; Account
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faShoppingBag} />
            &nbsp; Bag
          </button>

          <div className="langSelect">
            <span>
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <select>
              <option value="en">EN</option>
              <option value="tm">TM</option>
              <option value="te">TL</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
