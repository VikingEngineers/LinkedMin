import React from "react";

import icon_next from './img/play_media_icon.svg'


export default function EditProfile (){
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
        <div class="addprcontainer">  
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