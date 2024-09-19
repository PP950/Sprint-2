import {useRef, useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { LoginStyle } from "../css/Loginstyle";
import Imagem from '../assets/Login.jpg'
const Login=()=>{
    
    //Hook- useRef guarda o elemento ou referencia
    const usuario = useRef();
    const senha = useRef();

    //Hook- useState manipula o estado da variavel
    const [usuarios, setUsuarios] = useState([]);
    
    //Hook- useNavigate redireciona para um componente
    const navigate = useNavigate();

    //função de validação
    function validade(){
        for(let i=0; i< usuarios.length; i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){
                return true;
            }
        }
    }

    //Função handleSubmit
    const handleSubmit=(e)=>{
        //Previne que a pagina faça qualquer alteração
        e.preventDefault();

        if(validade()){
            let token=
            Math.random().toString(16).substring(2)+
            Math.random().toString(16).substring(2)
            sessionStorage.setItem("usuario",usuario.current.value);
            sessionStorage.setItem("senha", token)
            navigate("/")
            

        }else{
            alert("Usuario/senha inválidos")
        }
    }

    //Hook- useEffect Pagina executa o Login
    useEffect(()=>{
        //vai na api e tras os dados a partir do url
        fetch("http://localhost:9595/usuarios/")
        //Promessa
        .then((res)=>{
            return res.json();
        })
        //Receber as alterações
        .then((res)=>{
            setUsuarios(res)
        })
        //Retorna Array vazio
    },[])

    return(
        <LoginStyle>
        <section className="container">
            <div className="container-login">
                <div className="login">
                    <form className="login-form" onSubmit={handleSubmit}>
                         <span className="titulo-login">Faça seu Login</span>
                         

                         <div className="w-input">
                            <input
                            type="text"
                            className="input-form"
                            id="usuario"
                            ref={usuario}
                            />
                         </div>

                         <div className="w-input">
                            <input
                            type="password"
                            className="input-form"
                            id="senha"
                            ref={senha}
                            />
                         </div>

                         <div className="login-btn">
                            <button type="submit" className="login-form-btn">Login</button>
                         </div>

                         <ul className="utilidades">
                            <li>
                                <span className="text1">Esqueçeu sua senha ?</span>
                            </li>
                            <li>
                                <span className="text1">Não possui conta ?</span>
                                <Link to="/usuario">Criar</Link>
                            </li>
                         </ul>
                    </form>
                </div>
                <img src={Imagem} alt="logo imagem"/>
            </div>
        </section>
        </LoginStyle>
    )
}
export default Login