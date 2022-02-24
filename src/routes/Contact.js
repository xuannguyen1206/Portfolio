import './Contact.scss';
import githubImg from '../assets/contact/github.png'
import Navbar from '../components/Navbar';
import { useEffect, useRef } from 'react';
const root = document.querySelector('#root');
function Contact() {
  const title = useRef();

  useEffect(()=> {
    root.style.display = 'block';
    title.current.classList.add('turnOnHeader');
  },[])

  return (
    <>
    <Navbar/>
    <section id='contact'>
      <div>
        <header className='sectionHeader neon'>
          <h1 ref={title}>CONTACT</h1>
        </header>
        <div class='contactLinkContainer'>
          <a href='https://github.com/xuannguyen1206?tab=repositories' target = "_blank">
            <img src = {githubImg} alt ='github'></img>
          </a>
          <span>0938213705</span>
          <a href='https://mail.google.com/mail/u/1/#search/haxuannnguyenn%40gmail.com' target = "_blank">haxuannnguyenn@gmail.com</a>
        </div>
      </div>

    </section>
    </>
  );
}

export default Contact;