import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import Note from "./containers/Note"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./containers/NavBar"


function App() {
  return (
    <div className="App container">
<NavBar />
    </div>
  );
}

export default App;