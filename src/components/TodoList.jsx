import { useState } from "react";
import { deleteJob, setCompletedJobs, setJob } from "../actions";
import { useStore } from "../store/hooks";

function TodoList() {
    const [state, dispatch] = useStore();
    const { jobs, filter, filters } = state;
    const [edit, setEdit] = useState(0);
    const handleDeleteJob = (id) => {
        dispatch(deleteJob(id));
    };
    const jobFilter = () => {
        return jobs.filter(filters[filter]);
    };

    const handleEditJob =(id) =>{
        setEdit(id)
    }
    const handleSubmitEdit =(e) =>{
        if (e.keyCode === 13) {
            dispatch(setJob({
                value: e.target.value,
                id: edit
            }));
            setEdit(0);
            e.target.value= '';
        }
        
    }
    const handleSetCompleteJob =(e, id) =>{
        dispatch(setJob({
            id: id,
            completed: e.target.checked
        }))
    }
    return (
        <div className="list-todo bg-white  mt-6 max-h-max rounded-lg p-6 text-left">
            <button 
                onClick={() =>dispatch(setCompletedJobs())}
                className='bg-green-500 p-1 pl-2 pr-2 rounded-lg text-left mb-2'
            ><i className="fa-solid fa-chevron-down"></i></button>
            {jobFilter().length > 0 ? (
                jobFilter().map((job) => (
                    <div
                        key={job.id}
                        className="todo mb-2  text-gray-800 text-left  border-b-2 flex justify-between relative"
                    >
                        <div className="todo-l flex">
                            <input 
                                onChange={(e) =>handleSetCompleteJob(e, job.id)}
                                type="checkbox" name="" id="" checked={job.completed} />
                            <h3 className={`ml-2 ${job.completed ? 'opacity-60': ''}`}>{job.name}</h3>
                        </div>
                        <div className="todo-handle">
                            <button 
                                onClick={() =>handleEditJob(job.id)}
                                className="text-blue-500 "
                            >
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                                onClick={() => handleDeleteJob(job.id)}
                                className="text-red-500 ml-1"
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                        <input 
                            onKeyDown={handleSubmitEdit}
                            onBlur= {(e) =>{setEdit(0); e.target.value=''}}
                            type="text" placeholder={job.name} 
                            className={`absolute  top-0 left-4 right-10 pl-2 outline-none ${edit===job.id ? 'block' : 'hidden'}`}
                        />
                    </div>
                ))
            ) : (
                <h3 className="italic">Todo List Embty</h3>
            )}
            <h3 className="text-left ">{jobFilter().length} item</h3>
        </div>
    );
}

export default TodoList;
