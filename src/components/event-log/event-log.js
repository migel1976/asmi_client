import React from 'react';
import ReactDOM from 'react-dom';
import style from './event-log.module.css';
// import AddEvent from './add-event';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Switch, Link, NavLink, Route} from 'react-router-dom';

class EventLog extends React.Component{ 

      editClick=(e)=>{
        // console.log(e.currentTarget.dataset.name);
        // let text=e.currentTarget.dataset.name || '';
        // this.props.textareaAddAC(text);
		// return <NavLink to='/edit-event' />
      };
    
      // editUpdateClick=(e)=>{
      //   // debugger;
      //   const id=e.currentTarget.dataset.id;
      //   // const name=e.currentTarget.dataset.name || '';
      //   const name=this.props.textareaAdd;
      //   this.props.editEventItem({id,name});
      // };
    
      deleteItem=(e)=>{
        const id=e.currentTarget.dataset.id;
        console.log(id);
        this.props.deleteEventItem({id});
      };

      render(){
          const events=this.props.events.map((event)=>(
                         <div><NavLink to={'/edit-event-page/'+event._id}>
							<div
                             className={style.text}
                             key={event._id}
                             data-id={event._id}
                             data-name={event.name}
                             onClick={this.eventClick}
                              >{event.name}</div>
							</NavLink>
			  
							 <div><span className={style.desc}>
									{event.desc}</span></div>

                             <button data-id={event._id}
                                    onClick={this.deleteItem} 
                                                >Удалить</button>


                             {/*<button data-name={event.name} */}
                                    {/*onClick={this.editClick}>Редактировать</button>*/}
                             {/*<button data-id={event._id}*/}
                                    {/*data-name={event.name}*/}
                                    {/*onClick={this.editUpdateClick}>Обновить</button>*/}
                          </div>
          ));

            return(
          <div className={style.event_log}>
            <h1>Журнал событий</h1>
				    <NavLink to='/add-event-page'>Добавить</NavLink>	
				<hr />
                {events} 
          </div>
      )
      }
  };
export default EventLog;
