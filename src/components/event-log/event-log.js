import React from 'react';
import style from './event-log.module.css';
import AddEvent from './add-event';

class EventLog extends React.Component{ 

      eventClick=(e)=>{
        console.log(e);
        console.log(e.target);
        // console.log(e.currentTarget.dataset.id);
        console.log(e.currentTarget.dataset.name);
        let text=e.currentTarget.dataset.name || '';
        this.props.textareaAddAC(text);
      };
    
      deleteItem=(e)=>{
        const id=e.currentTarget.dataset.id;
        console.log(id);
        this.props.deleteEventItem({id:id});
      };

      render(){
          const events=this.props.events.map((event)=>(
                         <div><li
                             className={style.text}
                             key={event._id}
                             data-id={event._id}
                             data-name={event.name}
                             onClick={this.eventClick}
                              >{event.name}</li>
                             <button data-id={event._id}
                                    onClick={this.deleteItem} 
                                                >Удалить</button>
                             <button data-name={event.name} 
                                    onClick={this.eventClick}>Редактировать</button>
                          </div>
          ));
            return(
          <div className={style.event_log}>
            <h1>Журнал событий</h1>
              <AddEvent 
                      setEventItem={this.props.setEventItem}
                      editEventItem={this.props.editEventItem}
                      textareaAdd={this.props.textareaAdd}
                      textareaAddAC={this.props.textareaAddAC}
                      />
              <ul>
                {events} 
              </ul>
          </div>
      )
      }
  };
export default EventLog;
