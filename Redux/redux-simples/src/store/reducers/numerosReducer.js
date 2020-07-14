import {NUM_MIN_ALTERADO,NUM_MAX_ALTERADO} from '../actions/actionTypes'


const inicialState = {
    min:7,
    max:31
}
export default function(state=inicialState, action){
    switch(action.type){
        case NUM_MIN_ALTERADO:
            return{
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return{
                ...state,
                max: action.payload
            }
        default:
            return state   
    }
}