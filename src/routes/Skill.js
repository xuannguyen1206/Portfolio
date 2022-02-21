import './Skill.scss';
import htmlImg from '../assets/skills/html.png';
import cssImg from '../assets/skills/css.png';
import jsImg from '../assets/skills/js.png';
import sassImg from '../assets/skills/sass.png';
import webpackImg from '../assets/skills/webpack.png';
import reactImg from '../assets/skills/react.png';
import eslintImg from '../assets/skills/eslint.png';
import nextImg from '../assets/skills/next.png';
import tailwindImg from '../assets/skills/tailwind.png';
import nodeJsImg from '../assets/skills/nodejs.png'
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

function Skill() {
  const logoDisplay = useRef();
  const title = useRef();
  function blinkLogo(){
    logoDisplay.current.classList.add('turnOnLogo')
  }

  useEffect(()=> {
    title.current.classList.add('turnOnHeader');
  },[])

  return (
    <>
    <Navbar/>
    <section id='skill'>
      <header  className='sectionHeader neon' onAnimationEnd = {blinkLogo}>
        <h1 ref={title}>Skills</h1>
      </header>
      <div className='display' ref = {logoDisplay}>
        <img src = {htmlImg} alt = 'html'/>
        <img src = {cssImg} alt = 'css'/>
        <img src = {jsImg} alt = 'javascript'/>
        <img src = {sassImg} alt = 'sass'/>
        <img src = {reactImg} alt = 'react'/>
        <img src = {webpackImg} alt = 'webpack'/>
        <img src = {eslintImg} alt = 'css'/>
        <img src= {nextImg} alt ='nextjs'/>
        <img src= {tailwindImg} alt ='tailwind'/>
        <img src= {nodeJsImg} alt ='nodeJS'/>
      </div>
    </section>
    </>
  );
}

export default Skill;