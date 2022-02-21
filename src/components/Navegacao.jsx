import Link from "next/link";
import style from "../../styles/Navegacao.module.css";

export default function Navegacao(props){
    return(
        <Link href={props.destino}  >
             <div className={style.Navegacao} style={{
                 backgroundColor: props.cor ?? 'dodgerblue'
             }}>
                 {props.texto}
            </div>
             
        </Link>
    );    
}