// Welcome.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link

const Welcome = () => {
  return (
    <div className='box'>
       <h2> Welcome to PopX</h2>
       <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
       <Link to="/create">
         <Button id='bg'>Create Account</Button>
       </Link>
       <Link to="/login">
         <Button id='bg1'>Already Registered? Login</Button>
       </Link>
    </div>
  );
}

export default Welcome;
