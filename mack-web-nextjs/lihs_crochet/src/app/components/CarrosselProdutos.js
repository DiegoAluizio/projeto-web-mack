import React from "react";


const card = 
    [{ titulo: 'Crochet Bonito', img: 'assets/img_placeholder.png', alt: 'imagem', valor: 'R$220' },
     { titulo: 'Crochet Bonito', img: 'assets/img_placeholder.png', alt: 'imagem', valor: 'R$220' },
     { titulo: 'Crochet Bonito', img: 'assets/img_placeholder.png', alt: 'imagem', valor: 'R$220' }
    ]


function CarrosselProdutos (){
    return (
        <div id="carrossel_produtos">
        {
            card.map((produto, index) => (
                <div key={index} className="card_produto">
                    
                    <img src={produto.img} ></img>
                    <h2>{`${produto.titulo} ${index + 1}`}</h2>
                    <p>{produto.valor}</p>
                </div>
        ))}
      </div>
  );
}

export default CarrosselProdutos