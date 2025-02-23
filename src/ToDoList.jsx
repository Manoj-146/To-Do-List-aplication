import React,{useState} from "react"

function ToDoList(){

    const [tasks, setTask] = useState([])
    const [newtask, setnewtask] = useState("")

    function handleInputChange(event){
        setnewtask(event.target.value)
    }


    function addTask(){
        if(newtask.trim()!==""){
            setTask(t=>[...t, newtask])
            setnewtask("")
        }
    }

    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=>i!==index)
        setTask(updatedTasks);
    }

    function moveUpTask(index){
        if (index>0) {
            const updatedarr=[...tasks];
            [updatedarr[index],updatedarr[index-1]]=
            [updatedarr[index-1],updatedarr[index]];

            setTask(updatedarr);
        }
    }

    function moveDownTask(index){
        if (index<tasks.length-1) {
            const updatedarr=[...tasks];
            [updatedarr[index],updatedarr[index+1]]=
            [updatedarr[index+1],updatedarr[index]];

            setTask(updatedarr);
        }
    }
    return(<div className="To-do-list" style={{"backgroundImage":""}}>
                <h1>To Do List</h1>
                <div>
                    <input type="text" value={newtask} onChange={handleInputChange} placeholder="Enter a task here..."/>
                    <button className="add-button" onClick={addTask}>Add</button>
                </div>
                <ol>
                    {tasks.map((task,index)=><li className="list-item" key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={()=>moveUpTask(index)}>&#8593;</button>
                        <button className="move-button" onClick={()=>moveDownTask(index)}>&#8595;</button>
                    </li>)}
                </ol>   
           </div>)
}

export default ToDoList