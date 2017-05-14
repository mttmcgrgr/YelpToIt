import { combineReducers } from 'redux';
import posts from "./posts_reducer";


export const rootReducer = combineReducers({
  posts
});

export default rootReducer;
