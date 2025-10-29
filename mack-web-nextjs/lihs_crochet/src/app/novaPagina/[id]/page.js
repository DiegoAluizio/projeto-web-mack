"use client";

import { useParams, useSearchParams } from "next/navigation";

function NovaPagina(){
    const params = useParams();
    const searchParams = useSearchParams();

    const id = params.id;
    const titulo = searchParams.get("titulo");
    const valor = searchParams.get("valor");

    return(
        <main>
            <p>Produto {titulo}</p>
            <h1>Colocar o boneco aqui quado clicar</h1>
            <h1>Oi eu sou a nova pg</h1>
        </main>
    )

}



export default NovaPagina;