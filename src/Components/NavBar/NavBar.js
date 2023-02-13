import classes from './NavBar.module.css'
import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import Logo from './Logo'



const NavBar = () => {
  return (
<div className={classes.NavBar}>
    <Logo />
  
   <div className='NavBar'>
    <MobileNavigation style={{right:0}} />
    <Navigation />
   </div>

</div>
  )
}

export default NavBar