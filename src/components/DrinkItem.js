import React from 'react'

const DrinkItem = ({drinks, handleOrder}) => {
  return (
    <>
        {drinks.map((drinkItem) => (
            <div className='box' key={drinkItem.id}>
                <img src={drinkItem.Image} alt=''/>
                <div className='order-info'>
                    <p>{drinkItem.title}</p>
                    <small>{drinkItem.description}</small> <br/>
                    <button className='btn' onClick={() => handleOrder(drinkItem.id)}>Order</button>
                </div>
            </div>
        ))}
    </>
  )
}

export default DrinkItem