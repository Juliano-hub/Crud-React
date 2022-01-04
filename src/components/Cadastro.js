import React from 'react'
import axios from 'axios'
import Formulario from './Formulario'

const Cadastro = () =>{

    const AddEdit = obj =>{
        console.log(obj)
        axios.post('http://localhost:3000/Cadastro', obj)
    }

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
                    <Formulario AddEdit= {AddEdit}/>
                </div>
                <div>
                    <h2>Lista de cadastros</h2>
                </div>
            </div>

        </div>
    )
}

export default Cadastro