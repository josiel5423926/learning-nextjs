import Layout from "../components/Layout";
//função para parar de dá erro no console
//e a gerção de número vai ser gerado depois do billd
export async function getStaticProps(){
    return{
        props:{
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    return(
        <Layout titulo="Conteúdo estático">
            <div>{props.numero}</div>
        </Layout>
    )
}

