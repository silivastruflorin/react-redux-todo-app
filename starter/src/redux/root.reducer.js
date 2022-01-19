/*
    root-reducer represent the overall reducer base on 
    all the reducers that pulls in.

    root reducer = a combination of the other reducers

*/
import { combineReducers } from "redux";


/*Import reducer created in our app to be combined with other reducers and to create the root-reducer(this will be in store/<provider>)
    and will be able to pass is as props to our component

    Ex.
                                                Root-reducer (object composed other object)
                            {user:{currentUser:null},shop:{someShopState:null},someAnotherState:null }
                                                    |
                                userReducer -------shopReducer---------AnotherReducer
                            {currentUser:null}   {someShopState:null}      {someAnotherState:null}
                            
*/
import toDoReducer from "./todo.reducer";


export default combineReducers(
    {
        todo: toDoReducer      /* returns object based on 'toDoReducer' reducer   */
        //notToDo : notToDoReducer /* returns object based on 'noToDoReducer' reducer   */
        //and so on 
    }
)
