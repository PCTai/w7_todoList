import { useRef, useState } from 'react';
import { useStore } from '../store/hooks';
import { addJob } from '../actions'

function Header() {

    const [, dispatch] = useStore();
    const [job, setJob] = useState('');
    // console.log(job, );
    const inputRef = useRef();

    const handleAddJob = () => {
        if (job !== '') {
            dispatch(addJob(job));
            setJob('');
            inputRef.current.focus();
        }
    }
    const handleOnKeyDown = (e) => {
        if (job !== '' && e.keyCode === 13) {
            dispatch(addJob(job));
            setJob('');
            inputRef.current.focus();
        }
    }

    return (
        <div className="header w-full text-left p-4 bg-white rounded-lg">
            <h3 className='text-xl font-bold mb-2'>New Todo: </h3>
            <div className="wrapper flex w-full">
                
                <input
                    value={job}
                    ref={inputRef}
                    onKeyDown={handleOnKeyDown}
                    placeholder='Enter new todo'
                    onChange={(e) => setJob(e.target.value)}
                    className="bg-white border-2 outline-none p-2 pl-4  flex-1 rounded-lg text-lg text-gray-800 " type="text"
                />
                <button
                    onClick={handleAddJob}
                    className="p-2 bg-yellow-600 ml-4 rounded-lg pl-6 pr-6 text-white text-xl"
                >Add</button>
            </div>
        </div>
    );
}

export default Header;