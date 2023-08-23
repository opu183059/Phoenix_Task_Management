import { useState } from "react";
import { useSelector } from "react-redux";


const Task = ({ colIndex, taskIndex }) => {
    const boards = useSelector((state) => state.boards);
    const board = boards.find((board) => board.isActive);
    const columns = board.columns;
    const col = columns?.find((col, i) => i === colIndex);
    const task = col?.tasks.find((task, i) => i === taskIndex);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

    let completed = 0;
    let subtasks = task?.subtasks;
    subtasks.forEach((subtask) => {
        if (subtask.isCompleted) {
            completed++;
        }
    });
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl m-4">
                <div className="card-body ">
                    <p className=" font-bold  ">{task.title}</p>
                    <p className=" font-bold text-xs  mt-2 text-gray-500">
                        {completed} of {subtasks.length} completed tasks
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Task;