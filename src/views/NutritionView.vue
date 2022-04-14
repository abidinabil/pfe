<template>
   <navbar-view />
   <div class="pe">
   <div class="Nutrition">
       <v-row >
      <v-col  cols="12" xs="12" sm="6" md="12" lg="12" class="text-align:center">
            <h2 class="text-align:center" style="color:white">Welcome to FitBodt</h2>
            
            <p style="color:aliceblue ; font-size:20px"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem animi eveniet voluptate beatae, facilis vitae 
              rerum perspiciatis blanditiis porro, unde, sunt optio similique quidem ab. Veniam laudantium tempore dolore.</p>
           <v-btn to="ArticleNutrition" style="background-color: white ; color:black" >Commencer dés maintenant</v-btn>    
      </v-col>
      </v-row>
 
   </div>
         <div class="ss" >
    <v-row
      class="fill-height"
      align="center"
      justify="center"
      
    >
      <template v-for="(item, i) in items" :key="i">
        <v-col
          cols="12"
          md="6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
            >
              <v-img
                :src="item.img"
                height="350px"
                cover
              >
                <v-card-title class="text-h6 text-white d-flex flex-column">
                  
                      <h1 class="ma-0 my-10  font-weight-bold"  style="font-size:25px ; color:white">
                      {{ item.text }}
                    </h1>
                    <p class="ma-0 my-10  font-weight-bold"  style="font-size:15px ; color:white" >
                      {{ item.subtext }}
                    </p>
                  

                  
                </v-card-title>
            
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </div>
  <div class="success">
        <div class="text-center">
           <h2 class="text-align:center" style="color:white">Success stories</h2>
            
            <p style="color:aliceblue ; "  >D’autres sont déjà sur le chemin de l'excellence. Vous n’êtes  qu’à un pas de votre propre success story. Franchissez-le.</p>
              <v-row>
              <v-col  class="text-center" xs="4" md="6">
              <v-img src="https://i.pinimg.com/564x/3d/e5/98/3de5989427cedef7b249eb5ec3212ce2.jpg">
              
              </v-img>
              </v-col>
                <v-col  class="text-center" xs="4" md="6">
              <v-img src="https://metro.co.uk/wp-content/uploads/2017/07/capture22.png"></v-img>
              </v-col>
          
              </v-row>
              <br>
              <p style="color:aliceblue ; "  >Les résultats peuvent varier en fonction de votre niveau sportif, votre entraînement et votre alimentation.</p><br>
                <v-btn to="ArticleNutrition" style="background-color: white ; color:black">Commencer a manger sainement</v-btn>      
        </div>
  </div>

  
        <div class="mange" style="margin-top:-20px">
            <v-container>
                   <h2 class="text-align:center" style="color:white">Welcome to FitBodt</h2>
            </v-container>
            
        </div>
         </div>

</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  components: { NavbarView },
    data() {
        return{
           
      items: [
        {
          
          text: `Des recettes gourmandes et de qualité`,
          subtext: 'Que vous souhaitiez perdre du poids, vous muscler ou améliorer votre santé en général, atteignez votre objectif en mangeant des plats gourmands et de qualité.',
          img: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt63bfd2532c42e874/5ef5b172254cfa2a5271f6ef/tile-1.jpg?auto=webp&quality=85&format=pjpg',
        },
        {
  
          text: 'Sur mesure',
          subtext: 'Ce n’est pas une solution de régime universelle, ce sont des habitudes alimentaires adaptées à vos préférences, à vos besoins et à vos objectifs personnels.',
          img: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf3eaf3ec9f996147/5ef5b18f6718dc1e5b4e3c3e/tile-2.jpg?auto=webp&quality=85&format=pjpg',
        },
        {
 
          text: 'Des résultats durables',
          subtext: 'Des habitudes alimentaires conçues pour vous aider à atteindre vos objectifs et à vous y tenir, comme aucun régime ne pourra le faire.',
          img: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blteb9d813298a900d2/5ef5b1a4fae1631405302c0d/tile-3.jpg?auto=webp&quality=85&format=pjpg',
        },
              {
 
          text: 'Extrêmement motivant',
          subtext: 'Un Coach numérique de pointe qui vous encourage et vous donne des recommandations basées sur des recherches scientifiques avancées.',
          img: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt4c5efcb95a5c3208/5ef5b1bea70f3113ff9e1bbf/tile-4.jpg?auto=webp&quality=85&format=pjpg',
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
        }
        
    },
}
</script>
<style>

.Nutrition{
    
    min-height: 105vh;
    min-width: 57vh;
   
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
   background-image: url("https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt0d55179f870e70d1/5ef49e633dd98f4328d6b424/desktop.jpg?auto=webp&quality=85&format=pjpg");
  
}
.success{
    
    min-height: 75vh;
    min-width: 57vh;
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
   
  
    background-color: black;
    
  
}
.mange{
    
    min-height: 105vh;
    min-width: 57vh;
    margin-top: 62px;
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
   background-image: url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  
}
  .v-card {
    transition: opacity .4s ease-in-out;
  }
  .ss   .v-card:not(.on-hover){
       opacity: 0.6;
  }

 
  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
 
</style>
    

