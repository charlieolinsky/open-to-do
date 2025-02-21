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

    const addTask = (t: string): void => {
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

    const deleteTask= (id: string): void => {
        setTasks(tasks.filter((t) => t.id !== id))
    }

    return(
        <div className="flex flex-col gap-1">
            {tasks.map((t, i) => {
                return <TaskCard data={t} deleteTask={deleteTask} key={i} />
            })}

            <div className="border"> 
                <form onSubmit={(e) => {addTask(inputValue); e.preventDefault()}} className="flex">
                    <input onChange={(e) => setInputValue(e.target.value)} className="flex-1" type="text" value={inputValue}></input>
                    <button className="bg-green-200 flex-none p-5 pl-6 border-l" type="submit"></button>
                </form> 
            </div>
        </div>
    )
}
export default TaskList