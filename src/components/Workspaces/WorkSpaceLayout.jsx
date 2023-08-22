import { Link } from "react-router-dom";
import logo from "../../assets/phoenix_logo_without_bg.png";
import logotext from "../../assets/phoenix_name.png";
import { BiMenu } from "react-icons/bi";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
import BoardMenu from "./BoardMenu";
import { useSelector } from "react-redux";
import CreateBoard from "./CreateBoard";


const WorkSpaceLayout = () => {
    const [isDropDown, setIsDropDown] = useState(false)
    const [openBoardMenu, setOpenBoardMenu] = useState(false)
    const [openCreateBoard, setOpenCreateBoard] = useState(false)
    const boards = useSelector((state) => state.boards)
    const [boardType,setBoardType]=useState('add')
    return (
        <div>
            <div className="drawer lg:drawer-open relative">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}

                    <label htmlFor="my-drawer" className=" absolute top-4 left-3 drawer-button lg:hidden"><BiMenu></BiMenu></label>
                    <div>
                        {
                            openCreateBoard && <CreateBoard 
                            type={boardType}
                            setOpenCreateBoard={setOpenCreateBoard} 
                            openCreateBoard={openCreateBoard} ></CreateBoard>
                        }
                    </div>

                </div>

                <div className="drawer-side ">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <Link to={"/"}>
                            <div className="flex items-center gap-1">
                                <img src={logo} className="w-[40px] h-[45px]" />
                                <img src={logotext} alt="" />
                            </div>
                        </Link>
                        <li onClick={() => setIsDropDown(!isDropDown)}><a >all board{isDropDown ? <><AiOutlineUp></AiOutlineUp></> : <><AiOutlineDown></AiOutlineDown></>}</a></li>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a>+ create new task</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <div className="divider"></div>

                        {isDropDown && <BoardMenu
                            setOpenCreateBoard={setOpenCreateBoard}
                            openCreateBoard={openCreateBoard}
                            setOpenBoardMenu={setOpenBoardMenu}></BoardMenu>}

                    </ul>

                </div>

            </div>
        </div>
    );
};

export default WorkSpaceLayout;