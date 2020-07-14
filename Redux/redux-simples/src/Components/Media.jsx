import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

const Media = props => {
    const {max, min} = props
    const media = ((max+min)/2)

    return(
        <Card title = "Média dos Números" blue>
            <div >
                <span>
                    <span>Resultado: </span>
                    <strong>{media}</strong>
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


export default connect(mapStateToProps)(Media)