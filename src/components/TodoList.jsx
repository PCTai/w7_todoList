import { useState } from "react";
import { deleteJob, setCompletedJobs, setJob } from "../actions";
import { useStore } from "../store/hooks";

function TodoList() {
    const [state, dispatch] = useStore();
    const { jobs, filter, filters } = state;
    const [edit, setEdit] = useState(0);
    const [valueEdit, setValueEdit] = useState('');
    const handleDeleteJob = (id) => {
        dispatch(deleteJob(id));
    };
    const jobFilter = () => {
        return jobs.filter(filters[filter]);
    };

    const handleEditJob = (id) => {

        setEdit(id)
        setValueEdit(jobs[id-1].name);
    }
    const handleSubmitEdit = (e) => {
        if (e.keyCode === 13) {
            if(e.target.value.trim()!==''){
                dispatch(setJob({
                    value: e.target.value,
                    id: edit
                }));
                setEdit(0);
                e.target.value = '';
                setValueEdit('');
            }
            else{
                setEdit(0);
                e.target.value='';
            }

        }

    }
    
    const handleSetCompleteJob = (e, id) => {
        dispatch(setJob({
            id: id,
            completed: e.target.checked
        }))
    }
    const handleSetValueEdit = (e) => {
        setValueEdit(e.target.value)
    }
    return (
        <div className="list-todo bg-white  mt-6 max-h-max rounded-lg p-4 text-left">
            <button
                onClick={() => dispatch(setCompletedJobs())}
                className='ml-4 pr-2 rounded-lg text-left mb-2'
            ><i className="fa-solid fa-chevron-down"></i></button>
            {jobFilter().length > 0 ? (
                jobFilter().map((job) => (
                    <div
                        key={job.id}
                        className="todo p-4  mb-2  text-gray-800 rounded-lg  border-2 flex justify-between relative items-center"
                    >

                        <input
                            onChange={(e) => handleSetCompleteJob(e, job.id)}
                            type="checkbox" name="" id="" checked={job.completed} 
                            className='bg-yellow-600 text-white'    
                        />
                        <span className={`pl-4 pr-4 flex-1 first-letter:uppercase   ${job.completed ? 'opacity-60' : ''}`}>{job.name}</span>

                        <div className="todo-handle  text-right">
                            <button
                                onClick={() => handleEditJob(job.id)}
                                className="text-yellow-600 "
                            >
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                                onClick={() => handleDeleteJob(job.id)}
                                className="text-yellow-600 ml-2"
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                       <div className={`${edit === job.id ? 'block' : 'hidden'} flex absolute  top-0 left-0 right-0 bottom-0 p-4`}>
                            <input
                                onKeyDown={handleSubmitEdit}
                                value={valueEdit}
                                onBlur={(e) => { setEdit(0); e.target.value = '' }}
                                type="text" placeholder={job.name}
                                autoFocus={true}
                                onChange={(e) =>handleSetValueEdit(e)}
                                className={` outline-none flex-1 pr-4`}

                            />
                       </div>
                    </div>
                ))
            ) : (
                <h3 className="italic opacity-60">Embty</h3>
            )}
            <h3 className="text-left font-bold">To do : {jobFilter().length} </h3>
        </div>
    );
}

export default TodoList;
