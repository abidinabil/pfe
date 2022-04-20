<template>
<navbar-view />
<div style="margin-top:150px">
  
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
  <v-container>
  <v-row >
    <v-col cols="12" md="4"  lg="4" v-for="project in projects" :key="project.title">
   <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
      max-width="600"
      v-bind="props"
    >
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-blue-darken-2 v-card--reveal "
            style="height: 100%;"
          >
           <p style="margin-top:100px"> temps de lecture</p> 
          </div>
        </v-expand-transition>
      </v-img>
       
    </v-card>
  </v-hover>
   <h1 >{{project.title}}</h1>
   <p>{{project.Person}}</p>
  </v-col>
 
  </v-row>
  </v-container>
  <br>
 
  <form action="" @submit.prevent="submit">
      <input type="text" v-model="name">
    <input type="file" @change="onChange">
    <input type="submit" value="upload">
 
  </form>
 
</template>

<script>
import { defineComponent } from 'vue';

// Components

import NavbarView from '@/components/NavbarView.vue';
import axios from 'axios';




export default defineComponent({
  name: 'HomeView',
  components:{
    NavbarView
  },

data(){
  return{
    image:null,
    name:"",
    
  }
},
  methods: {
        /* imageChange(){
           for(let i =0 ; i<this.$refs.files.files.lenght ; i++){
             this.images.push(this.$refs.files.files[i]);
             console.log(this.images)
           }
         },
         uploadImage(){
           var self = this;
           let formData = new FormData();
           for(let i = 0 ; i< this.images.lenght;i++){
             let file =self.images[i];
             formData.append('files [' +i + ']' , file);
           }
          
            console.log(formData)
            axios.post('http://localhost:8000/api/auth/SaveImages',formData , {
              text:this.text,
            }).then(response =>{
               
              self.$refs.files.value='';
              self.images =[];
               console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
         } */

         onChange(e){
           console.log("selected file", e.target.files[0])
           this.image = e.target.files[0]; 
         },
         submit(){
           let fd = new FormData();
           
         
           console.log(FormData)
            console.log(this.name)
           fd.append('images', this.image);
            fd.append('name', this.name);
           
      
           axios.post("http://localhost:8000/api/auth/SaveImages" ,fd , { 
           
           })
          
           .then(res=>{
             console.log("Response" , res.data);
               if(res.status == 200){
                    alert('success');
                    
               }else{
                 alert('error')
               }
             
           })
         },
         
       },

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


