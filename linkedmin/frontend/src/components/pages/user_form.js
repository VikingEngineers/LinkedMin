import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Routes, Route, Link}
    from 'react-router-dom';


import testPhoto1 from './img/avatar_fem.jpg'
import testPhoto2 from './img/project_fone.jpg'
import icon_next from './img/play_media_icon.svg'


export default function UserForm (){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);


  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = (event) => {
      setAnchorE2(event.currentTarget);
  }
  const handleClose = () => {
      setAnchorEl(null);
      setAnchorE2(null);
  };
    return(
      <body>       

        <div class="left-content">
        <div class="link-container">  
        <Row><img class="avatar"src={testPhoto1}/></Row>
        <tbody>
        <tr>
          <td class="foricon"><Row><img class="icon"src={icon_next}/></Row></td>
          <td><button class="btn-send" onClick={handleMenuClick}>Github</button></td>
        </tr>
        <tr>
          <td><Row><img class="icon"src={icon_next}/></Row></td>
          <td><button class="btn-send" onClick={handleMenuClick}>Twitter</button></td>
        </tr>
        <tr>
          <td><Row><img class="icon"src={icon_next}/></Row></td>
          <td> <button class="btn-send" onClick={handleMenuClick}>Vk</button></td>
        </tr>
        <tr>
          <td> <Row><img class="icon"src={icon_next}/></Row></td>
          <td><button class="btn-send" onClick={handleMenuClick}>Personal Website</button></td>
        </tr>
        <tr>
          <td></td>
          <td><button class="btn-send" onClick={handleMenuClick}>Send Message</button></td>
        </tr>
        <tr>
          <td></td>
          <td><button class="btn-send" onClick={handleMenuClick} href="/edit_profile">Edit Profile</button></td>
        </tr>
        </tbody>
        </div> 
        
        </div>

        <div class="right-content">
        
        <Row><h3>About Me</h3></Row>
        <Row><h4>Based in location</h4></Row> 
        <Row><h4>profile.short_intro</h4></Row>
        <Row><h3>Skills</h3></Row>
        <Col><Row><h4>skill.name</h4></Row></Col>
        <Col><Row><h4>skill.description</h4></Row></Col>
        <Row><h3>Other Skills</h3></Row>
        <Col><Row><h4>skill.name</h4></Row></Col>
        <Col><Row><h4>skill.description</h4></Row></Col>

        <Row><h3>Projects</h3></Row>
        <div class="project-card">
        <img class="img-card-project" src={testPhoto2} />
        <h4>Card Title</h4>
        <div class="description">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </div>
        <button class="btn-send" onClick={handleMenuClick}>Go somewhere</button>

        </div>
        </div> 


    </body>
    )}