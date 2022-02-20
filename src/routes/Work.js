import './Work.scss';
import { useRef,useEffect } from 'react';
import image1 from '../assets/work/1.png';
import image2 from '../assets/work/2.png';
import image3 from '../assets/work/3.png';
import image4 from '../assets/work/4.png';
import image5 from '../assets/work/5.png';
import Navbar from '../components/Navbar';
const root = document.querySelector('#root');
function Work() {
  const slider = useRef();
  const container = useRef();
  const status = useRef('');
  const title = useRef();
  function nextCard(){
    if(status.current === 'prev'){
      slider.current.prepend(slider.current.lastElementChild);
    }
    status.current = 'next';
    container.current.style.justifyContent = 'flex-start';
    slider.current.style.transform = 'translateX(-20%)';
  }
  function prevCard(){
    if(status.current === 'next'){
      slider.current.appendChild(slider.current.firstElementChild);
    }
    status.current = 'prev';
    container.current.style.justifyContent = 'flex-end';
    slider.current.style.transform = 'translateX(20%)';
  }
  function resetSlide(){
    if(status.current === 'next'){
      slider.current.appendChild(slider.current.firstElementChild);
    } else{
      slider.current.prepend(slider.current.lastElementChild);
    }
    slider.current.style.transition = 'none';
    slider.current.style.transform = 'translate(0)';
    setTimeout(() => {
      slider.current.style.transition = 'all 0.5s linear';
    })
  }

  useEffect(()=> {
    title.current.classList.add('turnOnHeader');
    root.style.display = 'block';
  },[])

  return (
    <>
    <Navbar/>
    <section id = 'work'>
      <header className='sectionHeader neon'>
        <h1 ref={title}>Projects</h1>
      </header>
      <div className='carousel'>
        <div className ='container' ref = {container}>
          <div ref={slider} onTransitionEnd={resetSlide} className ='card-container'>
            <div className = 'card'>
              <figure>
                <img alt ='etch a sketch' src= {image1}></img>
              </figure>
              <article className='des'>
                <h1>Etch a sketch</h1>
                <p>Let yuor imaginations run freely on a canvas. Using powerful mathematical algorithm to change the theme colors of the webpage to make your drawing even more noticable and stand out even more.</p>
                <span>Vanilla JS, Sass, Html, Css</span>
                <div className ='buttons'>
                  <a href= 'https://github.com/xuannguyen1206/Etch-a-Sketch'>code</a>
                  <a href= 'https://xuannguyen1206.github.io/Etch-a-Sketch/' target="_blank">live</a>
                </div>
              </article>
            </div>
            <div className = 'card'>
              <figure>
                <img alt ='etch a sketch' src= {image2}></img>
              </figure>
              <article className='des'>
                <h1>Weather App</h1>
                <p>Enter a city name and you'll get everything you need to know about that place. Weather information, pictures , all in 1 website. Collecting data from 2 different resourceful API, this website will give you a brief status quo of almost all of the cities in the world. In mobile version, you can slide the picture instead of expanding it.</p>
                <span>Vanilla JS + ES6, Html, Sass, Css, Eslint </span>
                <div className ='buttons'>
                  <a href= 'https://github.com/xuannguyen1206/Weather-app' target="_blank">code</a>
                  <a href= 'https://xuannguyen1206.github.io/Weather-app/' target="_blank">live</a>
                </div>
              </article>
            </div>
            <div className = 'card'>
              <figure>
                <img alt ='etch a sketch' src= {image3}></img>
              </figure>
              <article className='des'>
                <h1>Hangman</h1>
                <p>Testing your knowledgeable vocabulary. Don't make too many mistakes or you'll break the poor guy's neck. If you're lucky enough, maybe his smile is the last thing you remember about him.</p>
                <span>React JS (Hooks), Sass, Html, Css, Webpack</span>
                <div className ='buttons'>
                  <a href= 'https://github.com/xuannguyen1206/Hangman' target="_blank" >code</a>
                  <a href= 'https://xuannguyen1206.github.io/Hangman/' target="_blank">live</a>
                </div>
              </article>
            </div>
            <div className = 'card'>
              <figure>
                <img alt ='etch a sketch' src= {image4}></img>
              </figure>
              <article className='des'>
                <h1>Calculator</h1>
                <p>A perfect alternative to your regular old calculator we used to use back in highschool. But let not stop there, it can even say 'HELLO' and handle anything you enter.</p>
                <span>React JS (Class components), Sass, Html, Css, Webpack, Eslint</span>
                <div className ='buttons'>
                  <a href= 'https://github.com/xuannguyen1206/Calculator' target="_blank">code</a>
                  <a href= 'https://xuannguyen1206.github.io/Calculator/' target="_blank">live</a>
                </div>
              </article>
            </div>
            <div className = 'card'>
              <figure>
                <img alt ='etch a sketch' src= {image5}></img>
              </figure>
              <article className='des'>
                <h1>Portfolio</h1>
                <p>A combination of all the skill I have learnt and put in one place. The most responsive design and cleanest organization I have ever done. Trapping users in a neon maze but you can easily naviagte through using very noticable headlines. This portfolio will tell you everything you need to know about me as a developer.Enjoy!</p>
                <span>React JS (Hooks), Sass, Html, Css, Webpack, Eslint</span>
                <div className ='buttons'>
                  <a href= '#' target="_blank">code</a>
                  <a href= 'https://xuannguyen1206.github.io/Portfolio/' target="_blank">live</a>
                </div>
              </article>
            </div>
            
          </div>   
        </div>
        <span className='arrow leftArrow' onClick={prevCard}>&#x3c;</span>
        <span className='arrow rightArrow' onClick={nextCard}>&#x3e;</span>
      </div>
    </section>
    </>
  )
  ;
}
export default Work;