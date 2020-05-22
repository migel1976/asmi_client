import React from 'react';
import EditEvent from './edit-event';
import {setEvent,getEventItem,editEventItem} from '../../../redux/eventReducer';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


class EditEventContainer extends React.Component{
	componentDidMount=()=>{
		// debugger;
        let id = this.props.match.params.id;
		console.log('id in EditEventContainer',id);
		this.props.getEventItem({id});
		console.log('Edit-event-container.componentDidMount->this.props.event:',this.props.event);
	};
	
	render(){
			return(
					<EditEvent 
				        {...this.props}
						event={this.props.event}
						setEvent={this.props.setEvent}
							/>
			)
	}
};

const mapStateToProps=(state)=>({
	event:state.eventPage.event
});

const mapDispatchToProps={
	getEventItem,
	editEventItem,
	setEvent
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditEventContainer));



