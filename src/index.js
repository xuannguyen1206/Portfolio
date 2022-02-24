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
      <Route path='/Portfolio/' element={<App/>}/>
      <Route path='/Portfolio/work' element= {<Work/>}/>
      <Route path='/Portfolio/skills' element={<Skill/>}/>
      <Route path='/Portfolio/about' element={<About/>}/>
      <Route path='/Portfolio/contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

