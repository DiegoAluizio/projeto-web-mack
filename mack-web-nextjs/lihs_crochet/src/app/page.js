"use client";
import { useEffect } from "react";
import { initVisibilityObserver } from "./components/utils/visibilidade";

import CarrosselComentarios from "./components/CarrosselComentarios";
import CarrosselProdutos from "./components/CarrosselProdutos";
import CarrosselDestaque from "./components/CarrosselDestaques";


export default function Home() {
  // Isso aqui é só pra animação do visivel - Invisivel
      useEffect(() => {
          const cleanup = initVisibilityObserver();
          return cleanup;
  }, []);


  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>Início</li>
            <li>Catálogo</li>
            <li>Sobre a loja</li>
          </ul>
        </nav>
      </header>
      <section id ="corpo">
        <section id="banner">
          <section id="texto">
            <h1>TRANSFORME O SEU PERSONAGEM FAVORITO EM</h1>
            <h2 className="titulo-croche">
              <span>C</span>
              <span>R</span>
              <span>O</span>
              <span>C</span>
              <span>H</span>
              <span>E</span>
              <span>T</span>
              <span>!</span>
              <span>!</span>
              <span>!</span>
            </h2>
          </section>

          <div id="img-holder">
            <img src="/assets/jinx_crochet.jpeg" alt="Jinx de crochê" />
          </div>
        </section>

        <section id="produtos" className="invisivel">
          <h1>Personalize do jeito que quiser</h1>
          <CarrosselProdutos/>
        </section>

        <section id="destaque" className="invisivel">
          <h1>Os Mais Fofos do Site</h1>
          <CarrosselDestaque/>
        </section>
        
  
        <section id="comentarios" className="invisivel">
          <h1>Veja o que estão falando de nós</h1>
            <CarrosselComentarios/>
        </section>
      </section>
      <footer>
        <p>Projeto em fase de desenvolvimento @Lih's Crochet</p>
      </footer>
    </main>
  );
}
