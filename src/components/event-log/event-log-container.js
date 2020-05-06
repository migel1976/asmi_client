import React from 'react';
import {connect} from 'react-redux';
import {getEventItems, setEventItem} from '../../redux/eventReducer';
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
                        events={this.props.events} />
        )
      }
};

const mapStateToProps=(state)=>({
  events:state.eventPage.events
});
const mapActionsToProps=({
  getEventItems,setEventItem
});
  
export default connect(mapStateToProps, mapActionsToProps)(EventLogContainer);  
