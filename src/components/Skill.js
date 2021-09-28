import './Skill.scss';
import htmlImg from './html.png';
import cssImg from './css.png';
import jsImg from './js.png';
import sassImg from './sass.png';
import webpackImg from './webpack.png';
import reactImg from './react.png';
import eslintImg from './eslint.png';
import { useRef } from 'react';

function Skill() {
  const logoDisplay = useRef();
  function blinkLogo(){
    logoDisplay.current.classList.add('turnOnLogo')
  }
  return ( 
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
  );
}

export default Skill;