import EventApi from '../api/event';
const initialState={
       events:[],
       textareaAdd:'hi'
}

const SET_EVENTS='SET_EVENTS';
const TEXTEAREA_ADD='TEXTEAREA_ADD';

const eventReducer=(state=initialState,action)=>{
      // debugger;
      switch(action.type){
        case SET_EVENTS:
            return {...state,events:[...action.events]}

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
          
const setEvents=(events)=>({
                  type:SET_EVENTS,
                  events});

export const setEventItem=(body)=>{
        return (dispatch)=>{
              // debugger;
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
