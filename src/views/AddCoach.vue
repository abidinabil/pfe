<template>
<div style="margin-top:100px">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="coach in coachs" :key="coach.id">
         <td>{{coach.id}}</td>
      <td>{{coach.phone}}</td>
      <td>{{coach.name}}</td>
      <td>{{coach.email}}</td>
    </tr>
  
  </tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'


export default {
  data() {
     return {
      coachs:{}
       
     }
    
  },
  created(){
      this.getcoach();
    },
   methods: {
     getcoach(){
       axios.get('http://localhost:8000/api/auth/coach')
        .then (res => {
         console.log(res.data);
         this.coachs = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
       )
     },
     mounted() {
       console.log('Coach ')
     },
   },
  
 
}
</script>