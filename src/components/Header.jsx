import { useRef, useState } from 'react';
import {useStore}  from '../store/hooks';
import {addJob} from '../actions'

function Header() {

    const [, dispatch] = useStore();
    const [job, setJob] = useState('');
    // console.log(job, );
    const inputRef = useRef();

    const handleAddJob =() =>{
        if(job!==''){
            dispatch(addJob(job));
            setJob('');
            inputRef.current.focus();
        }
    }
    const handleOnKeyDown =(e) =>{
        if(job!=='' && e.keyCode===13){
            dispatch(addJob(job));
            setJob('');
            inputRef.current.focus();
        }
    }

    return ( 
        <div className="header w-full flex ">
            <input 
                value={job}
                ref={inputRef}
                onKeyDown={handleOnKeyDown}
                onChange={(e) =>setJob(e.target.value)}
                className="bg-white outline-none p-2 pl-4  flex-1 rounded-lg text-lg text-gray-800 focus:outline-green-500" type="text" 
            />
            <button 
                onClick={handleAddJob}
                className="p-2 bg-green-500 ml-4 rounded-lg pl-6 pr-6 hover:bg-green-400"
            >Add</button>
        </div>
     );
}

export default Header;