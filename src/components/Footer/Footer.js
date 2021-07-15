import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./Footer.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footerContainer">
          <div className="brandDetailsWrapper">
            <h2 className="brandNameTitle">Farmiest!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Max immme
              mollitia, molestiae quas vel sint domodi dapibus ipsum.
            </p>
            <div className="brandSocialLinksWrapper">
              <button>
                <FontAwesomeIcon size="2x" color="white" icon={faFacebook} />
              </button>
              <button>
                <FontAwesomeIcon size="2x" color="white" icon={faTwitter} />
              </button>
              <button>
                <FontAwesomeIcon size="2x" color="white" icon={faInstagram} />
              </button>
              <button>
                <FontAwesomeIcon size="2x" color="white" icon={faLinkedin} />
              </button>
            </div>
          </div>

          <div className="pagesLinkWrapper">
            <h2 className="pagesLinkHeader">Link</h2>
            <p>&gt; My account</p>
            <p>&gt; Checkout</p>
            <p>&gt; Wishlist</p>
            <p>&gt; Shopping Cart</p>
          </div>

          <div className="brandInformationWrapper">
            <h2 className="informationHeader">Information</h2>
            <p>&gt; About Us</p>
            <p>&gt; Our Team</p>
            <p>&gt; Contact Team</p>
            <p>&gt; Blog</p>
          </div>

          <div className="contactDetailsWrapper">
            <h2 className="contactDetailsHeader">Contact</h2>
            <div className="addressInfo">
              <FontAwesomeIcon
                color="#ffba43"
                size="2x"
                icon={faMapMarkerAlt}
              />
              <p className="brandAddress">
                1234,North Avenue,
                <br />
                South West Street,
                <br />
                IN 360001
              </p>
            </div>
            <p>
              <FontAwesomeIcon color="#ffba43" size="2x" icon={faEnvelope} />{" "}
              &nbsp; johndoe@farmiest.com
            </p>
            <p>
              <FontAwesomeIcon color="#ffba43" size="2x" icon={faPhone} />{" "}
              &nbsp; +0123456789
            </p>
          </div>
        </div>
        <p className="copyrightsTxt">
          Copyrights 2021 Farmiest All Rights Reserved.
        </p>
      </>
    );
  }
}

export default Footer;
