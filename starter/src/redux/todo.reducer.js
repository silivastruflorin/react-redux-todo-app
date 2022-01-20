const INITIAL_STATE = {
    uniueId: 0,    //will be used inside the item as id
    currentListItems: [],
    TotalCompletedCount: 0
}

const toDoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return(
                {
                    ...state, //spred the existing state
                    currentListItems: [...state.currentListItems,
                                            { 
                                                id: state.uniueId ,  //will increment every time an 
                                                title: action.payload,
                                                completed: false         //default value
                                            }
                                        ],  //spread the existing items in the list and add the new item
                    uniueId: state.uniueId + 1, // increment id every time we add an item but will not be changed by deleteItem
                }
            )
        case 'TOGGLE_COMPLETE_ITEM': 
            //copy the currentListItems(using .map) from the prevstate and then modify 'completed' property based on item.id
            let newCurrentListItems= state.currentListItems.map(item => item.id === action.payload.id ? {...item, completed:!action.payload.completed } : item);
            return (
                {
                    ...state, 
                    currentListItems: newCurrentListItems,
                    //filter currentListItems based on completed property then take lenght of the filtered array to count the number of todos completed
                    TotalCompletedCount: newCurrentListItems.filter(item => item.completed === true).length                                

                }
            )

        default:
            return state;
            
    }
        

}

export default toDoReducer;