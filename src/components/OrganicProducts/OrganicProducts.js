import React, { Component } from 'react';
import OrganicProduct from "../../images/Banner.png";
import FoodList from "../../images/FoodList1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign , faStar as starFill} from "@fortawesome/free-solid-svg-icons";
import { faStar as starNoFill} from "@fortawesome/free-regular-svg-icons"


import "./OrganicProducts.css";

export default class OrganicProducts extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             organicDishes : [
                 {
                     name:"Bread",
                     price:10
                 },
                 {
                    name:"Juice",
                    price:20
                },
                {
                    name:"Bun",
                    price:30
                },
                {
                    name:"Jam",
                    price:20
                },
                {
                    name:"Salad",
                    price:10
                },
                {
                    name:"Cake",
                    price:20
                }
             ]
        }
    }
    
    render() {
        return (
            <div className="organicProductsContainer">
                <h2 className="organicProductHeader">Fresh <span className="underlineTxt">Organic</span> Products</h2>

                <div className="organicProductBanner">
                
                    <div className="productBannerWrapper" style={{background: `url(${OrganicProduct})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                        <p>Fresh Juice</p>
                        <p>100% Organic</p>
                        <button>Shop Now</button>
                    </div>

                

                    <div className="organicProductsWrapper">
                        {this.state.organicDishes.map((dish)=>
                            <div key={dish.name} className="organicProductCard">
                            <img className="organicProductImg" src={FoodList} alt="organic products"/>
                            <div className="organicProductInfo">
                                <p className="OrganicProductName">{dish.name}</p>
                                <FontAwesomeIcon size="xs" color="#ffba43" icon={starFill} />
                                <FontAwesomeIcon size="xs" color="#ffba43" icon={starFill} />
                                <FontAwesomeIcon size="xs" color="#ffba43" icon={starNoFill} />
                                <FontAwesomeIcon size="xs" color="#ffba43" icon={starNoFill} />
                                <FontAwesomeIcon size="xs" color="#ffba43" icon={starNoFill} />
                                <p className="organicProductPrice"><FontAwesomeIcon icon={faRupeeSign} />&nbsp;{dish.price}</p>
                            </div>
                        </div>
                            
                        )}
                        
                    </div>
                </div>
            </div>
        )
    }
}
