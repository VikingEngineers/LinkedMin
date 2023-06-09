import React from "react";
import Typewriter from "typewriter-effect";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


import testPhoto2 from './img/project_fone.jpg'


export const Main = ()=>{
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
      <div>
        <div class="main-container">
      <h1 class="h1_main">
      <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Показывай себя и свои проекты.")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Находи вдохновение, коллег и новые знания.")
  .start();
  }}  />
      </h1>

        <form action="{% url 'projects' %}" method="get">
        <input class="input-search" placeholder="Search by Project Title..." type="text" name="search_query"/>
        <input class="btn-search" type="submit" value="Search" />
    </form>

        </div>

        <div class="prcontainer">
        <div class="project-card">
        <img class="img-card-project" src={testPhoto2} />
        <h4>Card Title</h4>
        <div class="description">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </div>
          <Card.Text>% Positive Feedback (Vote)</Card.Text>
        <Card.Text>tags</Card.Text> 
        <button class="btn-send" onClick={handleMenuClick}>Go somewhere</button>
        </div>
    </div>
</div>
    )
}