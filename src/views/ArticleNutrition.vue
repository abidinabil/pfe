<template>
<blog-view />
<div class="ArticleNutrition">
   <v-container>
       <br><br>
       <span style="color:grey">CATÉGORIE</span><br><br>
       <h1 style="color:dodgerblue">Nutrition</h1>
       <br>
       <v-icon>mdi-nutrition</v-icon> <v-icon>mdi-oar</v-icon>
   </v-container>
</div> <br><br>
<div>
     <v-container>
  <v-row >
    <v-col cols="12" md="4"  lg="4" v-for="nutrition in nutritions" :key="nutrition.title" >
   <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
      max-width="800"
      v-bind="props"
    >
      <v-img  class="bg-white" width="400px" height="300px"  :aspect-ratio="1"  src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltab5c9caf754acec9/618243e74f03d166757380a2/macronutrients_1232x630.jpg?format=pjpg&auto=webp&quality=76&width=1232" 
                   cover    >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-blue-darken-2 v-card--reveal "
            style="height: 100%; opacity: .8; "
          > 
           <p style="margin-top:220px ; margin-left:-150px ; color:white"> <v-icon style="color:white">mdi-av-timer</v-icon> temps de lecture : 10min</p> 
          </div>
        </v-expand-transition>
      </v-img>
       
    </v-card>
  </v-hover><br>
  <span style="color:dodgerblue">Nutrition</span>
   <h1 style="font-size:25px ; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">{{nutrition.title}}</h1>
   <p>{{nutrition.text}}</p>
  </v-col>
 
  </v-row>
  </v-container>
</div>



</template>
<script>
import BlogView from './BlogView.vue'
import axios from 'axios'
export default {
  components: { BlogView },
 
    data() {
        return{
             nutritions :{},
        }
    },
      created(){
      this.getNutrition();
    },
    methods:{
            getNutrition(){
       axios.get('http://localhost:8000/api/auth/getNutrition')
        .then (res => {
         console.log(res.data);
         this.nutritions = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
    }
}
</script>
<style>
.ArticleNutrition{
    margin-top:120px;
    min-height: 35vh; 
    background: lightgray; 
   
}
</style>