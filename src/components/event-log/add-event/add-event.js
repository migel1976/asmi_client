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
      state={name:'',desc:''};
      changeName=(e)=>{
            const text=e.target.value;
            this.setState({text});
      };

	  changeDesc=(e)=>{
			const desc=e.target.value;
			this.setState({desc});
	  };
	
      submitText=(e)=>{
		    // debugger;
            e.preventDefault();
            this.props.setEventItem({name:this.state.text,desc:this.state.desc})
		    this.setState({text:'',desc:''})
			this.props.history.goBack();
      };
	
	  cancel=(e)=>{
			e.preventDefault();
			this.props.history.goBack();
	  };
	
      render(){
        return(
		  <div className={style.add_event}>
			<div className={style.text}>
				<InputLabel color='primary'>Заголовок</InputLabel>
				<input	   placeholder='введите заголовок'
						   variant="outlined"
						   value={this.state.text}
						   onChange={this.changeName} 
							/>
				<InputLabel color='primary'>Описание</InputLabel>
				<textarea placeholder='введите описание'
							onChange={this.changeDesc}
							/>
			</div>
		<div>
			<Button color='primary'
					variant='outlined'
					onClick={this.submitText}
					>Сохранить</Button>
			<Button color='primary' 
					variant='outlined'
					onClick={this.cancel}
					>Отменить</Button>
			</div>
          </div>
          )
        }
    };
