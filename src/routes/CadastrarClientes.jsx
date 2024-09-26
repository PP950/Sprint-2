import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CadastrarCliente = () => {
    const [clientes, setClientes] = useState([]);
    const nome = useRef(null);
    const email = useRef(null);
    const telefone = useRef(null);

    useEffect(() => {
        fetch("http://localhost:4343/clientes")
            .then((res) => res.json())
            .then((data) => {
                setClientes(data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoCliente = {
            nome: nome.current.value,
            email: email.current.value,
            telefone: telefone.current.value,
        };

        // Enviando o novo cliente para o backend
        fetch("http://localhost:4343/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoCliente),
        })
            .then((res) => res.json())
            .then((data) => {
                // Atualiza a lista de clientes com o novo cliente cadastrado
                setClientes((prevClientes) => [...prevClientes, data]);
            })
            .catch((err) => console.error("Erro ao cadastrar cliente:", err));
    };

    return (
        <section className="container">
            <div className="container-login">
                <div className="login">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <span className="titulo-login">Cadastrar Cliente</span>

                        <div className="w-input">
                            <input
                                type="text"
                                className="input-form"
                                id="nome"
                                ref={nome}
                                placeholder="Nome"
                                required
                            />
                        </div>

                        <div className="w-input">
                            <input
                                type="email"
                                className="input-form"
                                id="email"
                                ref={email}
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="w-input">
                            <input
                                type="text"
                                className="input-form"
                                id="telefone"
                                ref={telefone}
                                placeholder="Telefone"
                                required
                            />
                        </div>

                        <div className="login-btn">
                            <button type="submit" className="login-form-btn">Cadastrar</button>
                            <Link to="/clientes">voltar</Link>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CadastrarCliente;
