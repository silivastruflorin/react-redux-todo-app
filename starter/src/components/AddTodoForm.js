import React, { useState } from 'react';
import {connect} from 'react-redux';

const AddTodoForm = ({currentListItemsRetrived}) => {
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
		// adauga la state ul curent noul todo cu valoarea din <input>
		console.log(currentListItemsRetrived);
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
		</form>
	);
};

const mapStateToProps = (state) => (     //any time the store is updated, mapStateToProps will be called. function takes a maximum of two parameters. 
	{
		currentListItemsRetrived : state.todo.currentListItems    //retrives the currentListItems from state.reducerKey from rootReducer and puts it on currentListItemsRetreived to be used in component
	}	
) // returns object mapStateToProps?: (state, ownPropsObject) => Object

export default connect(mapStateToProps)(AddTodoForm);
