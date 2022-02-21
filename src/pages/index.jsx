import Head from "next/head";
import style from  '../../styles/Globals.module.css';
import Conteudo from "./conteudo";
import Layout from "../components/Layout";
import Navegacao from "../components/Navegacao";

function HomePage() {
  return (
    <>
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="Site de jogos..." />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Jogo teste</title>
        </Head>
      </div>
      <Layout title="Exemplo de css modularizado">
        <div className={style.roxo}>
            <h1>Mandagascar</h1>
          
        </div>

       
      </Layout>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        heightt: '100vh',
        

      }}>
        <Navegacao texto="Informações do jogo" destino="/conteudo"/>
        <Navegacao texto="Informações de investimento" destino="/outroConteudo" cor="crimson"/>
        <Navegacao texto="passando parâmentro pela URL" destino="/cliente/sp-02/321" cor="blue"/>
        <Navegacao texto="Componente com estado " destino="/estado" cor="pink"/>
        <Navegacao texto="Integração com api #1 " destino="/integracao1" cor="green"/>
        <Navegacao texto=" conteúdo estático " destino="/estatico" />

      </div>
     
    </>
  );
}

export default HomePage;
