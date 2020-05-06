import React from 'react';
import {Route} from 'react-router-dom';
import style from './app.module.css';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Main from '../main/main';
import EventLogContainer from '../event-log/event-log-container';

const App=()=>{
  return(
          <div className={style.app}>
            <Header />
            <Navbar />
            <div className={style.app_content}>
              <Route exact path='/' render={()=><Main />} />
              <Route path='/eventlog' render={()=><EventLogContainer />} />
            </div>
          </div>
  )
};
export default App;

