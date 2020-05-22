import React from 'react';
import {Route} from 'react-router-dom';
import style from './app.module.css';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Main from '../main/main';
import EventLogContainer from '../event-log/event-log-container';
import AddEventContainer from '../event-log/add-event/add-event-container';
import EditEventContainer from '../event-log/edit-event/edit-event-container';
import {useHistory} from "react-router-dom";

const App=()=>{
  let history = useHistory();
  const eventLogComponent=()=>{
	  return(<EventLogContainer />);
  };

  return(
          <div className={style.app}>
            <Header />
            <Navbar />
            <div className={style.app_content}>
              <Route exact path='/' render={()=><Main />} />
              <Route path='/eventlog' render={eventLogComponent} />
			  <Route path='/add-event-page' render={()=><AddEventContainer history={history}/>} />
			  <Route path='/edit-event-page/:id?' render={()=><EditEventContainer history={history}/>} />
			  {/*<Route path='/edit-event-page/:id?' render={()=><EditEventContainer />} />*/}
			</div>
          </div>
  )
};
export default App;

