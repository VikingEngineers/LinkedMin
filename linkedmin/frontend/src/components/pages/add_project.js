import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import icon_next from './img/play_media_icon.svg'


export default function AddProject() {



    return(
      <div>  
        <div class="addprcontainer">  
        <h3>Add Project Page</h3>
        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>title</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>description</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>featured_image</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>demo_link</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>
        

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>source_link</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>tags</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        </div>  
      </div>
    )  
}