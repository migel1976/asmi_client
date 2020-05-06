import React from 'react';
import style from './add-event.module.css';

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
      };

      render(){
        return(
          <div className={style.add_event}>
          <form onSubmit={this.submitText}>
            <textarea 
                    value={this.state.text} 
                    onChange={this.changeText} />
            <input type='submit' />
          </form>
          </div>
        )
      }
};
