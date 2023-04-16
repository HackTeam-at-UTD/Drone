import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './Items_list.js';
import Home from './Home.js';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/items" element={<Items/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React, {useState, useEffect} from 'react'

// function App() {
//   const [data, setData] = useState([{}])

//   useEffect(() => {
//     fetch("/numberOfWaterBottles").then(
//       res => res.json()
//     ).then(
//       data => {
//         setData(data)
//         console.log(data)
//       }
//   )
// }, [])

//   return (
//     <div>
//       {(typeof data.numberOfWaterBottles == 'undefined') ? (
//         <p>loading...</p>
//       ):(
//         data.numberOfWaterBottles.map((numberOfWaterBottle, i) => (
//           <p key={i}> {numberOfWaterBottle} </p>
//         ))
//       )}
//     </div>
//   )
// }

// export default App
