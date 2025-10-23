import React from 'react'

const comentarios = [
  { titulo: 'Ótimo produto', comentario: 'Amei!', usuario: 'João' },
  { titulo: 'Muito bom', comentario: 'Recomendo a todos', usuario: 'Maria' },
  { titulo: 'Excelente', comentario: 'Superou expectativas', usuario: 'Pedro' },
];

function CarrosselComentarios(){
 return (
    <div id="carrossel_comentarios">
      {comentarios.map((comentario, index) => (
        <div key={index}>
          <h2>{`${comentario.titulo} ${index + 1}`}</h2>
          <p>{comentario.comentario}</p>
          <h3>{comentario.usuario}</h3>
        </div>
      ))}
    </div>
  );
}

export default CarrosselComentarios;