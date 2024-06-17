import React from 'react'

export const Main = () => {
  return (
    <div className='menubar'>
            <div className='menubarItem'>
                <a href='/component'>Component</a>
            </div>
            <div className='menubarItem'>
                <a href='/dom'>DOM</a>
            </div>
            <div className='menubarItem'>
                <a href='/JSX'>JSX</a> 
            </div>
            <div className='menubarItem'>
                <a href='/node-js'>Node JS</a> 
            </div>
            <div className='menubarItem'>
                <a href='/npm-package'>NPM Package</a> 
            </div>
            <div className='menubarItem'>
                <a href='/routing'>Rounting</a> 
            </div>
            <div className='menubarItem'>
                <a href='/v8-engine'>V8 Engine</a> 
            </div>
            <div className='menubarItem'>
                <a href='/virtual-dom'>Virtual DOM</a> 
            </div>
    </div>
  )
}
