export function initVisibilityObserver() {
  const elementos = document.querySelectorAll(".invisivel");
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
      } else {
        entrada.target.classList.remove("visivel");
      }
    });
  });
  elementos.forEach((el) => observador.observe(el));
  return () => elementos.forEach((el) => observador.unobserve(el));
}