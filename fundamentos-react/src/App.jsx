import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Produtos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/Usuarioinfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from './components/Mega/Mega';

export default () => (
  <div className="App">
    <h1>Fundamentos JSX (Arrow Function)</h1>

    <div className="Cards">
      <Card titulo=" #12 - Mega" color="#696969">
        <Mega></Mega>
      </Card>
      <Card titulo=" #11 - Contador" color="#b3e6ff">
        <Contador numeroInicial = {10}></Contador>
      </Card>
      <Card titulo=" #10 - Input" color="#001a66">
        <Input></Input>
      </Card>
      <Card titulo=" #09 - Comunicação Indireta" color="#663300">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo=" #08 - Comunicação Direta" color="#9966ff">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo=" #07 - Renderização Condicional" color="#ffad33">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Gabrielle" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: "gabrielle@gmail.com" }}></UsuarioInfo>
      </Card>
      <Card titulo=" #06 - Produtos" color="#7CFC00">
        <Produtos></Produtos>
      </Card>
      <Card titulo=" #05 - Repetição" color="#b30000">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo=" #04 - Componentes com filhos" color="#cc00cc ">
        <Familia sobrenome="Almeida Cuba">
          <FamiliaMembro nome="Gabrielle" />
          <FamiliaMembro nome="Gustavo" />
          <FamiliaMembro nome="Maria Julia" sobrenome="Oswaldo" />
        </Familia>
      </Card>
      <Card titulo="#03 - Desafio Aleatório" color="#1ABC9C ">
        <Aleatorio
          titulo="Número sorteado aleatoriamente"
          numMax={10}
          numMin={1}
        />
      </Card>
      <Card titulo="#02 -Com Parametro" color="#ff1a75">
        <ComParametro
          titulo="Primeiro Componente titulo"
          aluno="Gabrielle"
          nota={10}
        />
      </Card>

      <Card titulo="#01 - Primeiro" color="#ff8000">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
