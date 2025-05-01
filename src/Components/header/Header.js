import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocials from './HeaderSocials'
import surya from '../../assets/Surya.jpeg'
import portfolio from '../../assets/shay.jpg'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Sajid Ameer</h1>
      <h5 className='text-light'>Graphic and UI/UX Designer</h5>
      <CTA/>
      <HeaderSocials/>
      <div>
        <img className='me' src={portfolio} alt='wakandaForever'/>
      </div>
    </div>
    </header>
  )
}

export default Header