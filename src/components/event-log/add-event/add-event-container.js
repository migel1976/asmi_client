import React from 'react';
import AddEvent from './add-event';
import {setEventItem} from '../../../redux/eventReducer';
import {connect} from 'react-redux';

class AddEventFormContainer extends React.Component{
	render(){
		return(
				<AddEvent 
					{...this.props} 
					setEventItem={this.props.setEventItem}
				/>	
		)
	};
};


const mapStateToProps=(state)=>({
});

const mapDispatchToProps=({
	setEventItem
});

export default connect(mapStateToProps,mapDispatchToProps)(AddEventFormContainer);
