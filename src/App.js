import React from 'react'
import Boot from './Components/Boot';
import Login from './Components/Login';
import UseStateCounter from './Components/useState/UseStateCounter';
import {Routes, Route} from 'react-router-dom'
import ReactProject1 from './Components/Project1/ReactProject1';



function App() {
  return (
    <Routes>
      <Route path={'/'} element= {<Boot/>} />
      <Route path={'/Login'} element= {<Login/>}/>
      <Route path={'/UseStateCounter'} element={<UseStateCounter />} />
      <Route path={'/ReactProject1'} element = {<ReactProject1/>}/>
    </Routes>
  );
}

export default App;
