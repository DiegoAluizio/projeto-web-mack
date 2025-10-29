import styles from './CarrosselDestaque.module.css';
import React from "react";


const destaques = 
    [{ titulo: 'Crochet Bonito', img: '/assets/img_placeholder.png', alt: 'imagem', valor: 220 },
     { titulo: 'Crochet Bonito', img: '/assets/img_placeholder.png', alt: 'imagem', valor: 220 },
    ]


export default function CarrosselDestaque() {
  return (
      <div className={styles.carrossel_destaque}>
      {destaques.map((card, index) => (
        <div key={index} className={styles.card_destaque}>
          <img src={card.img} alt={card.alt} />
          <h2>{`${card.titulo} ${index + 1}`}</h2>
          <p>De R${card.valor}</p>
        </div>
      ))}
    </div>
  );
}