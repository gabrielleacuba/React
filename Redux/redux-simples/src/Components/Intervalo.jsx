import './Intervalo.css'
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {alterarNumeroMin} from '../store/actions/numerosActions'
import {alterarNumeroMax} from '../store/actions/numerosActions'


function Intervalo  (props){
    const {min,max} = props

    return(
        <Card title = "Intervalo de Números">
            <div className = 'Intervalo'>
                <span>
                    <span>Minimo</span>
                    <input type = 'number' value = {min}
                     onChange ={e => props.alterarMinimo(+e.target.value)} /> 
                </span>
                <span>
                    <span>Maximo</span>
                    <input type = 'number' value = {max} 
                     onChange = { e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

function mapDispachToProp(dispach){
    return{
        alterarMinimo(novoNumero){
            const action = alterarNumeroMin(novoNumero)
            dispach(action)
        },
        alterarMaximo(novoNumero){
            const action = alterarNumeroMax(novoNumero)
            dispach(action)
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispachToProp,)(Intervalo)
