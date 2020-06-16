import React,{useState} from 'react'


export default (props) => {

  function gerarNumeroAleatorio(min, max, array){
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return array.includes(numeroAleatorio) ? gerarNumeroAleatorio(min,max,array) : numeroAleatorio
  }

  function gerarVetor(qtd){
    const numeros = Array(qtd).fill(0).reduce((nums) => {
        const novoNumero = gerarNumeroAleatorio(1,60,nums)
        return [...nums,novoNumero]
    }, [])

    .sort((n1,n2) => n1-n2)
    return numeros
  }
  const qtd = props.qtde || 6
  const [numero,setNumero] = useState(Array(qtd).fill(0))
  
  return (
    <div>
        <h2> Mega </h2>
        <h3>{numero.join(' ')}</h3>
        <button onClick = {_ => setNumero(gerarVetor(qtd))}>Gerar Numero</button>
    </div>
  )
};
