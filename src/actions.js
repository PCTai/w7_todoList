import {ADD_JOB, SET_JOB, SET_COMPLETED_JOBS, DELETE_JOB, DELETED_COMPLETED_JOBS, SET_FILTER} from './constants'

const addJob= (payload) =>{
    return {
        type: ADD_JOB,
        payload
    }
}
const setJob= (payload) =>{
    return {
        type: SET_JOB,
        payload
    }
}
const deleteJob= (payload) =>{
    return {
        type: DELETE_JOB,
        payload
    }
}
const setCompletedJobs= (payload) =>{
    return {
        type: SET_COMPLETED_JOBS,
        payload
    }
}
const deleteCompletedJob= (payload) =>{
    return {
        type: DELETED_COMPLETED_JOBS,
        payload
    }
}
const setFilter= (payload) =>{
    return {
        type: SET_FILTER,
        payload
    }
}

export {
    addJob, setJob, setCompletedJobs, deleteJob, deleteCompletedJob, setFilter
}
