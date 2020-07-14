import {createStore, combineReducers} from 'redux'
import { act } from 'react-dom/test-utils'

import numerosReducer from './reducers/numerosReducer'

const reducers = combineReducers({
    numeros: numerosReducer,

})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig