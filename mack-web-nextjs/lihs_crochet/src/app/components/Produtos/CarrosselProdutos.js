// import NovaPagina from '@/app/novaPagina[id]/page';
"use client"
import Link from "next/link";
import styles from './CarrosselProdutos.module.css';
import React from "react";
import { useEffect, useState } from "react";
//Fazer Fetch


function CarrosselProdutos ( ){
    const [card, setCard ] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8000/produto/')
            .then((res) => res.json())
            .then((data) => {
                setCard(data);
        });
    }, []);

    return (
        <div className={styles.carrossel_produtos}>
        {
            card.map((produto, index) => (
                <div key={index} className={styles.card_produto}>
                    <img src={produto.link} ></img>
                    <Link key={index} href={{ pathname: `/novaPagina/${index}`, query: { titulo: produto.titulo, valor: produto.valor, link: produto.link }}} className={styles.link}>
                        <h2>{`${produto.titulo}`}</h2>
                    </Link>
                    <p>{produto.valor}</p>
                </div>
          
        ))}
      </div>
  );
}

export default CarrosselProdutos