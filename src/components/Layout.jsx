import Link from "next/link";
import style from "../../styles/Layout.module.css";

export default function Layout(props) {
  console.log(props);
  return (
    
      <div className={style.Layout}>
        <div className={style.cabecalho}>
        <h1>  {props.titulo ?? 'Mais um exemplo'}</h1>
        <Link href="/"> Voltar</Link>

        </div>
        <div className={style.conteudot}>
        {props.children}

        </div>
      </div>
  
  );
}
