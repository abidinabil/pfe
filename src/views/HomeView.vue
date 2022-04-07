<template>
<navbar-view />
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

  <v-row justify="center">
    <v-dialog
      v-model="home"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="home = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="home = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          lines="two"
          subheader
        >
          <v-subheader>User Controls</v-subheader>
          <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
          <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          lines="two"
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
            <template v-slot:prepend>
              <v-checkbox v-model="notifications"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
            <template v-slot:prepend>
              <v-checkbox v-model="sound"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
            <template v-slot:prepend>
              <v-checkbox v-model="widgets"></v-checkbox>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
 
</template>

<script>
import { defineComponent } from 'vue';

// Components

import NavbarView from '@/components/NavbarView.vue';
export default defineComponent({
  name: 'HomeView',
  components:{
    NavbarView
  },

data(){
       return{ 
          home: false,
        notifications: false,
        sound: true,
        widgets: false,
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


