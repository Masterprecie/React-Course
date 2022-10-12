import React from 'react'
import Boot from './Components/Boot';
import Login from './Components/Login';
import UseStateCounter from './Components/useState/UseStateCounter';
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <Routes>
      <Route path={'/'} element= {<Boot/>} />
      <Route path={'/Login'} element= {<Login/>}/>
      <Route path={'/UseStateCounter'} element= {<UseStateCounter/>} />
    </Routes>
  );
}

export default App;
