export default function Home() {
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
        <div id="carrossel_produtos"></div>
      </section>

      <section id="destaque" className="invisivel">
        <h1>Os Mais Fofos do Site</h1>
        <div id="carrossel_destaque" className="invisivel"></div>
      </section>

      <section id="comentarios" className="invisivel">
        <h1>Veja o que estão falando de nós</h1>
        <div id="carrossel_comentarios" className="invisivel"></div>
      </section>

      <footer>
        <p>Projeto em fase de desenvolvimento @Lih&apos;s Crochet</p>
      </footer>
    </main>
  );
}