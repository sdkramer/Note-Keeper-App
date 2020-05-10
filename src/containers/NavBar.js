import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import Routes from "../Routes";


function NavBar(){
  return(
    <div>
<Navbar fluid className='navBar'>
  <Navbar.Brand href="#home">Note Keeper</Navbar.Brand>
  <Link to="/">Home</Link>
  <Link to="/note">Note</Link>

  
</Navbar>
      <Routes />
    </div>

  )
}

export default NavBar;