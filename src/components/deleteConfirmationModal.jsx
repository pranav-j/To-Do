import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { resetDeleteTaskId } from '../redux/formToggleSlice';

const DeleteConfirmationModal = () => {
  const dispatch = useDispatch();
  const deleteTaskId = useSelector((state) => state.toggleFormReducer.deleteTaskId);

  const handleConfirmDelete = () => {
    dispatch(deleteTask(deleteTaskId));
    dispatch(resetDeleteTaskId());
  };

  const handleCancel = () => {
    dispatch(resetDeleteTaskId());
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Delete Task</h2>
        <p className="mb-6">Are you sure you want to delete this task? This action cannot be undone.</p>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleConfirmDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
