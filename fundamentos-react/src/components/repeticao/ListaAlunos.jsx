import alunos from "../../datas/Alunos";
import React from "react";

export default (props) => {
  const lis = alunos.map((aluno) => {
    return (
      <li key = {aluno.id}>
        {aluno.id} {')'} {aluno.nome} {"->"} {aluno.nota}{" "}
      </li>
    );
  });

  return (
    <div>
      <ul style= {{listStyle: 'none'}}>
          {lis}
      </ul>
    </div>
  );
};
