import { useSelector } from "react-redux";
import Column from "./column";


const ActiveBoard = ({board}) => {
    const boards=useSelector((state)=>state.boards);
    const board1=boards.find(board=>board.isActive===true);
    const columns=board1.columns;
   
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-4">{board.name}</h2>
            <div className="flex justify-around mt-4">
                {
                    columns?.map((col,index)=><Column 
                    key={index} colIndex={index}></Column>)
                }
            </div>
        </div>
    );
};

export default ActiveBoard;