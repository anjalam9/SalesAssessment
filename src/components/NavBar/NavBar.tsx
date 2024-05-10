import React from "react";
import "./NavBar.css";
import { ReactComponent as LogoSvg  } from '../../assests/images/stackline_logo.svg';

const NavBar: React.FC = () => {
  return (
    <div>
      <div className='navbar'>
        <LogoSvg className='logo'/>
      </div>
    </div>
  );
};

export default NavBar;
