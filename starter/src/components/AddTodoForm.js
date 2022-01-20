import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addItem, toggleCompleteItem} from '../redux/todo.actions';

const AddTodoForm = ({currentListItemsRetrived,additemActionMapped,toggleCompletedItemMapped}) => {
	const [value, setValue] = useState('');
	const [itemExists, setItemExists] = useState('');       //hook used to change value in div if item that we try to add already exists.

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
		// adauga la state ul curent noul todo cu valoarea din <input>

		//check if input value already exists in the listItems 
		if (currentListItemsRetrived.some(item => item.title === value)) {     //to see item(every object in currentListItemsRetrived) structure go to tot.reducer.js 
			setItemExists('Already present in array');
		}else{
			additemActionMapped(value);
			setItemExists('');
		}
		
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
		
			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
			<div>{itemExists}</div>			
		</form>
	);
};

const mapStateToProps = (state) => (     //any time the store is updated, mapStateToProps will be called. function takes a maximum of two parameters. 
	{
		currentListItemsRetrived : state.todo.currentListItems    //retrives the currentListItems from state.reducerKey from rootReducer and puts it on currentListItemsRetreived to be used in component
	}	
) // returns object mapStateToProps?: (state, ownPropsObject) => Object


const mapDispatchToProps = (dispatch) => {
	return{
		additemActionMapped : (item) => dispatch(addItem(item)),
		toggleCompletedItemMapped : (item) => dispatch(toggleCompleteItem(item))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodoForm);
