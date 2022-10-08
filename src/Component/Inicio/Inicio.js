import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();
  return (
    <>
      <br></br>
      <br></br>
      <h1>Ahorcadito</h1>
      <br></br>
      <div className="text-center">
        <Button>
          Jugar
        </Button>
        <br></br><br></br>
        <Button onClick={() => navigate("/Desarrolladores")} variant='primary'>
          Desarrolladores
        </Button>
      </div>
    </>

  );
}

export default Inicio;