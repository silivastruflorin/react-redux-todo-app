import React from 'react';
import { connect } from 'react-redux';
import {toggleCompleteItem} from '../redux/todo.actions';


const TodoItem = ({item,toggleCompletedItemMapped}) => {

	const handleOnClick = () => {
		toggleCompletedItemMapped(item)
	}

	return (
		<li className={`list-group-item ${item.completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={item.completed} onChange={handleOnClick}></input>
					{item.title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};


const mapDispatchToProps = (dispatch) => {
	return{
		toggleCompletedItemMapped : (item) => dispatch(toggleCompleteItem(item))
	}
}

export default connect(null,mapDispatchToProps)(TodoItem);
