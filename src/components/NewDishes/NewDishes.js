import React from "react";
import DishCardLarge from "../DishCardLarge/DishCardLarge";
import "./NewDishes.css";
import axios from "axios";

class NewDishes extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   newDishes: [
    //     {
    //       id: 1,
    //       type: "Breakfast",
    //       name: "Bread",
    //       price: "10",
    //     },
    //     {
    //       id: 2,
    //       type: "Breakfast",
    //       name: "Side Dish",
    //       price: "20",
    //     },
    //     {
    //       id: 3,
    //       type: "Breakfast",
    //       name: "Chips",
    //       price: "15",
    //     },
    //     {
    //       id: 4,
    //       type: "Breakfast",
    //       name: "Bolthouse",
    //       price: "25",
    //     },
    //     {
    //       id: 5,
    //       type: "Breakfast",
    //       name: "Bread",
    //       price: "10",
    //     },
    //     {
    //       id: 6,
    //       type: "Breakfast",
    //       name: "Side Dish",
    //       price: "20",
    //     },
    //     {
    //       id: 7,
    //       type: "Breakfast",
    //       name: "Chips",
    //       price: "15",
    //     },
    //     {
    //       id: 8,
    //       type: "Breakfast",
    //       name: "Bolthouse",
    //       price: "25",
    //     },
    //     {
    //       id: 9,
    //       type: "Fruits",
    //       name: "Bolthouse",
    //       price: "15",
    //     },
    //     {
    //       id: 10,
    //       type: "Fruits",
    //       name: "Apple",
    //       price: "10",
    //     },
    //     {
    //       id: 11,
    //       type: "Salads",
    //       name: "Sweet",
    //       price: "35",
    //     },
    //   ],
    //   currentDish: "Breakfast",
    // };

    this.state = {
      newDishes: [],
      currentDish: "Breakfast",
    };
  }

  componentDidMount() {
    axios
      .get("https://run.mocky.io/v3/4836002d-2ff9-4689-9f29-b951013f7e83")
      .then((response) => {
        this.setState({
          newDishes: response.data.newDishes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChangeDishHandler = (e) => {
    console.log(e);
    this.setState({
      currentDish: e.target.innerText,
    });
  };

  render() {
    return (
      <div className="newDishContainer">
        <h1 className="newDishHeader">
          New <span className="underlineTxt">Organic</span> Add-ons
        </h1>

        <div className="newDishTypeWrapper">
          <button
            className={
              this.state.currentDish === "Breakfast"
                ? "newDishSelectBtn"
                : "newDishUnSelectBtn"
            }
            onClick={this.onChangeDishHandler}
          >
            Breakfast
          </button>
          <button
            className={
              this.state.currentDish === "Fruits"
                ? "newDishSelectBtn"
                : "newDishUnSelectBtn"
            }
            onClick={this.onChangeDishHandler}
          >
            Fruits
          </button>
          <button
            className={
              this.state.currentDish === "Salads"
                ? "newDishSelectBtn"
                : "newDishUnSelectBtn"
            }
            onClick={this.onChangeDishHandler}
          >
            Salads
          </button>
        </div>

        <div className="newDishesWrapper">
          {this.state.newDishes.map(
            (dish) =>
              dish.type === this.state.currentDish && (
                <DishCardLarge key={dish.id} dish={dish} />
              )
          )}
        </div>
      </div>
    );
  }
}

export default NewDishes;
