import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Rankin from './Component/Rankin/Rankin';
import Desarrolladores from './Component/Desarrolladores/Desarrolladores.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './Component/Inicio/Inicio';
import Game from './Component/Game/Game.js';
import Container from 'react-bootstrap/Container';
import Error from './Component/error/Error';

function App() {
  return (
    <Container>
    
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/inicio' element={<Inicio />}></Route>
            <Route path='/rankin' element={<Rankin />}></Route>
            <Route path='/desarrolladores' element={<Desarrolladores />}></Route>
            <Route path='/game' element={<Game />}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </Router>
          
        
    </Container>
  );
}

export default App;
