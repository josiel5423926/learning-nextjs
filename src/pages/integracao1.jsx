import Layout from "../components/Layout";
import { useState } from "react";

export default function Integracao() {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState(1);

  async function obterCLiente() {
    const resp = await fetch(`http://localhost:3000/api/clientes/999${codigo}`);
    const dados = await resp.json();
    setCliente(dados);

    //outra forma de buscar os dados
    /* 
    fetch(`http://localhost:3000/api/clientes/999${codigo}`)
      .then((resp) => resp.json())
      .then((dados) => setCliente(dados)); */
  }

  return (
    <Layout titulo="Consumindo dados da api">
      <div
      //Ao clicar no botão vai chamar afunção  obterCliente que vai trazer as informações da api
      >
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />

        <button onClick={obterCLiente}>Obter Cliente</button>
      </div>
      <ul>
        <li
          style={{
            padding: "20px ",
            margin: "12px",
          }}
        >
          Código:{cliente.Id}
        </li>

        <li
          style={{
            padding: "20px ",
            margin: "12px",
          }}
        >
          Nome:{cliente.nome}
        </li>
        <li
          style={{
            padding: "20px ",
            margin: "12px",
          }}
        >
          Email:{cliente.email}
        </li>
      </ul>
    </Layout>
  );
}
