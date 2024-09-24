import React from 'react'

const FoodItems = ({food, handleFoodOrder}) => {
  return (
    <>
        {food.map((foodItem) => (
              <div className='box'key={foodItem.id}>
              <img src= {foodItem.Image} alt='' />
              <div className='order-info'>
                  <p>{ foodItem.title}</p>
                  <small>{ foodItem.description}</small> <br/>
                  <button className='btn' onClick={() => handleFoodOrder(foodItem.id)}>Order</button>
              </div>
          </div>
        ))}
    </>
  )
}

export default FoodItems