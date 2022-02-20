import './Navbar.scss'
import { useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';

let root = document.documentElement;


function Navbar() {
  const nav = useRef(null);
  function mobileMenuActive(){
    nav.current.classList.toggle('mobile-active');
  }
  useEffect(()=>{
    root.style.setProperty('--mobileHeight',window.innerHeight + 'px');
  })
  window.addEventListener('resize', ()=>{
    root.style.setProperty('--mobileHeight',window.innerHeight + 'px');
  })
  return (
    <nav>
      <div className='nav-content' ref = {nav}>
        <Link id ='home' to ='/'>HXN</Link>
        <ul>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><a href='https://drive.google.com/file/d/1vI81ocprVhtfvdKN05NdW-w-1dhOkSVu/view?usp=sharing' target = '_blank' id ='resume'>Resume</a></li>
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