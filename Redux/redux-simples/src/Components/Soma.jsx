import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

const Soma = props => {
    const {min,max} = props

    const soma = (min+max)
    return(
        <Card title = "Soma dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{soma}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

export default connect(mapStateToProps)(Soma)