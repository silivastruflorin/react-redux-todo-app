import React from 'react';
import { connect } from 'react-redux';

const TotalCompleteItems = ({TotalCompletedCount}) => {
	return <h4 className='mt-3'>Total Complete Items: {TotalCompletedCount}</h4>;
};


const mapStateToProps = (state) => (     //any time the store is updated, mapStateToProps will be called. function takes a maximum of two parameters. 
	{
		TotalCompletedCount: state.todo.TotalCompletedCount
	}	
) // returns object mapStateToProps?: (state, ownPropsObject) => Object
export default connect(mapStateToProps)(TotalCompleteItems);
