import React from 'react';
import Button from '@material-ui/core/Button';
import style from './edit-event.module.css';

export default class EditEvent extends React.Component{
		state={
			desc:this.props.event.desc,
			// name:this.props.event.name,
			// id:this.props.event._id
		};
	
	// componentDidMount=()=>{
	// 	debugger;
	// 	this.setState({
	// 		desc:this.props.event.desc,
	// 		name:this.props.event.name,
	// 		id:this.props.event._id
	// 	});
	// };

	changeText=(e)=>{
		const text=e.target.value;
		const event={_id:this.props.event._id,
				     name:this.props.event.name,
					 desc:text};
		this.props.setEvent(event);
		// this.setState({desc:text});
	};
	
	save=(e)=>{

      // editUpdateClick=(e)=>{
      //   // debugger;
      //   const id=e.currentTarget.dataset.id;
      //   // const name=e.currentTarget.dataset.name || '';
      //   const name=this.props.textareaAdd;
         // this.props.editEventItem({this.state.id,this.state.name,this.state.desc});
		 debugger;
		 const id=this.props.event._id;
		 const name=this.props.event.name;
		 const desc=this.props.event.desc;
		 // const desc=this.state.desc;

         this.props.editEventItem({id,name,desc});
		 this.props.history.goBack();
      };

    cancel=(e)=>{
		this.props.history.goBack();
	};

	render(){
		console.log('edit-event.render->this.props.event',this.props.event);
		return(
			<div className={style.edit_event}>
			   <div>
				<textarea
					// value={this.state.desc}
					value={this.props.event.desc}
					onChange={this.changeText}
					/>
			   </div>
			   <div>
				<Button onClick={this.save}>Сохранить</Button>
			   </div>
			   <div>
				<Button onClick={this.cancel}>Оменить</Button>	
			   </div>
			</div>
		)
	};
};
