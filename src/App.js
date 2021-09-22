import './App.scss';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
const root = document.querySelector('#root');

function App() {
  useEffect(()=> {
    setTimeout(()=> {
      root.style.display = 'block'
    },3250);
  },[])
  return (
    <>
      <Navbar/>
      <Introduction/>
    </>
  );
}

export default App;
