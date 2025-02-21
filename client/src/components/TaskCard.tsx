import { Task } from "../types"

const TaskCard = (props: {data: Task; deleteTask(id: string): void}) => {

    return (
        <>
            <div className="flex border flex-auto p-0">
               <div className="flex-auto">
                    {props.data.title} 
               </div>
               <div className="flex-none">
                    <button onClick={() => props.deleteTask(props.data.id)} className="bg-red-300 p-5 pl-6 border-l"></button>
               </div>
            </div>
        </>
    )
}

export default TaskCard