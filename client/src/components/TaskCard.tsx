import { Task } from "../types"

const TaskCard = (props: {data: Task}) => {
    return (
        <>
            <div>
               {props.data.title} 
            </div>
        </>
    )
}

export default TaskCard