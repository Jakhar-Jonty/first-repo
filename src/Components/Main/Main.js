import React from 'react'
import {Link} from 'react-router-dom'

export const Main = () => {
  return (
    <div className='menubar'>
            <div className='menubarItem'>
                    <Link to="/component">Component</Link>

            </div>
            <div className='menubarItem'>
                              
                <Link to='/dom'>dom</Link>
             
            </div>
            <div className='menubarItem'>
                              
                <Link to='/JSX'>JSX</Link>
             
            </div>
            <div className='menubarItem'>
                 
                    <Link to='/node-js'>Node JS</Link>
                 
            </div>
            <div className='menubarItem'>
                 
                    <Link to='/npm-package'>NPM Package</Link>
                 
            </div>
            <div className='menubarItem'>
                 
                    <Link to='/routing'>Rounting</Link>
                 
            </div>
            <div className='menubarItem'>
                 
                    <Link to='v8-engine'>V8 Engine</Link>
                 
            </div>
            <div className='menubarItem'>
                 
                    <Link to='/virtual-dom'>Virtual DOM</Link>
                 
            </div>
    </div>
  )
}

