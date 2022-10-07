import React from "react";
import Teams from "../Desarrolladores/TeamData.json";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Desarrolladores(){
    const navigate = useNavigate();
    return(
    <div className="estilo" >
            <div>
                <h1> LISTA DE DESARROLLADORES  </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>LU</th>
                            <th>APELLIDO</th>
                            <th>NOMBRE</th>
                            <th>GITHUB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Teams.map((user, index) => {
                            return(
                                <tr key={user.LU}>
                                    <td>{user.LU}</td>
                                    <td>{user.apellido}</td>
                                    <td>{user.nombre}</td>
                                    <td><a href={user.GitHub}>{user.GitHub}</a> </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <br></br>
            <div>
                <Button onClick={() => navigate("/")} size="sm">
                    Regresar al Inicio
                </Button>
            </div>
    </div>
    );
}

export default Desarrolladores;