import './Contact.scss';
import githubImg from './github.png'
function Contact() {
  return ( 
    <section id='contact'>
      <header className='sectionHeader neon'>
        <h1>CONTACT</h1>
      </header>
      <div class='contactLinkContainer'>
        <a href='https://github.com/xuannguyen1206?tab=repositories' target = "_blank">
          <img src = {githubImg} alt ='github'></img>
        </a>
        <span>0938213705</span>
        <a href='https://mail.google.com/mail/u/2/#search/xuannguyenha02%40gmail.com' target = "_blank">xuannguyenha02@gmail.com</a>
      </div>
    </section>
  );
}

export default Contact;