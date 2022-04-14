<template>
  <div>
<v-app-bar flat app     style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important;  ">
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
    <br>
    <v-text-field
            
            label="Search"
            prepend-inner-icon="mdi-account-search"
            variant="outlined"
            width="250"
          ></v-text-field>
        <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    
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
        { text: 'Dashboard', icon: 'mdi-view-dashboard' , route:'/DashbordView' },
        { text: 'Exercice', icon: 'mdi-dumbbell' , route:'/GestionExercice' },
            { text: 'Nutrition', icon: 'mdi-nutrition' , route:'/GestionNutrition' },
            { text: 'Nutritionniste', icon: 'mdi-account' , route:'/GestionNutritionniste' },
           
        
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

