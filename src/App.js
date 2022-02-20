import './App.scss';
import {useEffect, useState , useRef} from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
const root = document.querySelector('#root');

function App() {
  const headerTitle = useRef();

  function blinkHeaderTitle() {
    headerTitle.current.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('turnOnHeader');
      } else {
        element.classList.remove('turnOnHeader');
      }
    });
    window.requestAnimationFrame(blinkHeaderTitle);
  }
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
  
  useEffect(()=> {
    setTimeout(()=> {
      root.style.display = 'block';
    },5250); //wait for loading page to finish then display webpage
    headerTitle.current = document.querySelectorAll('.sectionHeader h1');
    blinkHeaderTitle(); 
  },[]);
  return (
    <>
      <Navbar/>
      <Introduction/>
    
    </>
  );
}

export default App;
