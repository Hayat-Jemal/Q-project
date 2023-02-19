import React, { useState } from 'react'
import classes from './NavBar.module.css'
import NavLinks from './NavLinks'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <FiMenu className={classes.Humburger} size='30px' color= 'green;'
    onClick={() => setOpen(!open)} />

    const closeIcon =  <GrClose className={classes.Humburger} size='30px' color= 'green'
    onClick={() => setOpen(!open)} />

    const closeMobileMenu = () =>setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
        
     {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile= {true } closeMobileMenu={closeMobileMenu}/>}
    </nav>
  )
}

export default MobileNavigation