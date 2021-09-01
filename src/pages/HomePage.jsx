import React, { useEffect } from 'react'
import { TaskList } from '../cmps/TaskList.jsx'
import { loadTasks } from '../store/actions/taskAction.js'
import { useDispatch, useSelector } from 'react-redux'

export const HomePage  = () =>{

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.taskModule.tasks)
    const isLoading = useSelector(state => state.systemModule.isLoading)


    useEffect(() => {
        dispatch(loadTasks())
        return () => {
        }
    }, [])


        if (isLoading) return <div>Loading...</div>
        return (
                <TaskList tasks={tasks} />
        )
    
}

