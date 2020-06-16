import React from 'react'
import DiretaFilho from './DiretaFilho'


export default props =>{
    return (
        <div>
            <DiretaFilho nome = 'Gabrielle ' idade = {23} nerd = {true} ></DiretaFilho> 
            <DiretaFilho nome = 'Maria Julia ' idade = {14} nerd = {false} ></DiretaFilho> 
        </div>
    )
}