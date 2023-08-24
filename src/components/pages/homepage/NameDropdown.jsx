
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit, FaTasks } from 'react-icons/fa';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import boardsSlice from '../../redux/boardsSlice';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const NameDropdown = ({ setOpenDropdown, setBoardModalOpen,setType }) => {
    const dispatch = useDispatch()
    const boards = useSelector((state) => state.boards)
    console.log('boards', boards)
    return (
        <div
            onClick={(e) => {
                if (e.target != e.currentTarget) {
                    return
                }
                setOpenDropdown(false)
            }}
            className='py-10 z-50 px-6 absolute right-0 left-0 md:bottom-[-100vh] top-16 bg-black bg-opacity-30 w-full rounded-lg'>
            <div className='bg-white p-4 md:max-w-sm rounded-lg md:ms-[50%]' >
                <h3>All Boards({boards.length})</h3>
                {
                    boards && boards.map((board, index) => <div
                        onClick={() => {
                            dispatch(boardsSlice.actions.setBoardActive({ index }))
                        }}
                        key={index} className={`flex items-center gap-2 my-2 ${board.isActive ? 'bg-slate-400 rounded-r-full p-2' : ''}`}>
                
                        <Link onClick={()=>{setOpenDropdown(state=>!state)}} to='/activeBoard' className='text-lg font-bold button flex justify-center items-center gap-2 w-full'> <FaTasks></FaTasks>{board.name}</Link>
                        <FaEdit 
                         onClick={()=>{
                            setBoardModalOpen(true)
                            setOpenDropdown(false)
                            setType('edit')
                        }}
                        className='cursor-pointer'></FaEdit>

                        <AiTwotoneDelete
                       
                       onClick={()=>{
                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(boardsSlice.actions.deleteBoard())
                                dispatch(boardsSlice.actions.setBoardActive({index:0}))
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            }
                          })
                       }}
                        className='cursor-pointer'></AiTwotoneDelete>
                    </div>
                    )
                }

                <div
                    onClick={() => {
                        setBoardModalOpen(true)
                        setOpenDropdown(false)
                    }
                    }
                    className='flex items-center gap-2 text-red-500 cursor-pointer'>
                    <MdOutlineCreateNewFolder></MdOutlineCreateNewFolder>
                    <p className='text-lg font-bold '>Create New Board </p>
                </div>
            </div>
        </div>
    );
};

export default NameDropdown;