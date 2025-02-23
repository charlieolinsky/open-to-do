import { useEffect, useState } from "react"
import { Task } from "../types"

type props = {
    data: Task,
    deleteTask(id: string): void,
    editTask(id: string, s: string): void,
}

const TaskCard = (props: props) => {

    //Local title state for edits
    const [title, setTitle] = useState<string>(props.data.title);

    //Ensure local title is always synced with title up stream
    useEffect(() => {
        setTitle(props.data.title)
    }, [props.data.title])

    return (
        <>
            <div className="flex border flex-auto p-0">
               <input onChange={(e) => setTitle(e.target.value)} onBlur={(e) => props.editTask(props.data.id, title)} className="flex-auto" value={title}></input>
               <div className="flex-none">
                    <button onClick={() => props.deleteTask(props.data.id)} className="bg-red-300 p-5 pl-6 border-l"></button>
               </div>
            </div>
        </>
    )
}

export default TaskCard