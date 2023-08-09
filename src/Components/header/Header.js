import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocials from './HeaderSocials'
import vizagTour1 from '../../assets/vizagTour1.jpg';
// import blackPanther from '../../assets/blackPanther.jpg';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Surya</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div>
        <img className='me' src={vizagTour1} alt='wakandaForever'/>
      </div>
    </div>
    </header>
  )
}

export default Header