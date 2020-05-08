import React from 'react';
import ReactDOM from 'react-dom';
import style from './event-log.module.css';
// import AddEvent from './add-event';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Switch, Link, NavLink, Route} from 'react-router-dom';

class EventLog extends React.Component{ 

      editClick=(e)=>{
        console.log(e.currentTarget.dataset.name);
        let text=e.currentTarget.dataset.name || '';
        this.props.textareaAddAC(text);
      };
    
      editUpdateClick=(e)=>{
        // debugger;
        const id=e.currentTarget.dataset.id;
        // const name=e.currentTarget.dataset.name || '';
        const name=this.props.textareaAdd;
        this.props.editEventItem({id,name});
      };
    
      deleteItem=(e)=>{
        const id=e.currentTarget.dataset.id;
        console.log(id);
        this.props.deleteEventItem({id});
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
                                    onClick={this.editClick}>Редактировать</button>
                             <button data-id={event._id}
                                    data-name={event.name}
                                    onClick={this.editUpdateClick}>Обновить</button>
                          </div>
          ));
			// const addEventComponent=()=>{
			// 	return (<AddEvent 
			// 	    	setEventItem={this.props.setEventItem}
                      // editEventItem={this.props.editEventItem}
                      // textareaAdd={this.props.textareaAdd}
                      // textareaAddAC={this.props.textareaAddAC}
			// 	/>
			// 	)

			// 	// <BrowserRouter>
			//   // // <NavLink to='/add-event-page'>Добавить</NavLink>	
			//   //  <Route path='/add-event-page' render={addEventComponent} />
			// 	// </BrowserRouter>
			// };

            return(
          <div className={style.event_log}>
            <h1>Журнал событий</h1>
				    <NavLink to='/add-event-page'>Добавить</NavLink>	
              <ul>
                {events} 
              </ul>
          </div>
      )
      }
  };
export default EventLog;
