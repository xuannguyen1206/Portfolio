import './Skill.scss';
import htmlImg from '../assets/skills/html.png';
import cssImg from '../assets/skills/css.png';
import jsImg from '../assets/skills/js.png';
import sassImg from '../assets/skills/sass.png';
import webpackImg from '../assets/skills/webpack.png';
import reactImg from '../assets/skills/react.png';
import eslintImg from '../assets/skills/eslint.png';
import { useRef } from 'react';
import Navbar from '../components/Navbar';

function Skill() {
  const logoDisplay = useRef();
  function blinkLogo(){
    logoDisplay.current.classList.add('turnOnLogo')
  }
  return (
    <>
    <Navbar/>
    <section id='skill'>
      <header className='sectionHeader neon' onAnimationEnd = {blinkLogo}>
        <h1>Skill</h1>
      </header>
      <div className='display' ref = {logoDisplay}>
        <img src = {htmlImg} alt = 'html'/>
        <img src = {cssImg} alt = 'css'/>
        <img src = {jsImg} alt = 'javascript'/>
        <img src = {sassImg} alt = 'sass'/>
        <img src = {reactImg} alt = 'react'/>
        <img src = {webpackImg} alt = 'webpack'/>
        <img src = {eslintImg} alt = 'css'/>

      </div>
    </section>
    </>
  );
}

export default Skill;