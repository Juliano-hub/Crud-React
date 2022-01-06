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
        console.log('ID aQ:')
        console.log(IdAtual)
        if(IdAtual === ''){
            console.log(obj)
            axios.post(url, obj)
        }else{
            axios.patch(`${url}/${parseInt(obj.id)}/`, obj)
        }

        this.forceUpdate()
    }

    let[IdAtual, setIdAtual] = useState('')

    function ColocarId(e, id){
        e.preventDefault()
        console.log('ID')
        console.log(id)
        setIdAtual(id)
    }

    function Remover(IdAtual){
        console.log('ID para remover', parseInt(IdAtual) + 1)
        axios.delete(`${url}/${parseInt(IdAtual)}/`)
    }

    return(
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro</h1>
                    <p className="lead">Teste e exercício de reactJS CRUD</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <Formulario {...({AddEdit, IdAtual, DadosBanco})}/>
                </div>

                <div className="col-md-7">
                    <table className="table table-striped">

                        <thead> 
                        <tr>
                            <td>Nome</td>
                            <td>Idade</td>
                            <td>E-mail</td>
                        </tr> 
                        </thead>

                        <tbody>
                            {
                                Object.keys(DadosBanco).map(id => {
                                    return <tr>
                                        <td>{DadosBanco[id].Nome}</td>
                                        <td>{DadosBanco[id].Idade}</td>
                                        <td>{DadosBanco[id].Email}</td>

                                        <td>
                                            <a href="/" className="btn btn-primary" onClick={e => ColocarId(e, id)} >
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                        </td>

                                        <td>
                                            <a href="/" className="btn btn-primary" onClick={() => Remover(DadosBanco[id].id)}>
                                                <i className="fa fa-trash-can"></i>
                                            </a>
                                        </td>

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