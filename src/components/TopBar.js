// import React from 'react';
// import {Navbar, NavbarBrand } from 'reactstrap'

// export default function TopBar(){
//     return(
//         <Navbar 
//             color="info" 
//             dark
//             container="fluid"
//             expand='md'
//         >
//             <NavbarBrand href="/">
//                 Pregnancy App
//             </NavbarBrand>
//         </Navbar>
//     )
// }
import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import React from 'react'
import { NavLink } from 'react-router-dom';


const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <Navbar dark color='info' sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href="/">
        <h1 className='mt-1'>Pregnancy App</h1>
      </NavbarBrand>

      <NavbarToggler onClick={()=> setMenuOpen(!menuOpen)}/>
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <i className='fa fa-home fa-lg' /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/exercises'>
              <i className='fa fa-list fa-lg' /> Exercises
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/food'>
              <i className='fa fa-info fa-lg' />Snacks
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default TopBar;