import { flatMap } from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";


const Task = ({ taskIndex, colIndex }) => {
    const boards = useSelector((state) => state.boards)
    const board = boards.find(board => board.isActive)
    const columns = board.columns;
    const col = columns.find((col, i) => i === colIndex)
    const task = col?.tasks.find((task, i) => i === taskIndex)
   console.log(col?.tasks)
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

    let completed = 0
    let subtasks = task?.subtasks
    subtasks?.forEach(subtask => {
        if (subtask.isCompleted) {
            completed++
        }

    });
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <div className="card-body">
                   <p> {task?.title||'Title is not available'}</p>
                   <p>{completed} of {subtasks?.length||0} complete tasks</p>
                </div>
            </div>
        </div>
    );
};

export default Task;