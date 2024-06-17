import React from 'react'
import "./Navbar.css"
import logo from '../logo192.png'
export const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='logo'>
            <img src={logo}/>
            <span className='logoText'>React</span>
        </div>
        <div className='listContainer'> 
            <div className='listItem'>
                <a href="/">Home</a>
            </div>
            <div className='listItem'>
                <a href="#">Reference</a>
            </div>
            <div className='listItem'>
                <a href="#">Community</a>
            </div>
            <div className='listItem'>
                <a href="#">Blog</a>
            </div>
        </div>
    </div>
  )
}