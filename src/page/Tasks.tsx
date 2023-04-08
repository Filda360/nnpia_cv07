import {useState} from "react";
import {Task, tasks} from "../data/init-data";
import TaskCard from "../component/TaskCard";

const Tasks = () => {

    /*return (
        <div>
            <div>
                <p>Ukol 01</p>
                <p>Dokoncit</p>
            </div>
            <div>
                <p>Ukol 02</p>
                <p>dalsi Dokoncit</p>
            </div>
        </div>
    );*/

    const [taskList, setTaskList] = useState<Array<Task>>(tasks)

    const taskDoneHadnler = (task: Task) => {
        console.log("changing state of reactive variable")
        setTaskList([...taskList])
    }

    return <div>
        <h1>aktualni</h1>
        {taskList.filter(t => !t.done).map(t =>
            <TaskCard key = {t.id} task = {t} onTaskDone={taskDoneHadnler}/>
        )}

        <h1>splnene</h1>
        {taskList.filter(t => t.done).map(t =>
            <TaskCard key = {t.id} task = {t} onTaskDone={taskDoneHadnler}/>
        )}

    </div>
}

/* !nutno exportovat */
export default Tasks