import React from 'react';
import style from './add-event.module.css';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import  { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router'
import BackButton from '../../common/back-button/back-button';

export default class AddEvent extends React.Component{
      state={text:''};
      changeText=(e)=>{
            const text=e.target.value;
            this.setState({text});
      };
	
      submitText=(e)=>{
		    // debugger;
            e.preventDefault();
            this.props.setEventItem({name:this.state.text})
            this.setState({text:''})
			this.props.history.goBack();
      };
	
      render(){
        return(
          <div className={style.add_event}>
           <form onSubmit={this.submitText}>
            <TextField multiline rows={4}
					   variant="outlined"
                       value={this.state.text}
                       onChange={this.changeText} 
                        />
            <Input color='primary' type='submit' />
           </form>
          </div>
          )
        }
    };
