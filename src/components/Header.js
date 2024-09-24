import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h2> <span className='highlight'>Hubaal </span> <span className='sizer'>🍔</span></h2>
      </div>
      <nav>
        <ul>
          <li>Food</li>
          <li>Drinks</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header