
//receives the item as paramter

const addItem = itemTitle => {
    return(
        {
            type:'ADD_ITEM',
            payload: itemTitle
        }

    )
}

export default addItem;