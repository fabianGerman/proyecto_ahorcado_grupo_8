import React, {Component} from "react";

class Imagen extends Component{
    constructor(props){
        super(props);
        this.getNombreImagen = this.getNombreImagen.bind(this);
    }

    getNombreImagen(){
        return "ImgAhorcado/"+this.props.numFallos+".jpg";
    }

    render(){
        return(
            <img src={this.getNombreImagen()} alt="AHORCADO" />
        );
    }
}

export default Imagen;