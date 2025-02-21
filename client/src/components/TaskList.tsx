import { useState } from "react";
import TaskCard from "./TaskCard";
import { Task } from "../types";

const taskData = [
    {id: "0", title: "wash dishes", description: "don't wanna", isComplete: false, dueDate: new Date()},
    {id: "1", title: "feed cats", description: "don't wanna", isComplete: true, dueDate: new Date()},
    {id: "2", title: "code awesome to do", description: "do wanna!", isComplete: false, dueDate: new Date()},
]

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>(taskData)
    const [inputValue, setInputValue] = useState<string>("");

    const addTask = (t: string) => {
        let newData = [...tasks]
        let newTask = {
            id: tasks.length.toString(),
            title: t,
            isComplete: false,
        }
        newData.push(newTask)
        setInputValue("")
        setTasks(newData)
    }

    return(
        <div className="flex flex-col gap-1">
            {tasks.map((t, i) => {
                return <TaskCard data={t} key={i} />
            })}

            <div> 
                <form onSubmit={(e) => {addTask(inputValue); e.preventDefault()}} className="flex">
                    <input onChange={(e) => setInputValue(e.target.value)} className="border flex-1" type="text" value={inputValue}></input>
                    <button className="bg-blue-200 border flex-none p-2" type="submit">Add</button>
                </form> 
            </div>
        </div>
    )
}
export default TaskList