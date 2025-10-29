// import NovaPagina from '@/app/novaPagina[id]/page';
import Link from "next/link";
import styles from './CarrosselProdutos.module.css';
import React from "react";


const card = 
    [{id:1, titulo: 'Crochet Bonito', img: 'assets/img_placeholder.png', alt: 'imagem', valor: 'R$220' },
     {id:2, titulo: 'Crochet Bonito', img: 'assets/img_placeholder.png', alt: 'imagem', valor: 'R$220' },
     {id:3, titulo: 'Crochet Bonito', img: 'assets/img_placeholder.png', alt: 'imagem', valor: 'R$220' }
    ]


function CarrosselProdutos ( ){
    return (
        <div className={styles.carrossel_produtos}>
        {
            card.map((produto, index) => (

            
                <div key={index} className={styles.card_produto}>
                    <img src={produto.img} ></img>
                    <Link key={index} href={{ pathname: `/novaPagina/${index}`, query: { titulo: produto.titulo, valor: produto.valor }}} className={styles.link}>
                        <h2>{`${produto.titulo} ${index + 1}`}</h2>
                    </Link>
                    <p>{produto.valor}</p>
                </div>
          
        ))}
      </div>
  );
}

export default CarrosselProdutos