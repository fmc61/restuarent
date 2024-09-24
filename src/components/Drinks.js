import React from 'react'
import DrinkItem from './DrinkItem'

const Drinks = ({drinks, handleOrder}) => {
  return (
    <div className='container'>
        <h3 className='title'>Drink <span className='sizer'>🥛</span></h3>
        <div className='drink'>
          <DrinkItem drinks = {drinks} handleOrder = {handleOrder}/>
        </div>
    </div>
  )
}

export default Drinks