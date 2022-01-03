import React, {useState} from 'react'

const Formulario = () =>{
    const Dados = {
        Nome: '',
        Idade: '',
        Email: ''
    }

    let {values, setValues} = useState(Dados)

    const ReceiveInput = e =>{
        let {Nome, value} = e.target

        setValues({
            ...values,
            [Nome]: value
        })
    }

    const EnviarInput = e =>{
        e.preventDefault()
    }

    return(
        <form autoComplete="off" onSubmit="{EnviarInput}">
        
            {/* Campo nome */}
            <div className="row">
                <div className="form-group input-group mb-3">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            {/* Ícone do cdnjs font-awesome */}
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <label for="Idade">Nome:</label>
                    <input type="text" className="form-control" placeholder="Digite seu nome" name="Campo Nome" value={values.Nome} 
                    onChange={ReceiveInput}/>
                </div>
            </div>

            {/* Campo idade */}
            <div className="row">
                <div className="form-group input-group mb-3">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">   
                            <i className="far fa-address-book"></i>
                        </div>
                    </div>
                    <label for="Idade">Idade:</label>
                    <input type="date" className="form-control" name="Campo Idade" value={values.Idade} 
                    onChange={ReceiveInput}/>
                </div>
            </div>

            {/* Campo email */}
            <div className="row">
                <div className="form-group input-group mb-3">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope-square"></i>
                        </div>
                    </div>
                    <label for="Idade">E-mail:</label>
                    <input type="email" className="form-control" placeholder="exemplo@gmail.com" name="Campo Email" value={values.Email} 
                    onChange={ReceiveInput}/>
                </div>
            </div>

        </form>
    )
}

export default Formulario