import { combineReducers } from 'redux'
import { systemReducer } from './systemReducer'
import { stockReducer } from './stockReducer'


export const rootReducer = combineReducers({
    systemModule: systemReducer,
    stockModule: stockReducer,
})
