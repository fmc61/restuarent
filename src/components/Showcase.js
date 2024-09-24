import React from 'react'


const Showcase = (props) => {
  return (
    <div className='showcase'>
      <div className='image-holder'>
        <img src={props.cover} alt='sawir'/>
      </div>
      <div className='text'>
        <h3>Cunto Macaan</h3>
        <p className= "info">
          Cunto Loo Kariyay si fiican oo leh noocyo kala duwan. Waxaana ku darnay 
          geedo cuntada ku cunsiinaya.
        </p>
        <h3 className='h-info'>Cabitaano 🥛</h3>
        <p>
          Cabitaanadu waa kuwaa aad u macaan oo lagu diyaariyay{" "} 
          <span className='highlight'> Mashiino casri ah</span>
        </p>
      </div>
        
    </div>
  )
}

export default Showcase