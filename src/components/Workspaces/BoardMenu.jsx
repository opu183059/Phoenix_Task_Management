/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";


const BoardMenu = ({ setBoardType,setOpenCreateBoard , openCreateBoard, setOpenAddEditTask }) => {
    const boards = useSelector((state) => state.boards)
    // const handelCreateBoard=()=>{
    //     se
    // }
    const dispatch = useDispatch()
    const handelDelete=(name)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to revert ${name}` ,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch(boardsSlice.actions.deleteBoard());
                dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <div className="font-bold">
            <h1 className="mb-3 ">workspaces({boards.length})</h1>
            {
                boards.map((board, index) => <dev
                    onClick={() => { dispatch(boardsSlice.actions.setBoardActive({ index })) }}
                    className={`flex justify-between hover:bg-slate-300 rounded-lg py-1 px-4 ${board.isActive ? 'bg-orange-600' : ''}`} key={index}>
                    {board.name}
                    <div className="flex gap-4">
                        <FaRegEdit
                        onClick={()=>{
                            setOpenCreateBoard(true)
                            setBoardType('edit')
                        }}
                        className="cursor-pointer h-6 w-6"></FaRegEdit>
                    <AiOutlineDelete
                    onClick={()=>handelDelete(board.name)}
                    className="cursor-pointer h-6 w-6"></AiOutlineDelete></div></dev>
                )
            }
            <button onClick={() => {
                setOpenCreateBoard(!openCreateBoard),
                    setOpenAddEditTask(false)
            }}>+ Create New Board</button>
        </div>
    );
};

export default BoardMenu;