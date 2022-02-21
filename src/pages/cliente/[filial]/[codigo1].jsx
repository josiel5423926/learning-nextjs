import Layout from "../../../components/Layout";
//import  router  from "next/router";//passo 1 - para acessar o valor passado pela URL
//import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ClienteProCodigo() {
  //Aqui era para aparecer o valor do código na query e o nome que eu coloquei na navegação
  //console.log(router); //passo 2 - para pegar os nome dos parâmentro para usar o passo 3

  const router = useRouter(); //Essa é a melhor maneira de apresentar os valores na tela
   /* useEffect(() =>{
        //passo 3- depois de comentar passo 1 e passo 2, importando useEffect, com os nomes coletados 
        //é possível mostrar os valores  no console depois de ir para a página

        console.log(router.query.filial); 
    },[]) */
 
  return (
    <Layout titulo=" passando parâmentro pela URL">
      <div >
        Código = {router.query.codigo1}
      </div>
      {/* //mostrando  os valores passado */}
      <div>Filial = {router.query.filial}</div>
      {/* //mostrando  os valores passado */}

      <p>Ao digitar na url os valor estado e um valor que pode ser string é <br/>
     <strong> apresentado na tela os valores</strong>
      </p>
    </Layout>
  );
}
