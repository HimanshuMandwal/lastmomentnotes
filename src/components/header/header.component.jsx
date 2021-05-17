import React from 'react';
import { Link }  from 'react-scroll';

import './header.styles.scss';


const Header = (smooth=true , duration=500) => (
   <div className ='header'>
        <div className='options'>
           <Link className ="options" to="home" smooth={{smooth}} duration={{duration}}> Home </Link>
           <Link className ="options" to="academics" smooth={{smooth}} duration={{duration}} > academics</Link>
           <Link className ="options" to ="why-us" smooth={{smooth}} duration= {{duration}}> why us</Link>
           <Link className ="options" to="about-us" smooth={{smooth}} duration={{duration}} > about us </Link>
           <Link className ="options" to="contact-us" smooth={{smooth}} duration={{duration}} > contact us </Link>
        </div>
   </div>
);


export default Header; //creating a heigher order component using connect function