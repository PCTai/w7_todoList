import {ADD_JOB, SET_JOB, SET_JOBS, DELETE_JOB, DELETED_COMPLETED_JOBS} from './constants'

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
const setJobs= (payload) =>{
    return {
        type: SET_JOBS,
        payload
    }
}
const deleteCompletedJob= (payload) =>{
    return {
        type: DELETED_COMPLETED_JOBS,
        payload
    }
}

export {
    addJob, setJob, setJobs, deleteJob, deleteCompletedJob
}
