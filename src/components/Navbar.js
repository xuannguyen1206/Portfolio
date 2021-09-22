import './Navbar.scss'
import hamburgerMenu from './hamburgerMenu.png'
import { useRef } from 'react';

function Navbar() {
  const nav = useRef(null);
  function mobileMenuActive(){
    nav.current.classList.toggle('mobile-active');
  }
  return (
    <nav>
      <div className='nav-content' ref = {nav}>
        <a id ='home' href ='#'>HXN</a>
        <ul>
          <li><a href='#'>Work</a></li>
          <li><a href='#'>Skills</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <div className='hamburger'  onClick = {mobileMenuActive}>
          <div className = 'line num1'></div>
          <div className = 'line num2'></div>
          <div className = 'line num3'></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar