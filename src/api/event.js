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
	getEvent(id){
		// return instance.get('id',body)
		// axios.get('list/?find='+symbol)
		// debugger;
		const myid=id.id;
		return instance.get('?id='+myid)
		   .then((res)=>{
				console.log('result is EventApi.getEvent',res.data);
				return res.data;
		   })
	},
  setEventItem(body){
        return instance.post('add',body)
          .then((res)=>{
            console.log('result in EventAPI.setEventItem',res.data);
          })
  }
  ,
  editEventItem(body){
        // return instance.put('edit',{data:{id:body.id,name:body.name}})
        debugger;
        return instance.put('edit',body)
          .then((res)=>{
            console.log('result in EventApi.editEventItem',res.data);
          })
  },
  deleteEventItem(body){
        debugger;
        return instance.delete('delete',{data:{id:body.id}})
          .then((res)=>{
            console.log('result in EventApi.deleteEventItem',res.data);
          })
  }
}
export default EventApi;
