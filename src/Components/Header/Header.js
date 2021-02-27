import React from 'react';
import './Header.css';

import trollface_img from "../../Assets/Trollface.png";

function Header() {
  return (
    <header>
        <img 
            src={trollface_img}
            alt="Problem???"
        />
        <p>Meme Generator!</p>
    </header>
  );
}

export default Header;