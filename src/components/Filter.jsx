import { deleteCompletedJob, setFilter } from "../actions";
import { useStore } from "../store/hooks";

function Filter() {

    const [state, dispatch] = useStore();
    const { filter, filters, jobs } = state;

    const handleSetFilter = (value) => {
        dispatch(setFilter(value))
    }
    const handleDeleteCompleted = () => {
        dispatch(deleteCompletedJob())
    }
    return (
        <div className="footer flex justify-between bg-white p-2 pr-6 pl-6 rounded-lg mt-2">
            <div className="handle">
                <button 
                    onClick={handleDeleteCompleted}
                className="p-1 pl-2 pr-2 rounded-lg bg-red-500">Delete Completed</button>
            </div>
            <div className="filters  ">

                {filters && Object.keys(filters).map(item => (
                    <button
                        key={item}
                        onClick={() => handleSetFilter(item)}
                        className={`filter-item p-1 pl-2 pr-2 rounded-lg ${filter === item ? 'bg-green-500 text-gray-800' : ''}`}>
                        {item[0].toUpperCase() + item.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Filter;