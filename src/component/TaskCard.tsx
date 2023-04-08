import {Task} from "../data/init-data";

interface Props {
    task: Task
    onTaskDone: (task: Task) => void
}

const TaskCard = ({task, onTaskDone}: Props) => {
    const doneClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        task.done = e.target.checked;
        console.table(task);
        onTaskDone(task);
    }


    return <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.creationDate.toISOString()}</p>
        <p>{task.updateDate?.toISOString()}</p>
        <label>Splneno</label>
        <input type="checkbox" checked={task.done} name="done" onChange={doneClickHandler}/>
    </div>
}

export default TaskCard