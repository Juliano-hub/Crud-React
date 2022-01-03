import React from 'react'
import Formulario from './Formulario'

const Cadastro = () =>{
    return(
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <Formulario/>
                </div>
            </div>

        </div>
    )
}

export default Cadastro