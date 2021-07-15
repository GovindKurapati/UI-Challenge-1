import React from "react";
import Food1 from "../../images/Food1.png"
import Food2 from "../../images/Food2.png"
import Food3 from "../../images/Food3.png"
import "./SpecialDish.css"



class SpecialDish extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dishes : [
                {
                    header:"Organically Produce",
                    name:"Vegetables",
                    imgSrc:Food1
                },
                {
                    header:"Flat 30% off",
                    name:"Fresh Foods",
                    imgSrc:Food2
                },
                {
                    header:"Gluten Free",
                    name:"Super Salads",
                    imgSrc:Food3
                },
            ]
        }
    }

    render(){
        return(
            <div className="specialDishContainer">
                {this.state.dishes.map((dish)=>
                    <div key={dish.name} className="dishWrapper" style={{background:`url(${dish.imgSrc})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                        <p className="cursiveTxt">{dish.header}</p>
                        <p className="dishTitle">{dish.name}</p>
                        <button className="dishShopBtn">Shop Now</button>
                    </div>
                )}
            </div>
            
        )
    }
}

export default SpecialDish;