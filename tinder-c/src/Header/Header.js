import React from 'react'
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header_icon' />
      </IconButton>

      <img className='header_logo'
        src="/images/download.png"
        alt='No image' />
      
      <IconButton>
        <ForumIcon fontSize='large' className='header_icon' />
      </IconButton>

      
      
      
         
    </div>
  )
}

export default Header