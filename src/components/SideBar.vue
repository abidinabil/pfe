<template>
  <div>
<v-app-bar flat app  >
     <v-app-bar-nav-icon @click="drawer= true" ></v-app-bar-nav-icon>
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Fit</span>
   <span>Body</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat color="grey">
      <span>sign-out</span>
      <v-icon>exit_to_app</v-icon>
    </v-btn>
    
   </v-app-bar> 
   <v-navigation-drawer style="margin-top:55px ; background-color:white ;" flat app v-model="drawer"  >
      
      
      <v-list-item-group  >
         
        <v-list-item v-for="item in items" :key="item.text" router :to="item.route"  >
          <v-list-item-action style="padding:0.5rem">
            <v-icon >{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >{{item.text}}</v-list-item-title>
             
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
   
   </v-navigation-drawer>
    </div>
</template>
<script>
import PopupView from "./PopupView.vue"
export default {
    component:{PopupView},
    data() {
        return {
            drawer: true,
             items: [
        { text: 'Home', icon: 'mdi-home' , route:'/' },
        { text: 'About', icon: 'mdi-camera-image' , route:'/AboutView' },
            { text: 'Team', icon: 'mdi-account' , route:'/TeamView' },
            { text: 'Boutique', icon: 'mdi-shopping' , route:'/BoutiqueView' },
             { text: 'example', icon: 'mdi-shopping' , route:'/exampleView' },
               { text: 'login', icon: 'mdi-shopping' , route:'/loginView' },
                 { text: 'Nutrition', icon: 'mdi-shopping' , route:'/NutritionView' },
                   { text: 'Entrainement', icon: 'mdi-shopping' , route:'/EntrainementView' },
        
      ],
        }
    },
}
</script>
<style>
.v-navigation-drawer__content {
  
     height: 100%; 
     max-width: 250%; 
   
    margin-left: -80px;
}
</style>

