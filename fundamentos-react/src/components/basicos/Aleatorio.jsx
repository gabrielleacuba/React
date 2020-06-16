import React from "react";

export default (props) => {
  const num = Math.floor(Math.random() * (props.numMax - props.numMin + 1) + props.numMin);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>
        <strong>Num max: {props.numMax}</strong>
      </h3>
      <h3>
        <strong>Num min: {props.numMin}</strong>
      </h3>
      <h3>
        <strong>Número sorteado: {num}</strong>
      </h3>
    </div>
  );
};
