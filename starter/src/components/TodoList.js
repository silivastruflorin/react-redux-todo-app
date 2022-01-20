import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({currentListItemsRetrived,toggleCompletedItemMapped}) => {
	// const todos = [
	// 	{ id: 1, title: 'todo1', completed: false },
	// 	{ id: 2, title: 'todo2', completed: false },
	// 	{ id: 3, title: 'todo3', completed: true },
	// 	{ id: 4, title: 'todo4', completed: false },
	// 	{ id: 5, title: 'todo5', completed: false },
	// ];



	return (
		<ul className='list-group'>
			{currentListItemsRetrived.map((todo) => (
				<TodoItem key={todo.id} item={todo} />
			))}
		</ul>
	);
};

const mapStateToProps = (state) => (     //any time the store is updated, mapStateToProps will be called. function takes a maximum of two parameters. 
	{
		currentListItemsRetrived : state.todo.currentListItems,    //retrives the currentListItems from state.reducerKey from rootReducer and puts it on currentListItemsRetreived to be used in component
		// totalItemCount: state.todo.itemCount               // not needed here for now
	}	
) // returns object mapStateToProps?: (state, ownPropsObject) => Object



export default connect(mapStateToProps)(TodoList);
