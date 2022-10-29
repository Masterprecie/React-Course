import React from 'react'
import Boot from './Components/Boot';
import Login from './Components/Login';
import UseStateCounter from './Components/useState/UseStateCounter';
import UseEffectBasics from './Components/useEffect/useEffectBasics';
import {Routes, Route} from 'react-router-dom'
import ReactProject1 from './Components/Projects/Project1/ReactProject1';
import ReactProject2 from './Components/Projects/Project2/ReactProject2';
import Children from './Components/Children';




function App() {
  return (
    <Routes>
      <Route path={'/'} element= {<Boot>
        <Children/>
      </Boot>} />
      <Route path={'/Login'} element={<Login>
         <Children/>
      </Login>}/>
      <Route path={'/UseStateCounter'} element={<UseStateCounter />} />
      <Route path={'/UseEffectBasics'} element={<UseEffectBasics />} />
      <Route path={'/ReactProject1'} element={<ReactProject1 />} />
      <Route path={'/ReactProject2'} element={<ReactProject2 />} />      
    </Routes>
  );
}

export default App;
