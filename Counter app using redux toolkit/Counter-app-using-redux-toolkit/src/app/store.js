import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import PostsReducer from "../Features/Posts/PostsSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: PostsReducer,
    }
})


export default store;