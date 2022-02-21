import './App.scss';
import {useEffect, useState , useRef} from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
const root = document.querySelector('#root');

function App() {
  
  useEffect(()=> {
    setTimeout(()=> {
      root.style.display = 'block';
    },5250); //wait for loading page to finish then display webpage
  },[]);
  return (
    <>
      <Navbar/>
      <Introduction/>
      
    </>
  );
}

export default App;
