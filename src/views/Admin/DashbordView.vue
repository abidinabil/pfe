<template>
<div>
  <v-container class="my-5">
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.content}`">
          <v-col xs="12" md="6">
            <div class="caption grey--text">PROJECT TITLE</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">PERSON</div>
            <div>{{project.Person}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text"> DATE</div>
            <div>{{project.date}}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div>
             <v-chip small :class="`${project.content} white--text caption my-2`">{{project.content}}</v-chip> 
             </div>
          </v-col>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
    
   
  

</div>
</template>

<script>
import { defineComponent } from 'vue';

// Components


export default defineComponent({
  name: 'HomeView',

data(){
       return{ 
         projects: [
        { title: 'Project1', Person: 'Nabil' , date:'16/03/2022' , content:' complete'},
        { title: 'Project2', Person: 'Ayoub' ,  date:'16/03/2022' ,content:' enCours'},
       { title: 'Project2', Person: 'Ayoub' ,  date:'16/03/2022' ,content:' finit '},
       { title: 'Project2', Person: 'Ayoub' ,  date:'16/03/2022' ,content:'  complete'},

      ],
      
       }
}
});
</script>

<style>

.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.enCours{
  border-left: 4px solid orange;
}
.project.finit{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  border-left: 4px solid #3cd1c2;
}
.v-chip.enCours{
  border-left: 4px solid orange;
}
.v-chip.finit{
  border-left: 4px solid tomato;
}
</style>


