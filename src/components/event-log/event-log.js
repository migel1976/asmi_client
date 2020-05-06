import React from 'react';
import style from './event-log.module.css';
import AddEvent from './add-event';

class EventLog extends React.Component{ 

      eventClick=(e)=>{
        console.log(e.currentTarget.dataset.id);
        console.log(e.currentTarget.dataset.name);
      };

      render(){
          const events=this.props.events.map((event)=>(
                         <li
                             className={style.text}
                             key={event._id}
                             data-id={event._id}
                             data-name={event.name}
                             onClick={this.eventClick}
                              >{event.name}</li>
          ));
            return(
          <div className={style.event_log}>
            <h1>Журнал событий</h1>
              <AddEvent setEventItem={this.props.setEventItem} />
              <ul>
                {events} 
              </ul>
          </div>
      )
      }
  };
export default EventLog;
