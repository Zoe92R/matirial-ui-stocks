import { combineReducers } from 'redux'
import { systemReducer } from './systemReducer'
import { taskReducer } from './taskReducer'


export const rootReducer = combineReducers({
    systemModule: systemReducer,
    taskModule: taskReducer,
})
