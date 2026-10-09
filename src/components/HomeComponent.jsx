import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Seleccione una especialidad para consultar sus doctores.</p>
                {/* Link cambia de ruta sin recargar la página. */}
                <Link to="/doctores">Consultar doctores</Link>
            </div>
        );
    }
}
