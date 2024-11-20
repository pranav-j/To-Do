import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/taskSlice";

const NavBar = () => {
    const disatch = useDispatch();
    const filter = useSelector((state) => state.taskReducer.filter);

    return(
        <nav className="flex justify-between items-center h-[80px] px-[20px] border-b">
            <h1 className="text-3xl">TODO</h1>
            <ul className="flex gap-2">
                <li><button onClick={() => disatch(setFilter('All'))} className={`border ${filter === 'All' && "border-blue-400 bg-blue-50"} rounded px-4 py-1`}>All</button></li>
                <li><button onClick={() => disatch(setFilter('Completed'))} className={`border ${filter === 'Completed' && "border-green-400 bg-green-50"} rounded px-4 py-1`}>Completed</button></li>
                <li><button onClick={() => disatch(setFilter('Incomplete'))} className={`border ${filter === 'Incomplete' && "border-red-400 bg-red-50"} rounded px-4 py-1`}>Incomplete</button></li>
            </ul>
        </nav>
    )
}

export default NavBar;