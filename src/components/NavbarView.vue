<template>
<nav>
    <v-app-bar flat app color="black">
           <v-app-bar-nav-icon @click="drawer= true"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey-text">
            <span class="font-weight-light" >Fit</span>
            <span right>Body</span>
               </v-toolbar-title> 
               <v-spacer></v-spacer>
               <v-btn to="/SignIn">Se Connecter</v-btn>
                <v-btn to="SignUp" style="background-color: white ; color:black">Commencer dés maintenant</v-btn>
           
           
         
  
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary  color="primary">
        <v-layout column align-center>
         <v-flex class="ml-15">
             <v-avatar size="150">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMH6Rbg-7rqO_ShvdaxgXL4PhU60a9iynJ_Q&usqp=CAU">
             </v-avatar>
         </v-flex>
        </v-layout>
        <v-col mb="10">
         <PopupView /> </v-col>
         <v-list color="primary" >
      
      <v-list-item-group >
         
        <v-list-item v-for="item in items" :key="item.text" router :to="item.route" >
          <v-list-item-action>
            <v-icon >{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >{{item.text}}</v-list-item-title>
             
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
   
</nav>
</template>
<script>
import PopupView from "./PopupView.vue"
export default {
    component:{PopupView},
    data() {
        return {
            drawer: false,
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