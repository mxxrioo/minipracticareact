import global from '../Global';
import React, { Component } from 'react';
import axios from 'axios';

export default class DoctoresEspecialidad extends Component {
    selectedEspecialidad = React.createRef();
    urlDoctores = global.urlDoctores + "api/Doctores/Especialidad/";

    state = {
        especialidades: [],
        doctores: [],
        idEspecialidad: 0
    }

    loadEspecialidades = () => {

        let request = "/api/Especialidades";
        axios.get(this.urlDoctores + request).then(response => {
            console.log("Leyendo especialidades: ", response.data);
            this.setState({
                especialidades: response.data
            });
        }).catch(error => {
            console.log("Error leyendo especialidades: ", error);
        });
    }

    componentDidMount() {
        this.loadEspecialidades();
    }

    buscarDoctores = (event) => {

        event.preventDefault();

        let id = this.selectedEspecialidad.current.value;
        this.setState({
            idEspecialidad: id,
            doctores: []
        });

        if (id > 0) {
            this.loadDoctores(id);
        }
    }

    loadDoctores = (id) => {

        let request =  "api/Doctores/Especialidad/" + id;

        axios.get(this.urlDoctores + request).then(response => {
            console.log("Leyendo doctores: ", response.data);
            this.setState({
                doctores: response.data
            });
        }).catch(error => {
            console.log("Error leyendo doctores: ", error);
        });
    }

    render() {
        return (
        <div>
            <h1>Lista Docototres</h1>
            <form>
                <label>Seleccione especialidads: </label>
                <select ref={this.selectedEspecialidad}>
                    {
                        this.state.especialidades.map((esp, index) => {
                            return (<option key={index} value={esp.idEspecialidad}>
                                {esp.nombre}
                            </option>)
                        })
                    }
                </select>
                <button onClick={this.buscarDoctores}>
                    Buscar doctores
                </button>
            </form>            
            {
                this.state.idEspecialidad != 0 &&
                (<DoctoresComponent idespecialidad={this.state.idEspecialidad}/>)
            }
        </div>
        
        )
    }
}
