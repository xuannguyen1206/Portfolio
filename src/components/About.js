import './About.scss'
import { useRef } from 'react';

function About() {
  const quote = useRef();
  function lightenUpQuote(){
    quote.current.classList.add('lightenUp');
  }
  return ( 
    <section id = 'about'>
      <header className='sectionHeader neon' onAnimationEnd = {lightenUpQuote}>
        <h1>ABOUT ME</h1>
      </header>
      <div class='quoteContainer'>
        <p ref={quote} class = 'quote'>"It’s not who I am underneath, but what I do that defines me."</p>
      </div>
      <p class = 'longIntro'>Hi! I'm Ha Xuan Nguyen greeting from Ho Chi Minh city, Vietnam. I'm currently studying computer science at 
Vietnamese-German University(VGU). I began building small web-related stuff alongside with university's curriculum and immediately, I fell in love with this subject. Now I'm looking forward to put my knowlegde in practice by building practical applications and websites.</p>
    </section>
  );
}
export default About;