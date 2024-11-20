import { createSlice } from "@reduxjs/toolkit";

// const initialTasks = [
//     { id: 1, title: 'Learn Redux', description: 'Understand basics of Redux', completed: false },
//     { id: 2, title: 'Build a To-Do App', description: 'Use React and Redux to build an app', completed: false },
// ];

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        filter: 'All'
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
              task.completed = !task.completed;
              localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        updateTask: (state, action) => {
            const { id, updates } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
              Object.assign(task, updates);
              localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }   
    }
})

export const { addTask, deleteTask, toggleTask, updateTask, setFilter } = taskSlice.actions;

export default taskSlice.reducer;