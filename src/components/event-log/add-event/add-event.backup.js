import React from 'react';
import style from './add-event.module.css';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default class AddEvent extends React.Component{
      // state={text:''};
      changeText=(e)=>{
            const text=e.target.value;
            // this.setState({text});
            this.props.textareaAddAC(text);
      };
      submitText=(e)=>{
            // debugger;
            e.preventDefault();
            this.props.setEventItem({name:this.props.textareaAdd})
            this.props.textareaAddAC('');
            // this.props.setEventItem({name:this.state.text})
            // this.setState({text:''})
      };

      render(){
        // debugger;
        return(
          <div className={style.add_event}>
            <TextField multiline rows={4}
						variant="outlined"
                       value={this.props.textareaAdd}
                       onChange={this.changeText} 
                        />

			<Button color='primary'
					variant='outlined'
					onClick={this.submitText}>Добавить</Button>

			<Button color='primary'
					variant='outlined'>Обновить</Button>
            {
              /*<form onSubmit={this.submitText}>
              <TextField 
                      value={this.props.textareaAdd} 
                      onChange={this.changeText} />
              <Input color='primary' type='submit' />
            </form>
            */
            }
            </div>
          )
        }
    };
