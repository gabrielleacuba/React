import produtos from '../../datas/Produtos'
import React from 'react'
import './TabelaProdutos.css'

export default props =>{

    function getProdutos(){
        return produtos.map((produto,i) => {
            return(
            <tr key = {produto.id} className = {i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
            )
        })
    }

    
    return(
        <div className = 'TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td><strong>NOME</strong></td>
                        <td><strong>PREÇO</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {getProdutos()}
                </tbody>
            </table>
        </div>
    )
}