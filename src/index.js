import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Work from './routes/Work';
import Skill from './routes/Skill';
import About from './routes/About';
import Contact from './routes/Contact';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/work' element= {<Work/>}/>
      <Route path='/skills' element={<Skill/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

