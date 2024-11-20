import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { closeTaskForm, resetEditTaskId, toggleNewTaskForm } from '../redux/formToggleSlice';
import { addTask, updateTask } from '../redux/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const editTaskId = useSelector((state) => state.toggleFormReducer.editTaskId);
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTaskId) {
      const taskToEdit = tasks.find((task) => task.id === editTaskId);
      if (taskToEdit) {
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
      }
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editTaskId, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editTaskId) {
      dispatch(
        addTask({
          id: uuidv4(),
          title,
          description,
          completed: false,
        })
      );
      dispatch(toggleNewTaskForm());

    } else {
      dispatch(
        updateTask({
          id: editTaskId,
          updates: {
            title,
            description,
          },
        })
      );

      dispatch(closeTaskForm());
    }

    setTitle('');
    setDescription('');

  };

  const onCancel = () => {
    dispatch(closeTaskForm())
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">{editTaskId ? 'Edit Task' : 'Add New Task'}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="border w-full p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            className="border w-full p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {editTaskId ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
