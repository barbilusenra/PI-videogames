import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home, Landing, Detail } from './views';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import CreateVideogame from './views/Form/Form';

function App() {
  
  const location = useLocation();

  return (
    <div className="App">
       {location.pathname !== "/" &&  <NavBar />} 
      <Routes>
      <Route exact path="/" element={ <Landing /> } />
      <Route exact path="/home" element= { <Home /> } />
      <Route exact path="/videogames/:id" element={ <Detail />} />
      <Route exact path="/create" element={ <CreateVideogame /> } />
     </Routes>
    </div>
  );
}

export default App;
// function App() {
//   const { pathname } = useLocation();
//   return (
//     <div className="App">
//       { pathname !== '/' &&  <NavBar /> }
//       <Routes>
//         <Route path='/' element={ <Landing /> } />
//         <Route path='/home' element={ <Home /> } />
//         <Route path='/videogames/:idVideogame' element={ <GameDetail /> }/>
//         <Route path='/form' element={ <Form /> }/>
//       </Routes>

//     </div>
//   );
// }