import './About.scss'
import { useRef,useEffect } from 'react';
import Navbar from '../components/Navbar';
const root = document.querySelector('#root');


function About() {
  const title = useRef();
  useEffect(()=> {
    title.current.classList.add('turnOnHeader');
    root.style.display = 'block';
  },[])
  return (
    <>
    <Navbar/>
    <section id = 'about'>
      <div>
        <header className='sectionHeader neon'>
          <h1 ref={title}>ABOUT ME</h1>
        </header>
        <div className='neonBox'>
          <p className= 'longIntro'>Hi! I'm Ha Xuan Nguyen greeting from Ho Chi Minh city, Vietnam. I began building small web-related stuff at the beginning of 2021 as a past-time activity and immediately,
           I fell in love with this subject. My goal now is to learn more from people and use that knowlegde to build stuff to improve our lives.</p>
        </div>
      </div>

    </section>
    </>
  );
}
export default About;