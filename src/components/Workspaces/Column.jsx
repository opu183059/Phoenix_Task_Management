import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";


const Column = ({colIndex}) => {
    const colors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-blue-500",
        "bg-purple-500",
        "bg-green-500",
        "bg-indigo-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-sky-500",
      ];

      const dispatch = useDispatch();
      const [color, setColor] = useState(null)
      const boards = useSelector((state) => state.boards);
    
      const board = boards.find((board) => board.isActive);
      
      const col = board?.columns?.find((col, i) => i === colIndex);
      console.log(colIndex)
      useEffect(() => {
        setColor(shuffle(colors).pop())
      }, [colors]);
    return (
        <div  className="scrollbar-hide ">
            <div className=" font-semibold flex items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                <div className={`rounded-full w-4 h-4 ${color} `}/>
                {col?.name} ({col?.tasks?.length})
            </div>
            {col.tasks.map((task, index) => (
        <Task key={index} taskIndex={index} colIndex={colIndex} />
      ))}



        </div>
    );
};

export default Column;