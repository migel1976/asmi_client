import EventApi from '../api/event';
const initialState={
       events:[]
}

const SET_EVENTS='SET_EVENTS';

const eventReducer=(state=initialState,action)=>{
      switch(action.type){
        case SET_EVENTS:
            return {...state,events:[...action.events]}
        
        default:
          return state;
      }
};
          
const setEvents=(events)=>({
                  type:SET_EVENTS,
                  events});

export const setEventItem=(body)=>{
        return (dispatch)=>{
              debugger;
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
