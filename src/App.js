import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import{ Dom }from './Components/Dom/Dom'
import { Component } from "./Components/Component/Component";
import { Jsx } from './Components/JSX/Jsx';
import { Node_js } from './Components/Node_Js/Node_js';
import { Npm_Package } from './Components/NPM_Package/Npm_Package';
import { Rounting } from './Components/Routing/Rounting';
import { V8_Engine } from './Components/V8_Engine/V8_Engine';
import { Virtual_DOM } from './Components/Virtual_DOM/Virtual_DOM';
import { Main } from './Components/Main/Main';
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import { Home } from './Components/Home/Home';

function App(){
  
  return (
   <>
   <Navbar/>
   <Main/>
   <Router>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/component' element={<Component/>}/>
      <Route path='/dom' element={<Dom/>}/>
      <Route path='/jsx' element={<Jsx/>}/>
      <Route path='/node-js' element={<Node_js/>}/>
      <Route path='/npm-package' element= {<Npm_Package/>}/>
      <Route path='/routing' element={<Rounting/>}/>
      <Route path='/v8-engine' element={<V8_Engine/>}/>
      <Route path='/virtual-DOM' element={<Virtual_DOM/>}/>
    </Routes>
  </Router>
   </>
  );
}

export default App;
