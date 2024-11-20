import { createSlice } from "@reduxjs/toolkit";

const formToggleSlice = createSlice({
    name: 'formtoggle',
    initialState: {
        showNewTaskForm: false,
        editTaskId: null,
        deleteTaskId: false,
    },
    reducers: {
        toggleNewTaskForm: (state) => {
            state.showNewTaskForm = !state.showNewTaskForm;
        },
        setDeleteTaskId: (state, action) => {
            state.deleteTaskId = action.payload;
        },
        resetDeleteTaskId: (state) => {
            state.deleteTaskId = null;
        },
        setEditTaskId: (state, action) => {
            state.editTaskId = action.payload;
        },
        resetEditTaskId: (state) => {
            state.editTaskId = null;
        },
        closeTaskForm: (state) => {
            state.editTaskId = null;
            state.showNewTaskForm = false;
        }
    }
});

export const { toggleNewTaskForm, setDeleteTaskId, resetDeleteTaskId, setEditTaskId, resetEditTaskId, closeTaskForm } = formToggleSlice.actions;

export default formToggleSlice.reducer;