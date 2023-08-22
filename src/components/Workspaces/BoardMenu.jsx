/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";


const BoardMenu = ({setOpenBoardMenu,setOpenCreateBoard,openCreateBoard}) => {
    const boards=useSelector((state)=>state.boards)
    // const handelCreateBoard=()=>{
    //     se
    // }
    return (
        <div className="font-bold">
            <h1 className="mb-3 ">workspaces({boards.length})</h1>
            {
                boards.map((board,index)=> <dev className={`flex hover:bg-slate-300 rounded-lg py-1 px-4 ${board.isActive?'bg-orange-600':''}`} key={index}> {board.name}</dev>
                )
            }
            <button onClick={()=>setOpenCreateBoard(!openCreateBoard)}>+ Create New Board</button>
        </div>
    );
};

export default BoardMenu;