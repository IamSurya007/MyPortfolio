import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='nav'>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':''}><AiFillHome/></a>
      <a href='#about'  onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
      <a href='#experiance' onClick={()=>setActiveNav('#experiance')} className={activeNav==='#experiance' ? 'active':''}><BiBook/></a>
      <a href='#services'  onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active':''}><RiServiceLine/></a>
      <a href='#contact'  onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><IoMdContact/></a>
    </nav>
  )
}

export default Nav