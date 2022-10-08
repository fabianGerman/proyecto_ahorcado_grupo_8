import React from 'react';
import Players from '../../PlayerData.json';

function Rankin(){
    return(
        <div className="estilo" >
            <div>
                <h1> RANKIN DE JUGADORES  </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PUNTAJE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Players.map((user, index) => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.puntaje}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Rankin;