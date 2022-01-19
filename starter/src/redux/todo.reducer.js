const INITIAL_STATE = {
    currentListItems: [{ id: 1, title: 'todo1', completed: false }]
}

const toDoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return(
                {
                    ...state, //spred the existing state
                    currentListItems: [...state.currentListItems,action.payload]  //spread the existing items in the list and add the new item
                }
            )

        default:
            return state;
            
    }
        

}

export default toDoReducer;