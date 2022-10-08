import React, { Component } from "react";
import Imagen from "./Imagen";
import Palabra from "./Palabra";
import Control from "./Control";
import Letters from "../../LettersData.json";

class Game extends Component {
    constructor(props) {
        super(props);
        this.getBotonera = this.getBotonera.bind(this);
        this.sePulsoBoton = this.sePulsoBoton.bind(this);
        this.getPalabraAdivinar = this.getPalabraAdivinar.bind(this);
        this.getPalabraAdivinada = this.getPalabraAdivinada.bind(this);

        let palabraAdivinar = this.getPalabraAdivinar();

        this.state = {
            numFallos: 1,
            numAciertos: 0,
            palabraAdivinar: palabraAdivinar,
            palabraAdivinada: this.getPalabraAdivinada(palabraAdivinar),
            botones: this.getBotonera()
        };
    }

    getPalabraAdivinada(palabra) {
        
        let guiones = "";
        for (let i = 0; i < palabra.length; i++) {
            guiones += "-";
        }
        console.log(guiones);
        return guiones;
    }

    getPalabraAdivinar() {
        var indiceAleatorio = Math.floor(Math.random() * Letters.length);
        var palabraSeleccionada = Letters[indiceAleatorio].letter;
        
        return palabraSeleccionada;
    }

    getBotonera() {
        let letras = [
            "A", "B", "C", "D", "E", "F", "G",
            "H", "I", "J", "K", "L", "M", "N",
            "Ñ", "O", "P", "Q", "R", "S", "T",
            "U", "V", "W", "X", "Y", "Z"
        ];
        let btns = [];
        btns = letras.map((l) => ({ letra: l, estado: "no-pulsado" }));
        return btns;
    }

    sePulsoBoton(i) {
        let letra = this.state.botones[i].letra;
        let botonesAux = this.state.botones;

        if (this.acertar(letra)) {
            botonesAux[i].estado = "pulsado-acertado";
            this.setState((prevState) => ({
                botones: botonesAux
            }));
        } else {
            botonesAux[i].estado = "pulsado-no-acertado";
            this.setState((prevState) => ({
                numFallos: ++(prevState.numFallos),
                botones: botonesAux
            }));
        }
    }

    componentDidUpdate(){
        if(this.state.numAciertos == this.state.palabraAdivinar.length){
          this.reiniciar();
        } 
        if(this.state.numFallos == 6){
          this.reiniciar();
        }
    }

    reiniciar(){
        let palabraHaAdivinar = this.getPalabraAdivinar();
        this.setState({
            numFallos: 1,
            numAciertos: 0,
            palabraAdivinar: palabraHaAdivinar,
            palabraAdivinada: this.getPalabraAdivinada(palabraHaAdivinar),
            botones: this.getBotonera()
        });
    }

    acertar(letra){
        let isAcierto = false;
        for(let i = 0; i < this.state.palabraAdivinar.length; i++){
            if(this.state.palabraAdivinar.charAt(i) === letra){
                this.setState((prevState) => ({
                    numAciertos: ++(prevState.numAciertos),
                    palabraAdivinada: prevState.palabraAdivinada.substr(0, i) + letra + prevState.palabraAdivinada.substr(i + 1) 
                }));
                isAcierto = true;
            }
        }
        return isAcierto;
    }

    render(){
        return(
        <div>
            <Imagen numFallos = {this.state.numFallos}/>
            <Palabra palabraAdivinada = {this.state.palabraAdivinada} />
            <Control sePulsoBoton={(i) => this.sePulsoBoton(i)} botones = {this.state.botones}/>
            
        </div>
        );
    }
}

export default Game;