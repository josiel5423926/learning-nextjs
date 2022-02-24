import Head from "next/head";
import style from "../../styles/Principal.module.css";
//import Conteudo from "./conteudo";
//import Layout from "../components/Layout";
import Navegacao from "../components/Navegacao";
import Image from "next/image";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
//import logo from "../img/logo.png";

function HomePage() {
  return (
    <div>
     {/*  <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
          
      >
        <TransformComponent> */}
          <div className={style.section}>
            {/* <div>
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
      </div>  */}
        
            <div className={style.top}>
              <div className={style.maxWidth}>
    
                <div className={style.topContent}>
                <Navegacao texto="Informações do jogo" destino="/conteudo"/>
                  <div className={style.text1}>Temos a solução</div>
                  <div className={style.text2}> que sua empresa precisa</div>
                  <div className={style.text3}> podemos te ajudar</div>
                </div>
              </div>
            </div>
          </div>
        {/* </TransformComponent>
      </TransformWrapper> */}
    </div>
  );
}

export default HomePage;
/**
 * <Layout title="Exemplo de css modularizado">
        <div className={style.roxo}>
            <h1>Mandagascar</h1>
          
        </div>
        <TransformWrapper initialScale={1}
        initialPositionX={200}
        initialPositionY={100}>
        <TransformComponent>
        <Image   src={"/assets/img/logo.png"}
        alt="IconDesign"
        width={1140}
        height={1140}/>
         </TransformComponent>
      </TransformWrapper>

       
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
     
 */
