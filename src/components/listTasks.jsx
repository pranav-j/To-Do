import { useDispatch, useSelector } from "react-redux";
import TaskCard from "./taskCard";
import { toggleNewTaskForm } from "../redux/formToggleSlice";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const ListTasks = () => {
    const tasks = useSelector((state) => state.taskReducer.tasks);
    const filter = useSelector((state) => state.taskReducer.filter);
    let filteredTasks = [];
    if(filter === 'All') {
        filteredTasks = tasks
    } else if(filter === 'Completed') {
        filteredTasks = tasks.filter((task) => task.completed);
    } else if(filter === 'Incomplete') {
        filteredTasks = tasks.filter((task) => !task.completed);
    }

    const dispatch = useDispatch();

    return (
        <div className="p-6">
          <button onClick={() => dispatch(toggleNewTaskForm())} className="flex items-center justify-center gap-2 border rounded-lg px-4 py-2 mb-4 bg-blue-500 text-white hover:bg-blue-600 transition">
            <span>Add task </span><MdOutlineAddCircleOutline className="mt-[2px]" />
          </button>
          <h1 className="font-semibold mb-4">{filter} tasks</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTasks.map((task, index) => (
              <TaskCard key={index} task={task} />
            ))}
          </div>
        </div>
      );
};

export default ListTasks;