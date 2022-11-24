import { deleteCompletedJob, setFilter } from "../actions";
import { useStore } from "../store/hooks";

function Filter() {

    const [state, dispatch] = useStore();
    const { filter, filters} = state;

    const handleSetFilter = (value) => {
        dispatch(setFilter(value))
    }
    const handleDeleteCompleted = () => {
        dispatch(deleteCompletedJob())
    }
    return (
        <div className="footer flex justify-between bg-white p-4 rounded-lg mt-2">
            <div className="handle-clear">
                <button 
                    onClick={handleDeleteCompleted}
                className="p-1 pl-2 pr-2 rounded-lg border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"><i className="fa-solid fa-trash-can"></i> Completed</button>
            </div>
            <div className="filters  ">

                {filters && Object.keys(filters).map(item => (
                    <button
                        key={item}
                        onClick={() => handleSetFilter(item)}
                        className={`filter-item border-2 ml-2 p-1 pl-2 pr-2 rounded-lg hover:bg-yellow-600 hover:text-white ${filter === item ? 'border-yellow-600 text-yellow-600' : ''}`}>
                        {item[0].toUpperCase() + item.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Filter;