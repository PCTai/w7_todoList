import { deleteJob } from "../actions";
import { useStore } from "../store/hooks";

function TodoList() {
    const [state, dispatch] =useStore();
    const {jobs} =state;
    const handleDeleteJob =(id) =>{
        dispatch(deleteJob(id));
    }
    return ( 
        <div className="list-todo bg-white  mt-6 max-h-max rounded-lg p-6">
            {jobs.map(job =>(
                <div key={job.id} className="todo mb-2  text-gray-800 text-left pl-2 border-b-2 flex justify-between">
                    <div className="todo-l flex">
                        <input type="checkbox" name="" id="" value={job.completed}/>
                        <h3 className="ml-2">{job.name}</h3>
                    </div>
                    <div className="todo-handle">
                        <button  className="text-green-500 ">edit</button>
                        <button 
                            onClick={() =>handleDeleteJob(job.id)}
                            className="text-red-500 ml-1"
                        >delete</button>
                    </div>
                </div>
            ))}
        </div>

     );
}

export default TodoList;