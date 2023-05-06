import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function SignUp (){

    return(
        <div class="formcontainer">
        <h3>Email</h3>
        <input class="prinput" placeholder='Enter your email'></input>
        <h3>Password</h3>
        <input class="prinput" placeholder='Enter your password'></input>
        <button class="btn-search" type="submit">LogIn</button>
        </div>
    
    )}