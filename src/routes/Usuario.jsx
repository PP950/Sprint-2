import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Usuario=()=>{
    /*Hook- useParams Recebe parametros pela rota*/
    let {id} =useParams();

    /*Hook- useState manipula o estado da variavel */
    const [usuarios,setUsuarios]=useState({
        id,
        usuario:'',
        senha:''
    });

    /*Hook- useNavigate redireciona para outro componente*/
    const navigate = useNavigate();

    /*Função handlechange */
    const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]: e.target.value});
    }

    /*variavel method para post*/
    let metodo = "post"
    if(id){
        metodo="put"
    }

    /*Função handleSubmit*/
    const handleSubmit=(e)=>{
        /*Previne alteração na pagina*/
        e.preventDefault();

    fetch(`http://localhost:9595/usuarios/${id ? id: ''}`,{
        method: metodo,
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),
        //Promessa
    }).then(()=>{
        //Direciona para o componente
        navigate("/usuario");
    })
    }
    
    return(
        <section className="usuario">
            <h1>Cadastro de Usuários</h1>
            <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   name="usuario"
                   value={usuarios.usuario}
                   placeholder="Digite seu Usuário"
                   onChange={handleChange}
                />

                 <input
                   type="password"
                   name="senha"
                   value={usuarios.senha}
                   placeholder="Digite sua senha"
                   onChange={handleChange}
                />
                <button type="submit">Cadastrar</button>
                <Link to="/usuario">
                  <IoIosCloseCircleOutline />
                </Link>

            </form>
        </section>
    )




}   
export default Usuario