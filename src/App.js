import Header from './components/Header'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import './App.css';

function App() {

  return (
    <div className="App container m-auto  flex justify-center  flex-col">
      <h3 className='text-center mb-20 text-3xl font-bold mt-28 text-green-500'> My Todo List</h3>
      <div className="wrapper w-full max-w-lg m-auto p-6">
        
          <Header/>
          <TodoList/>
          <Filter/>
      </div>
      
    </div>
  );
}

export default App;
