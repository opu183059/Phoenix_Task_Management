import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";


const ActiveBoard = () => {

const boards=useSelector((state)=>state.boards)
const board=boards.find(board=>board.isActive===true)

const columns= board.columns;
    return (
        <div className="flex">
            {
                columns?.map((col,index)=><Column key={index} colIndex={index}></Column>)
            }
        </div>
    );
};

export default ActiveBoard;