import React, {useState} from 'react'

const Formulario = () =>{
    const Dados = {
        Nome: '',
        Idade: '',
        Email: ''
    }

    let {Valor, setValues} = useState(Dados)


    return(
        <div>
            <h1>Formulario</h1>
        </div>
    )
}

export default Formulario