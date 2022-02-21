import Navegacao from "../components/Navegacao";
import Link from "next/link";
import Layout from "../components/Layout";
import Cabecalho from "../components/cabecalho";

export default function Conteudo() {
  return (
    <>
      <Layout>
        <Cabecalho titulo="Infomações do jogo!" />
        <Link href="/"> Tela Inicial </Link>
          <p>
            Um dia descobrimos que beijar uma pessoa para esquecer outra é
            bobagem. Você não só não esquece a outra pessoa como pensa muito
            mais nela... Um dia nós percebemos que as mulheres têm instinto
            "caçador" e fazem qualquer homem sofrer... Um dia descobrimos que se
            apaixonar é inevitável... Um dia percebemos que as melhores provas
            de amor são as mais simples... Um dia percebemos que o comum não nos
            atrai... Um dia saberemos que ser classificado como "bonzinho" não é
            bom... Um dia perceberemos que a pessoa que nunca te liga é a que
            mais pensa em você... Um dia percebemos que somos muito importante
            para alguém, mas não damos valor a isso... Um dia percebemos como
            aquele amigo faz falta, mas ai já é tarde demais... Enfim... Um dia
            descobrimos que apesar de viver quase um século esse tempo todo não
            é suficiente para realizarmos todos os nossos sonhos, para beijarmos
            todas as bocas que nos atraem, para dizer o que tem de ser dito... O
            jeito é: ou nos conformamos com a falta de algumas coisas na nossa
            vida ou lutamos para realizar todas as nossas loucuras...
          </p>
       
      </Layout>
    </>
  );
}