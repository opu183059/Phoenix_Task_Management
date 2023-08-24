import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const Column = ({ colIndex }) => {
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-orange-500',
        'bg-yellow-500',
        'bg-red-500',
        'bg-orange-500'
    ]
    const [color, setColor] = useState(null)
    const dispatch = useDispatch()
    const boards = useSelector((state) => state.boards)
    const board = boards.find(board => board.isActive)
    const col = board.columns.find((col, i) => i === colIndex)

    useEffect(() => {
        setColor(shuffle(colors).pop())

    }, [colors])
    return (
        <div className="scrollbar-hide mx-5 pt-[90px] min-w-[280px]">
            <p className="fond-semibold flex  items-center gap-2 tracking-widest md:-tracking-[.2em] text-gray-400">
                <div className={`rounded-full w-4 h-4 ${color}`}/>
                {col.name }({col?.tasks?.length})
            </p>
        </div>
    );
};

export default Column;