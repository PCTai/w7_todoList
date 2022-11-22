import {ADD_JOB, SET_JOB, SET_COMPLETED_JOBS, DELETE_JOB, DELETED_COMPLETED_JOBS, SET_FILTER} from '../constants'
const initState= {
    jobs: [
        {
            id:1,
            completed: false,
            name: "code todolist"
        },
        {
            id:2,
            completed: true,
            name: "bt week 6"
        }
    ],
    filter: 'all',
    filters: {
        all: () => true,
        active: (job) => !job.completed,
        completed : (job)=> job.completed 
    }

}

const reducer= (state, action) =>{
    // console.log('action :',action.payload)
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
        case SET_JOB:{
            if(action.payload.value){
                return {
                    ...state,
                    jobs: state.jobs.map(job => {
                        if(job.id=== action.payload.id){
                            return {
                                ...job,
                                name: action.payload.value
                            }
                        }
                        return job;
                    })
                }
            }
            return {
                ...state,
                    jobs: state.jobs.map(job => {
                        if(job.id=== action.payload.id){
                            return {
                                ...job,
                                completed: action.payload.completed
                            }
                        }
                        return job;
                    })
            }
        }
        case SET_COMPLETED_JOBS:{
            
            return {
                ...state,
                jobs: state.jobs.map(job =>({...job, completed: true}))
            }
        }
        case SET_FILTER:{
            
            return {
                ...state,
                filter:action.payload
            }
        }
        case DELETED_COMPLETED_JOBS:{
            
            return {
                ...state,
                jobs: state.jobs.filter(job => !job.completed)
            }
        }
        default:
            return state;
    }
}

export default reducer;
export {initState}