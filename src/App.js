import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Food from "./components/Food";
import Drinks from "./components/Drinks";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";

import cover from './img/cover.jpeg'
import food1 from './img/food1.jpeg'
import food2 from './img/food2.jpeg'
import food3 from './img/food3.jpeg'
import drimk1 from './img/drink1.jpeg'
import drink2 from './img/drink2.jpeg'
import drink3 from './img/drink3.jpeg'



const App = () => {
    const foodData = [
        {id: 1, title: "Pasta", description: 'baasto taliyaani, with cheese and tomatoes', Image: food1 },
        {id: 2, title: "suugo", description: 'Suugo macaan  ', Image: food2 },
        {id: 3, title: "khudaar", description: 'khudrad cagaaran', Image: food3 },

    ]

    const drinkData = [
        {id: 1, title: "Grapes and strawbery", description: 'Cinab iyo strawbery isku shiidan', Image: drimk1 },
        {id: 2, title: "Grapes", description: 'Grapes organic ah oo ka baxay wadanka  ', Image: drink2 },
        {id: 3, title: "Milkshake", description: 'Caano iyo Moos isku shiidan', Image: drink3 },

    ]

    

    const [food, setFood] = useState(foodData)
    const [drinks, setDrinks] = useState(drinkData)

    const handleOrder = (id) =>{
        let newDrink = drinks.filter((drinkList) => drinkList.id !== id);
        if (newDrink.length === 0) {
            window.confirm("are you sure to order all of them");
        }
        setDrinks(newDrink)
    }

    const handleFoodOrder = (id) =>{
        let newFood = food.filter((foodList) => foodList.id !== id);
        if (newFood.length === 0) {
            window.confirm("are you sure to order all of them");
        }
        setFood(newFood)
    }



    return (
        <div>
            <Header/>
            <Showcase cover = {cover}  />
            <Food food={food}  handleFoodOrder = {handleFoodOrder}/>
            <Drinks drinks = {drinks} handleOrder = {handleOrder}/>
            <Footer />
            <SubFooter/>
        </div>

    )
};

export default App;