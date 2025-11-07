"use client"
import styles from './CarrosselDestaque.module.css';
import React from "react";
import { useEffect, useState } from "react";

// const destaques = 
//     [{ titulo: 'Crochet Bonito', img: '/assets/img_placeholder.png', alt: 'imagem', valor: 220 },
//      { titulo: 'Crochet Bonito', img: '/assets/img_placeholder.png', alt: 'imagem', valor: 220 },
//     ]


export default function CarrosselDestaque() {
    const [card, setCard ] = useState([]);
        
    useEffect(() => {
          fetch('http://localhost:8000/destaque/')
              .then((res) => res.json())
              .then((data) => {
                  setCard(data);
            });
      }, []);

  return (
      <div className={styles.carrossel_destaque}>
      {card.map((produto, index) => (
        <div key={index} className={styles.card_destaque}>
          <img src={produto.link} alt={produto.alt} />
          <h2>{`${produto.titulo}`}</h2>
          <p>De R${produto.valor}</p>
        </div>
      ))}
    </div>
  );
}