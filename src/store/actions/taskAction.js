import { taskService } from "../../services/taskService.js"



export function loadTasks() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const tasks = await taskService.query()
            dispatch({ type: 'SET_TASKS', tasks })
        } catch (err) {
            console.log('taskActions: err in load tasks', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}


export function loadTask(taskId) {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const task = await taskService.getTaskById(taskId) // get by id in the service
            // console.log( 'task in load task action',task)
            dispatch({ type: 'SET_TASK', task })
        } catch (err) {
            console.log('taskActions: err in load task', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }

    }
}

export function resetTask() {
    return async dispatch => {
        try {
            dispatch({ type: 'RESET_TASK' })
        } catch (err) {
            console.log('taskActions: err in load task', err)
        }
    }
}

export function removeTask(taskId) {
    return async dispatch => {
        try {
            await taskService.remove(taskId)
            dispatch({ type: 'REMOVE_TASK', taskId })
        } catch (err) {
            console.log('taskActions: err in removeTask', err)
        }
    }
}

export function saveTask(task) {
    // console.log('save task in task.action')
    const type = task._id ? 'UPDATE_TASK' : 'ADD_TASK'
    return async dispatch => {
        try {
            await taskService.save(task)
            dispatch({ type, task })
        } catch (err) {
            console.log('taskActions: err in save tasks', err)
        }
    }
}