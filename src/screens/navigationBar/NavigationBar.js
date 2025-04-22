import React from 'react'
import './navigation.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {navigationLinks} from '../../helpers/navigationLinks';

function createLinks(){
    return navigationLinks.map((e, indx) => (
        <Nav.Link key={indx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function NavigationBar() {
  return (
    <div id="home">
      <Navbar className="navigation_container" 
      style={{zIndex: '2', position: 'fixed', top: 0, width: '100%'}}
      expand="md"> 
        <Navbar.Brand href="#home" style={{marginLeft: "1rem"}}>Pradeep B G</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{justifyContent: 'flex-end', marginRight: '1rem', border: '0px'}}>
            <Nav className='links' style={{margin: '0 1rem'}}>
                {createLinks()}
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
