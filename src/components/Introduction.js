import './Introduction.scss'
import { useRef } from 'react';

function Introduction() {
  const sign = useRef();
  function switchOpen(){
    sign.current.classList.add('switchOpen')
  }
  return ( 
    <div className ='intro'>
      <h1 onAnimationEnd = {switchOpen} >HI, I'm just a developer who loves doing his <a className='neon' href='#work'>works</a></h1>
      <div ref = {sign} className = 'sign'>
        <span>We are</span>
        <span id = 'close'> close</span>
        <span id = 'open'>open</span>
      </div>
    </div>
   );
}

export default Introduction;