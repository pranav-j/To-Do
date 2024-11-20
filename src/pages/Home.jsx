import { useSelector } from "react-redux";
import ListTasks from "../components/listTasks";
import NavBar from "../components/navBar";
import TaskForm from "../components/taskForm";
import { useEffect } from "react";
import DeleteConfirmationModal from "../components/deleteConfirmationModal";


const Home = () => {
    const showNewTaskForm = useSelector((state) => state.toggleFormReducer.showNewTaskForm);
    const editTaskId = useSelector((state) => state.toggleFormReducer.editTaskId);
    const deleteTaskId = useSelector((state) => state.toggleFormReducer.deleteTaskId);

    useEffect(() => {
        console.log({ editTaskId, showNewTaskForm, deleteTaskId });
    }, [editTaskId, showNewTaskForm, deleteTaskId])

    return(
        <>
            <NavBar />
            {(showNewTaskForm || editTaskId) ? <TaskForm /> : null}
            {deleteTaskId && <DeleteConfirmationModal />}
            <ListTasks />
        </>
    )
}

export default Home;