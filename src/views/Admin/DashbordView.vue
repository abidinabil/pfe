<template >
   <side-bar />
<v-row >
    <v-col cols="12" md="2"></v-col>
    <v-col cols="12" md="10">
     <div >
        <v-card
      style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important; margin-top:50px; "
      height="450px"
      tile
      flat   
      class="d-flex align-center "
      
    >
      <v-row style="margin-top:-150px">
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="stat in Statistics" :key="stat.title">
           <v-card
    class="mx-auto"
    max-width="250"
    max-height="300"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{stat.title}}
        </div>
        <v-icon color="red">{{stat.icon}}</v-icon>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

 
  </v-card>
        </v-col>
      
      </v-row>
    </v-card>
      <v-card tile class="mx-16 mt-n10 card1" color="white">
       <div>
  
  <v-container >
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
                            </v-card>
                            </div>
                            
                   </v-col> 
   </v-row>           
  
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
    
    data() {
      return  {
         Statistics:[
           {icon:'mdi-chart-areaspline',title:'Total User',color:'red'},
            {icon:'mdi-chart-bar-stacked',title:'Total Coach',color:'green'},
             {icon:'mdi-chart-bell-curve',title:'Total Product',text:''},
              {icon:'mdi-chart-bell-curve',title:'Total Product',text:''}
         ],
             projects: [
        { title: 'Project1', Person: 'Nabil' , date:'16/03/2022' , content:' complete'},
        { title: 'Project2', Person: 'hamouda' ,  date:'16/03/2022' ,content:' enCours'},
       { title: 'Project2', Person: 'Ayoub' ,  date:'16/03/2022' ,content:' finit '},
       { title: 'Project2', Person: 'Ayoub' ,  date:'16/03/2022' ,content:'  complete'},
          { title: 'Project4', Person: 'farah' ,  date:'16/03/2022' ,content:'  complete'},

      ],
      }
    },
    components: { SideBar }
}
</script>