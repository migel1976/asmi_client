import * as axios from 'axios';

const instance=axios.create({
      baseURL:"http://localhost:3001/event/"
});

const EventApi={
  getEvents(){
        return instance.get('list')
          .then((res)=>{
            console.log('result in EventAPI.getEvents',res.data);
            return res.data;
          })
          // .catch(err=>res.send('произошла обшибка'))
      },
  setEventItem(body){
        return instance.post('add',body)
          .then((res)=>{
            console.log('result in EventAPI.setEvent',res.data);
          })
  }
}
export default EventApi;
