import './App.css';
import React, {useState} from "react" ;
import Task from './components/Task.js' ;

function App() {
	const [tasks, setTasks] = useState([]) ;
	const [text, setText] = useState("") ;
    const [alert, setAlert] = useState(null) ;

    const [categories, setCategories] = useState([
            <option key={1} value="Study">Study</option>,
            <option key={2} value="Hobby">Hobby</option>,
            <option key={3} value="Work">Work</option>,
            <option key={4} value="Entertainment">Entertainment</option>,
            <option key={5} value="Personal Project">Personal Project</option>])

	const handleTaskAdd = () =>{
		let new_tasks=[] ;
		let category=document.getElementById('taskTag').value ;
		let newTask = document.getElementById('task_add_new').value ;
		for(let i=0; i< tasks.length; i++){
			new_tasks.push(tasks[i]) ;
		}
		new_tasks.push(<Task key={tasks.length} task={newTask} tag={category} view={1}/>) ;
		setTasks(new_tasks) ;
		setText("") ;
		// console.log('Here1') ;
	}

	const handleChange = (event) =>{
		setText(event.target.value) ;
	}

    const handleCategoryAdd = () =>{
        let new_category=[] ;
        let newcate = document.getElementById('categoryInput').value ;
        if(newcate.length===0){
            return
        }
        document.getElementById('categoryInput').value="" ;
        for(let i=0; i< categories.length; i++){
            console.log(categories[i].props.value+" "+newcate) ;
            if(categories[i].props.value===newcate){
                setAlert(1);
                setTimeout(() =>{
                    setAlert(null)
                },2000)
                return ;
            }
            new_category.push(categories[i]) ;
        }
        new_category.push(<option key={categories.length} value={newcate}>{newcate}</option>) ;
        setCategories(new_category) ;
    }

    const filterTasks = () =>{
        let newTasks = [] ;
        let filter = document.getElementById('filterTag').value ;
        if(filter.length===0){
            console.log('Nothing found so doing nothing')
            for(let i=0; i< tasks.length; i++){
                newTasks.push(<Task key={i} task={tasks[i].props.task} tag={tasks[i].props.tag} view={1}/>) ;
            }
            setTasks(newTasks) ;
        }
        else{
            console.log('Found a valid filter value now filtering') ;
            for(let i=0; i< tasks.length; i++){
                if(tasks[i].props.tag==filter)
                {   console.log("Found matching filter at "+i+"for : "+filter+"Vlaue of tag : "+tasks[i].props.tag) ;
                    newTasks.push(<Task key={i} task={tasks[i].props.task} tag={tasks[i].props.tag} view={1}/>) ;
                }else{
                    console.log("Found non-matching filter at "+i)
                    newTasks.push(<Task key={i} task={tasks[i].props.task} tag={tasks[i].props.tag} view={null}/>) ;
                }
            }
            setTasks(newTasks) ;
            console.log(tasks) ;
        }
    }

  return (
  	<div className="mb=3 mt-5">
    <div className="col-4 container">
        <span>
        <label htmlFor="filterTag"><h6>Filter Task by Category</h6></label>
        <select className="form-select mt-2" aria-label="default select" id="filterTag" name="filterTag">
            <option key={1} value="">None</option>
            {categories}
        </select>
        <button className="btn btn-outline-primary btn-sm mt-2" onClick={filterTasks} >Filter</button>
        </span>
    </div>
    {alert && <div className="alert alert-warning" role="alert" id="categoryAlert">Category already present in List</div>}
    <div className='col-sm-5 container bg-light'>
    <br/>
    <ul className="list-group">
    {tasks}
    </ul>
    <br/>
    <div className="my-2">
    <textarea className="form-control" value={text} onChange={handleChange} id="task_add_new" rows="3"/>
    </div>
    <div className="col-4 justfy-content-start">
    	<select className="form-select" aria-label="default select" id="taskTag">
    		{categories}
    	</select>
    </div>
    <span>
    <button className="btn btn-primary my-2 mx-2" onClick={handleTaskAdd}>Add Task</button>
    <div className="col-3 mt-4">
        <input type="text" className="form-control" placeholder="New Category" id="categoryInput"/>
    </div>
    <button className="btn btn-outline-primary btn-sm my-2 mx-2" onClick={handleCategoryAdd}>Category</button>
    </span>
    </div>
    </div>
    );
}

export default App;
