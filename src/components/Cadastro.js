import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Formulario from './Formulario'

const Cadastro = () =>{

    const url = 'http://localhost:3000/Cadastro'

    let[DadosBanco, setDadosBanco] = useState({})

    useEffect(() =>{
        const axiosBD = async () =>{
            const response = await axios(url)
            setDadosBanco(response.data)
        }
        axiosBD()
    }, [])

    const AddEdit = obj =>{
        console.log(obj)
        axios.post(url, obj)
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

                <div className="col-md-7">
                    <table className="table table-striped">

                        <thead>
                            <td>Nome</td>
                            <td>Idade</td>
                            <td>E-mail</td>
                        </thead>

                        <tbody>
                            {
                                Object.keys(DadosBanco).map(id => {
                                    return <tr>
                                        <td>{DadosBanco[id].Nome}</td>
                                        <td>{DadosBanco[id].Idade}</td>
                                        <td>{DadosBanco[id].Email}</td>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default Cadastro