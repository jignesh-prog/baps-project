import React from 'react';
import { Route } from 'react-router-dom';
import { Routes,BrowserRouter } from 'react-router-dom';
import { Login } from './components/login';
import { Home } from './components/home';
import {About} from './components/about';
import {Accomodation} from './components/accomodation';
import {Dashbord} from './components/dashbord'
function App() {

  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login/>}></Route>
     <Route path='Dashbord' element={<Dashbord/>}>
     <Route  path='home' element={<Home/>}/> 
     <Route  path='accomodation' element={<Accomodation/>}/>
     <Route  path='about' element={<About/>}/>
     </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
