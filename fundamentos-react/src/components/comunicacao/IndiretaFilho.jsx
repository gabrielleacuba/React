import React from "react";

export default (props) => {

    const gerarIdade = () => Math.floor(Math.random() * (20 + 1) + 50);

  return (
    <div>
      <div>Filho</div>
      <button onClick={
          function (e){
              props.clicar('Cuba',gerarIdade(), true)
          }
      }>
          Enviar Informações
      </button>
    </div>
  ); 
};
