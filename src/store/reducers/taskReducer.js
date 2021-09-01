const initialState = {
    tasks: [],
    currTask: null
}

export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TASKS':
            return { ...state, tasks: action.tasks }
        case 'SET_TASK':
            return { ...state, currTask: action.task }
        case 'RESET_TASK':
            return { ...state, currTask: null }
        case 'ADD_TASK':
            return { ...state, tasks: [action.task, ...state.tasks] }
        case 'UPDATE_TASK':
            return { ...state, tasks: [action.task, ...state.tasks.filter(task => action.task._id !== task._id)] }
        case 'REMOVE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task._id !== action.taskId) }
        default:
            return state
    }
}