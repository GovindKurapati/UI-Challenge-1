import React, { Component } from "react";

import Food4 from "../../images/Food4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faRupeeSign,
  faStar as starFill,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faEye,
  faStar as starNoFill,
} from "@fortawesome/free-regular-svg-icons";
import "./DishCardLarge.css";

class DishCardLarge extends Component {

  render() {
    return (
      <div className="cardLargeContainer">
        <div className="cardImgWrapper">
          <img src={Food4} alt="dish" />
        </div>
        <div className="cardLargeInfoWrapper">
          <p className="cardLargeDishType">{this.props.dish.type}</p>
          <p className="cardLargeDishName">{this.props.dish.name}</p>
          <div className="cardLargeRatingWrapper">
            <p className="cardLargeDishPrice">
              <FontAwesomeIcon icon={faRupeeSign} />
              &nbsp;{this.props.dish.price}
            </p>
            {/* star rating */}
            <div className="cardLargeStarRating">
              <FontAwesomeIcon size="xs" color="#ffba43" icon={starFill} />
              <FontAwesomeIcon size="xs" color="#ffba43" icon={starFill} />
              <FontAwesomeIcon size="xs" color="#ffba43" icon={starNoFill} />
              <FontAwesomeIcon size="xs" color="#ffba43" icon={starNoFill} />
              <FontAwesomeIcon size="xs" color="#ffba43" icon={starNoFill} />
            </div>
          </div>
          <div className="cardLargeActionWrapper">
            <div>
              <button className="cardLargeAddBtn">
                Add to Cart <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="cardLargeRightAction">
              <button className="cardLargeLikeBtn">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="cardLargeViewBtn">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DishCardLarge;
