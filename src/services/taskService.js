import { storageService } from './asyncStorageService'
// import { httpService } from './httpService'

// const gTasks = require('../data/tasks.json')

// const gTasks = [
//     {
//         "_id": "c101",
//         "title": "Replace logo",
//         "status": 'in progress',
//         "isComplated": false
//     },
//     {
//         "_id": "c102",
//         "title": "Add Samples",
//         "status": "completed",
//         "isComplated": true
//     },
//     {
//         "_id": "c103",
//         "title": "Add about page",
//         "status": "to do",
//         "isComplated": false

//     }
// ]

const gTasks = [
    {
        "XPR": [
            {
                "_id": "1",
                "first": "XRPAUD",
                "second": "1.55",
                "third": "-0.57%",
                "fourth": "121.8K",
                "star": false
            },
            {
                "_id": "2",
                "first": "XRPBTC",
                "second": "0.00002354",
                "third": "+0.43%",
                "fourth": "824.6K",
                "star": false
            },
            {
                "_id": "3",
                "first": "XRPEUR",
                "second": "0.9560",
                "third": "-0.35%",
                "fourth": "6.450M",
                "star": true
            },
            {
                "_id": "4",
                "first": "XRPAUD",
                "second": "1.55",
                "third": "-0.57%",
                "fourth": "121.8K",
                "star": false
            },
            {
                "_id": "5",
                "first": "XRPAUD",
                "second": "1.55",
                "third": "-0.57%",
                "fourth": "121.8K",
                "star": false
            },
            {
                "_id": "6",
                "first": "XRPAUD",
                "second": "1.55",
                "third": "-0.57%",
                "fourth": "121.8K",
                "star": false
            },
            {
                "_id": "8",
                "first": "XRPAUD",
                "second": "1.55",
                "third": "-0.57%",
                "fourth": "121.8K",
                "star": false
            }
        ]
    },
    {
        "BCH": [
            {
                "_id": "9",
                "first": "XRPAUD",
                "second": "1.55",
                "third": "-0.57%",
                "fourth": "121.8K",
                "star": false
            },
            {
                "_id": "10",
                "first": "XRPAUD",
                "second": "1.55",
                "third": "-0.57%",
                "fourth": "121.8K",
                "star": false
            },
        ]
    },
]

const STORAGE_KEY = 'STOCK'

export const taskService = {
    query,
    getTaskById,
    remove,
    save
}


async function query(filterBy = {}) {
    let tasks
    try {
        // return await httpService.get('task')
        tasks = await storageService.query(STORAGE_KEY, gTasks)
        console.log(tasks, 'storageService.query(STORAGE_KEY')
        return tasks

    } catch (err) {
        console.log(err, 'err')
        throw err
    }

}

async function getTaskById(taskId) {
    //   return await httpService.get(`task/${TaskId}`)

    const res = await storageService.get(STORAGE_KEY, taskId)
    console.log('get task by id in service', res, taskId);
    return res
}

async function remove(taskId) {
    //   return await httpService.delete(`task/${taskId}`)
    await storageService.remove(STORAGE_KEY, taskId)
    return Promise.resolve()
}
async function save(task) {
    if (task._id) {
        //    return await httpService.put(`task/${task._id}`,task)
        return await storageService.put(STORAGE_KEY, task)
    }
    else {
        //   return await httpService.post('task',task)
        return await storageService.post(STORAGE_KEY, task)
    }
    // const res = await storageService.put(STORAGE_KEY, task)
    // return res
}