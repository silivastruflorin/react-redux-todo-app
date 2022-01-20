
//receives the item as paramter

export const addItem = item => {
    return(
        {
            type:'ADD_ITEM',
            payload: item
        }

    )
}

export const toggleCompleteItem = item => {
    return(
        {
            type:'TOGGLE_COMPLETE_ITEM',
            payload: item
        }

    )
}

