import React from 'react';
import {connect} from 'react-redux';
import {getEventItems, setEventItem, textareaAddAC} from '../../redux/eventReducer';
import EventAPI from '../../api/event';
import EventLog from './event-log';

class EventLogContainer extends React.Component{
      componentDidMount=()=>{
        this.props.getEventItems();
        // EventAPI.getEvents()
        //   .then(res=>this.props.setEvents(res))
        };
      
      render(){
        // debugger;
        return(
                <EventLog 
                        setEventItem={this.props.setEventItem}
                        events={this.props.events}
                        textareaAdd={this.props.textareaAdd}
                        textareaAddAC={this.props.textareaAddAC}
                />
        )
      }
};

const mapStateToProps=(state)=>({
  events:state.eventPage.events,
  textareaAdd:state.eventPage.textareaAdd

});
const mapActionsToProps=({
  getEventItems,setEventItem,textareaAddAC
});
  
export default connect(mapStateToProps, mapActionsToProps)(EventLogContainer);  
