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
            console.log('result in EventAPI.setEventItem',res.data);
          })
  }
  ,
  editEventItem(body){
        return instance.put('edit',body)
          .them((res)=>{
            console.log('result in EventApi.editEventItem',res.data);
          })
  }
}
export default EventApi;
