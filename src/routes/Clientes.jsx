import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4343/clientes/`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setClientes(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <section className="clientes">
                <h2>Listar Clientes Cadastrados</h2>
                <Link to="/cadastrarclientes">Cadastrar novo cliente</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default Clientes;
