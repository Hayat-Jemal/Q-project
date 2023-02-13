import classes from './NavBar.module.css'
import React from 'react'
import NavLinks from './NavLinks'
import "./navBar.css"

const Navigation = () => {
  return (
   
    <nav className={classes.Navigation}>
    <NavLinks />
    </nav>
   
  )
}

export default Navigation