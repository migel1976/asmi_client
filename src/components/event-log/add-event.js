import React from 'react';
import style from './add-event.module.css';

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
          <form onSubmit={this.submitText}>
            <textarea 
                    value={this.props.textareaAdd} 
                    onChange={this.changeText} />
            <input type='submit' />
          </form>
          </div>
        )
      }
};
