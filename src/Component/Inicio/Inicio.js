import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Img from 'react-bootstrap/image';
import Portada from "../ImgAhorcado/00.png";

function Inicio() {
  const navigate = useNavigate();
  return (
    <>
      <br></br>
      <Img src={Portada} style={{width: '45%'}}/>
      <br></br>
      <br></br>
      <div className="text-center">
        <Button variant = 'secondary'>
          Jugar
        </Button>
        <br></br><br></br>
        <Button onClick={() => navigate("/Desarrolladores")} variant='secondary'>
          Desarrolladores
        </Button>
      </div>
    </>

  );
}

export default Inicio;