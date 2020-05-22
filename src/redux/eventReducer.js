import EventApi from '../api/event';
const initialState={
       events:[],
	   event:{},
       textareaAdd:'hi'
}

const SET_EVENTS='SET_EVENTS';
const SET_EVENT='SET_EVENT';
const TEXTEAREA_ADD='TEXTEAREA_ADD';

const eventReducer=(state=initialState,action)=>{
      // debugger;
      switch(action.type){
        case SET_EVENTS:
            return {...state,events:[...action.events]}
		case SET_EVENT:
			  return {...state,event:action.event}
        case TEXTEAREA_ADD:
            return{...state,textareaAdd:action.text}
            // return{textareaAdd:action.text}
        
        default:
          return state;
      }
};

export const textareaAddAC=(text)=>({
                  type:TEXTEAREA_ADD,
                  text});
export const setEvent=(event)=>({
				type:SET_EVENT,
				event});
          
const setEvents=(events)=>({
                  type:SET_EVENTS,
                  events});

export const getEventItem=(body)=>{
		return(dispatch)=>{
			EventApi.getEvent(body)
				.then(res=>{
                    dispatch(setEvent(res));
				})
		}
};

export const deleteEventItem=(body)=>{
        return(dispatch)=>{
              // debugger;
              EventApi.deleteEventItem(body)
                .then(res=>{
                  console.log('deleteEventItem->res',res);
                    EventApi.getEvents()
                      .then(res=>dispatch(setEvents(res)))
                })
        }
};

export const editEventItem=(body)=>{
        return (dispatch)=>{
              // debugger;
              EventApi.editEventItem(body)
                .then(res=>{
                  console.log('editEventItem->res',res);
                    EventApi.getEvents()
                      .then(res=>dispatch(setEvents(res)))
                })
        }
};


export const setEventItem=(body)=>{
		// debugger;
        return (dispatch)=>{
              EventApi.setEventItem(body)
                .then(res=>{
                  console.log('setEventItem->res',res);
                    EventApi.getEvents()
                      .then(res=>dispatch(setEvents(res)))
                })
        }
};

export const getEventItems=()=>{
        return (dispatch)=>{
                EventApi.getEvents()
                  .then(res=>{
                    console.log('getEventItems->res',res);
                    dispatch(setEvents(res));
                  })
        }
};
export default eventReducer;
