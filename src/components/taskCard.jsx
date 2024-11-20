import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/taskSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { setDeleteTaskId, setEditTaskId } from "../redux/formToggleSlice";

const TaskCard = ({ task }) => {
    const dispatch = useDispatch();

    return (
      <div
        className={`border min-w-[250px] p-4 rounded-lg shadow-md 
        ${task.completed ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'} 
        hover:shadow-lg transition`}
      >
        <div className="flex justify-between mb-1">
            <h1 className="font-bold text-lg">{task.title}</h1>
            <button 
                onClick={() => dispatch(toggleTask(task.id))} 
                className={`border px-1 rounded ${task.completed ? " border-red-400 bg-red-50" : "border-green-400 bg-green-50"}`}
            >
                {task.completed ? "Move to todo" : "Move to done"}
            </button>
        </div>
        <div className="flex gap-2">
            <button onClick={() => dispatch(setEditTaskId(task.id))} className="p-2 border rounded bg-white"><FaEdit /></button>
            <button onClick={() => dispatch(setDeleteTaskId(task.id))} className="p-2 border rounded bg-white"><MdDelete /></button>
        </div>
        <p className="text-gray-700">{task.description}</p>
      </div>
    );
  };
  
  export default TaskCard;
  