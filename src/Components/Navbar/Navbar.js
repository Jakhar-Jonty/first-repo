import React from 'react'
import "./Navbar.css"
import logo from '../logo192.png'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='logo'>
            <img src={logo}/>
            <span className='logoText'>React</span>
        </div>
        <div className='listContainer'> 
            <div className='listItem'>
            <Link to="/">Home</Link>
            </div>
            <div className='listItem'>
                 <Link to="/">Reference</Link>
            </div>
            <div className='listItem'>
                 <Link to="/">Community</Link>
            </div>
            <div className='listItem'>
                 <Link to="/">Blog</Link>
            </div>
        </div>
    </div>
  )
}