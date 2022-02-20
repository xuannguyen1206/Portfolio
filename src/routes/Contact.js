import './Contact.scss';
import githubImg from '../assets/contact/github.png'
import Navbar from '../components/Navbar';
function Contact() {
  return (
    <>
    <Navbar/>
    <section id='contact'>
      <header className='sectionHeader neon'>
        <h1>CONTACT</h1>
      </header>
      <div class='contactLinkContainer'>
        <a href='https://github.com/xuannguyen1206?tab=repositories' target = "_blank">
          <img src = {githubImg} alt ='github'></img>
        </a>
        <span>0938213705</span>
        <a href='https://mail.google.com/mail/u/1/#search/haxuannnguyenn%40gmail.com' target = "_blank">haxuannnguyenn@gmail.com</a>
      </div>
    </section>
    </>
  );
}

export default Contact;