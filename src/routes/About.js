import './About.scss'
import { useRef } from 'react';
import Navbar from '../components/Navbar';

function About() {
  const quote = useRef();
  function lightenUpQuote(){
    quote.current.classList.add('lightenUp');
  }
  return (
    <>
    <Navbar/>
    <section id = 'about'>
      <header className='sectionHeader neon' onAnimationEnd = {lightenUpQuote}>
        <h1>ABOUT ME</h1>
      </header>
      <div class='quoteContainer'>
        <p ref={quote} class = 'quote'>"It’s not who I am underneath, but what I do that defines me."</p>
      </div>
      <p class = 'longIntro'>Hi! I'm Ha Xuan Nguyen greeting from Ho Chi Minh city, Vietnam. I began building small web-related stuff at the beginning of this year as a past-time activity and immediately, I fell in love with this subject. My goal now is bringout more creative and efficient work.</p>
    </section>
    </>
  );
}
export default About;