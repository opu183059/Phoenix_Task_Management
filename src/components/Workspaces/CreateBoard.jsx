import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import boardsSlice from "../redux/boardsSlice";

const CreateBoard = ({ setOpenCreateBoard, type }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [newColumns, setNewColumns] = useState([
        { name: 'Todo', task: [], id: uuidv4() },
        { name: 'Doing', task: [], id: uuidv4() }
    ])

    const handelColName = (id, newValue) => {
        setNewColumns((pervState) => {
            const newState = [...pervState]
            const column = newState.find((col) => col.id === id)
            column.name = newValue
            return newState
        })
    }
    const handelDelete = (id) => {
        setNewColumns((pervState) => pervState.filter(el => el.id !== id))
    }

    const validate = () => {
        setIsValid(false);
        if (!name.trim()) {
            return false;
        }
        for (let i = 0; i < newColumns.length; i++) {
            if (!newColumns[i].name.trim()) {
                return false;
            }
        }
        setIsValid(true);
        return true;
    };
    const onSubmit = (type) => {
        setOpenCreateBoard(false);
        if (type === "add") {
          dispatch(boardsSlice.actions.addBoard({ name, newColumns }));
        } else {
          dispatch(boardsSlice.actions.editBoard({ name, newColumns }));
        }
      };
    return (
        <div
            onClick={(e) => {
                if (e.target !== e.currentTarget) {
                    return
                }
                setOpenCreateBoard(false)
            }}
            className="fixed top-0 right-0 left-0 bottom-0 justify-center items-center  bg-black bg-opacity-30 ">

            <div className=" px-4 py-4  lg:ml-96 bg-white rounded-lg mt-8 md:full lg:w-1/3 text-black scrollbar-hide max-h-[95vh]  ">
                <h3 className="text-2xl font-bold text-center">
                    {type === 'edit' ? 'Edit' : 'Add New'} Board
                </h3>
                <div className="flex mt-8 flex-col space-y-3">
                    <label className="font-bold ">Board Name</label>
                    <input type="text"
                        className="border  focus:outline-orange-400 w-full py-2 px-4"
                        placeholder="e.g Web Design"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                {/* board columns */}
                <div className="flex mt-4 flex-col space-y-3 ">
                    <label className="font-bold">Board columns</label>
                    {
                        newColumns?.map((column, index) => <div
                            className="flex items-center  gap-4 "
                            key={index}>

                            <input type="text"
                                onChange={(e) => { handelColName(column.id, e.target.value) }}
                                value={column.name}
                                className="border  focus:outline-orange-400 w-full py-2 px-4"
                            />
                            <RxCross2 className="cursor-pointer hover:bg-slate-200 h-10 rounded-full w-10"
                                onClick={() => handelDelete(column.id)}
                            ></RxCross2>
                        </div>)

                    }

                </div>
                <button
                    onClick={() => setNewColumns((state) => [
                        ...state, { name: '', task: [], id: uuidv4() }
                    ])}
                    className=" btn btn-secondary mt-4  w-full"
                >+ add new column</button> <br />
                <button
                    onClick={() => {
                        const isValid = validate()
                        if (isValid === true) onSubmit(type);
                    }}
                    className=" btn btn-secondary w-full  mt-4 ">{type === 'add' ? '+ Add New Board' : 'Save Changes'}</button>
            </div>
        </div>
    );
};

export default CreateBoard;