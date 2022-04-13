<template>
   <navbar-view />
    <div style="margin-top:60px">
     <v-app-bar flat app color="#181818">
          <div style="margin-left:150px">
        <v-toolbar-title class="text-uppercase ">
             <router-link to="ArticleNutrition" style="color:white">Nutrition</router-link>
             
               </v-toolbar-title> 
               </div>
              
           
           
         
  
    </v-app-bar>
  </div>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  components: { NavbarView },
    setup() {
        
    },
}
</script>