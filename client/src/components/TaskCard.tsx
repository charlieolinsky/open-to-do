import { Task } from "../types"

const TaskCard = (props: {data: Task}) => {
    return (
        <>
            <div className="border p-2 flex-auto">
               <div>
                    {props.data.title} 
               </div>
            </div>
        </>
    )
}

export default TaskCard