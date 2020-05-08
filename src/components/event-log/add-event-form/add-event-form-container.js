import React from 'react';
import AddEvent from './add-event';
import {setEventItem} from '../../redux/eventReducer';

class AddEventFormContainer extends React.Component{
	render(){
		return(
				<AddEvent 
					setEventItem={this.props.setEventItem}
				/>	
		)
	};
};

const mapStateToProps=(state)=>({});
const mapDispatchToProps=(dispatch)=>({
	setEventItem
});

export default connect(mapStateToProps,mapDispatchToProps)(AddEventFormContainer);
