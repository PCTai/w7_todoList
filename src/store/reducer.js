import {ADD_JOB, SET_JOB, SET_JOBS, DELETE_JOB, DELETED_COMPLETED_JOBS} from '../constants'
const initState= {
    jobs: [
        {
            id:1,
            completed: false,
            name: "code todolist"
        },
        {
            id:2,
            completed: false,
            name: "bt week 6"
        }
    ]
}

const reducer= (state, action) =>{
    console.log('action :',action.payload)
    switch (action.type) {
        case ADD_JOB:{
            return {
                ...state,
                jobs: [...state.jobs, {
                    id: state.jobs.length +1,
                    completed: false,
                    name: action.payload
                }]
            }
        }
        case DELETE_JOB:{
            
            return {
                ...state,
                jobs: state.jobs.filter(job => job.id!== action.payload)
            }
        }
        default:
            return state;
    }
}

export default reducer;
export {initState}