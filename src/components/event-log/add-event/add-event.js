import React from 'react';
import style from './add-event.module.css';
import TextField from '@material-ui/core/TextField';
import {InputLabel} from '@material-ui/core';
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
		   {/*<form onSubmit={this.submitText}>*/}
			<div className={style.text}>
				<InputLabel color='primary'>Заголовок</InputLabel>
			 	{/*<input */}
				{/*<TextField multiline rows={1}*/}
				<input	   placeholder='введите заголовок'
						   variant="outlined"
						   value={this.state.text}
						   onChange={this.changeText} 
						   // className={style.input}
							/>
			<InputLabel color='primary'>Описание</InputLabel>
			<textarea placeholder='введите описание' />
			{/*<TextField multiline rows={10}*/}
					   {/*variant='outlined'*/}
					   {/*className={style.input}		   */}
						{/*/>*/}
				</div>
			<div>
			<Button color='primary' variant='outlined'>Сохранить</Button>
			<Button color='primary' variant='outlined'>Отменить</Button>
			</div>
            {/*<Input color='primary' type='submit' />*/}
           {/*</form>*/}
          </div>
          )
        }
    };
