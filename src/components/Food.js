import React from 'react'
import FoodItems from './FoodItems'

const Food = ({food, handleFoodOrder}) => {
  return (
    <div className='container'>
      <h3 className='title'>Food <span className='sizer'>🍔</span></h3>
      <div className='food'>
        <FoodItems food = {food} handleFoodOrder={handleFoodOrder}/>
      </div>
    </div>
  )
}

export default Food