import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./taskSlice";
import toggleFormReducer from "./formToggleSlice";

export const store = configureStore({
    reducer: {
        taskReducer,
        toggleFormReducer,
    }
});

export default store;