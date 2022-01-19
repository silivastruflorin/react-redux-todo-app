import { createStore, applyMiddleware } from "redux";
/* 
    Action ---Middleware---> Root Reducer ---> Store ---> DOM Changes

    Actions are dispatched we catch them and the Middleware are some functions that receive Actions in and
    do something with the Actions and then pass them out into the Root reducer.


*/

import logger from "redux-logger"; //middleware that will be used later to debug code 
import rootReducer from './root.reducer'; //we import the exported function from root.reducer.js as rootReducer
// import toDoReducer from "./todo.reducer";

//Set up middleware
const middlewares = [logger]; //we put all the middlewares that we use in an array

//Create Store 
const store = createStore(rootReducer, applyMiddleware(...middlewares)); //tackes the root reducer  and the middlewares as parameter
//or 
/*
const store = createStore(
    {
        reducer: toDoReducer,
                //other reducers
    }, 
    applyMiddleware(...middlewares)
    ); //tackes the root reducer  and the middlewares as parameter
*/

export default store;

