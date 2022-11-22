import { ADD_JOB, SET_JOB, SET_COMPLETED_JOBS, DELETE_JOB, DELETED_COMPLETED_JOBS, SET_FILTER } from '../constants';

if (!localStorage.getItem('todo')) {
    localStorage.setItem('todo', JSON.stringify([]));
}
const todo = JSON.parse(localStorage.getItem('todo'));
// console.log(todo);
const initState = {
    jobs: todo,
    filter: 'all',
    filters: {
        all: () => true,
        active: (job) => !job.completed,
        completed: (job) => job.completed
    }

}

const reducer = (state, action) => {
    // console.log('action :',action.payload)
    switch (action.type) {
        case ADD_JOB: {
            const newjobs = [...state.jobs, {
                id: state.jobs.length + 1,
                completed: false,
                name: action.payload
            }]
            localStorage.setItem('todo', JSON.stringify(newjobs));

            return {
                ...state,
                jobs: newjobs
            }
        }
        case DELETE_JOB: {
            const newjobs = state.jobs.filter(job => job.id !== action.payload);
            localStorage.setItem('todo', JSON.stringify(newjobs));

            return {
                ...state,
                jobs: newjobs
            }
        }
        case SET_JOB: {
            if (action.payload.value) {
                
                const newjobs = state.jobs.map(job => {
                    if (job.id === action.payload.id) {
                        return {
                            ...job,
                            name: action.payload.value
                        }
                    }
                    return job;
                })
                localStorage.setItem('todo', JSON.stringify(newjobs));

                return {
                    ...state,
                    jobs: newjobs
                }
            }
            const newjobs = state.jobs.map(job => {
                if (job.id === action.payload.id) {
                    return {
                        ...job,
                        completed: action.payload.completed
                    }
                }
                return job;
            })
            localStorage.setItem('todo', JSON.stringify(newjobs));

            return {
                ...state,
                jobs: newjobs
            }
        }
        case SET_COMPLETED_JOBS: {
            const newjobs = state.jobs.map(job => ({ ...job, completed: true }));
            localStorage.setItem('todo', JSON.stringify(newjobs));

            return {
                ...state,
                jobs: newjobs
            }
        }
        case SET_FILTER: {

            return {
                ...state,
                filter: action.payload
            }
        }
        case DELETED_COMPLETED_JOBS: {
            const newjobs = state.jobs.filter(job => !job.completed);
            localStorage.setItem('todo', JSON.stringify(newjobs));
            return {
                ...state,
                jobs: newjobs
            }
        }
        default: {

            return state;
        }

    }
}

export default reducer;
export { initState }