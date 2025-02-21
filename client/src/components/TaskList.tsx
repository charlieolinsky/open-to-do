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

    return(
        <div>
            {tasks.map((t, i) => {
                return <TaskCard data={t} key={i} />
            })}
        </div>
    )
}
export default TaskList