"use client";
import styles from './page.module.css';
import { useParams, useSearchParams } from "next/navigation";

function NovaPagina(){
    const params = useParams();
    const searchParams = useSearchParams();

    const id = params.id;
    const titulo = searchParams.get("titulo");
    const valor = searchParams.get("valor");

    return(
        <main className = {styles.container}>
            <h1>Produto {titulo}</h1>
            <img src = '/assets/img_placeholder.png'/>
          <h2>Valor {valor}</h2>
        </main>
    )

}



export default NovaPagina;