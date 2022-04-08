<template>
   <navbar-view />
    <div class="Entrainement">
          <v-container >
    <v-row class="r1">
      <v-col  cols="12" xs="12" sm="6" md="6" lg="6">
            <h2 class="test" style="color:white">L’IA se charge de la préparation, et vous, de la transpiration</h2>
            
            <p style="color:aliceblue">D’innombrables combinaisons possibles avec plus de 350 exercices pour que vous gardiez la motivation et la forme.</p>
           <v-btn style="background-color: white ; color:black" >Commencer dés maintenant</v-btn>    
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6">
        <v-img  src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt3a8efbd6d1fa12ec/61c9aa323d2b1760404ede29/1104_x_1264_female_(2).jpg?auto=webp&quality=85&format=pjpg&width=878" style="height:550px ; "  ></v-img>
      </v-col>
    </v-row>
   </v-container><br><br>
    </div>
   
      <v-container style="padding:5rem" >
   <h4 class="text-center" style="color:black"> Vos avantages avec le Coach <br> FitBody</h4><br><br>
 
   
     <v-row>
        <v-col cols="12" xs="12"  md="6" lg="6" v-for="Object in Objects" :key="Object.title">
       <v-card
    class="mx-auto"
   min-height="150"
    dark
    max-width="400"
  >
    <v-list-item three-line>
      <v-list-item-content>
       
        <v-icon style="font-size:50px">{{Object.icon}}</v-icon>
        <br>
        <p style="font-size:20px ;  padding: 3rem">{{Object.text}}</p>
      </v-list-item-content>

    </v-list-item>

 
  </v-card>
        </v-col>
      
      </v-row>
    </v-container>
   <div class="training">
     
    <v-row >
                <v-col cols="12" xs="12" md="3" lg="3" style="margin-top:220px">
                    <p style="color:white">Training Journey</p>
                    <h1 style="color:white">
                        Des séances d’entraînement conçues spécifiquement pour vous
                    </h1>
                    <p style="color:white">
                        Votre Coach analyse votre forme physique et vos objectifs. Et, plus vous vous entraînez, plus il s'adapte à vous.
                    </p>
                     <v-btn style="margin-left:50px" depressed color="white">  learn about training <v-icon>mdi-arrow-right</v-icon> </v-btn>
                
                </v-col>
                  <v-col cols="12" xs="12" md="3" lg="3">
                   <v-img  class="bg-white" width="300"  height="380px" :aspect-ratio="1"  src="https://images.pexels.com/photos/6456303/pexels-photo-6456303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                   cover  style="margin-top : 130px"  >
                    <p style="color:white; padding:5rem" class="text-center">OPTIMISER LA FORCE ET L'ENDURANCE</p>
                   </v-img>
                </v-col>
                       
                       

                <v-col cols="12" xs="12" md="3" lg="3">
                   <v-img  class="bg-white" width="300" height="380px"  :aspect-ratio="1"  src="https://images.pexels.com/photos/6456305/pexels-photo-6456305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                   cover  style="margin-top: 200px"  >
                    <p style="color:white; padding:5rem" class="text-center">DÉBUTER EN FORCE</p>
                   </v-img>
                </v-col>
                   <v-col cols="12" xs="12" md="3" lg="3">
                   <v-img  class="bg-white" width="300" height="380px"   :aspect-ratio="1"  src="https://images.pexels.com/photos/6455950/pexels-photo-6455950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                   cover  style="margin-top: 60px"  >
                    <p style="color:white; padding:5rem" class="text-center">COURIR ET MAIGRIR</p>
                   </v-img>
                </v-col>
                <v-col cols="12" md="3"></v-col>
                    <v-col cols="12" xs="12" md="3" lg="3">
                   <v-img  class="bg-white" width="300" height="380px"  :aspect-ratio="1"  src="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                   cover  style="margin-top:-120px"  >
                    <p style="color:white; padding:5rem" class="text-center">PERDRE DU POIDS</p>
                   </v-img>
                </v-col>
                     <v-col cols="12" xs="12" md="3" lg="3">
                   <v-img  class="bg-white" width="300" height="380px"  :aspect-ratio="1"  src="https://images.pexels.com/photos/2098007/pexels-photo-2098007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                   cover  style="margin-top:-50px"  >
                    <p style="color:white; padding:5rem" class="text-center">MUSCULATION HYBRIDE</p>
                   </v-img>
                </v-col>
                  <v-col cols="12" xs="12" md="3" lg="3">
                   <v-img  class="bg-white" width="300" height="380px"  :aspect-ratio="1"  src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                   cover  style="margin-top:-180px"  >
                    <p style="color:white; padding:5rem" class="text-center">ENTRAÎNEMENT EXPRESS</p>
                   </v-img>
                </v-col>
            </v-row>
    
   </div>
   <div class="training1" >
       <h2  class="text-center" style="color:white"> Comment l'appli <br> d'entraînement FitBody <br> fonctionne</h2><br><br>
       <br>
       <br>
       <v-row>
         <v-col cols="12" md="6">
              <v-timeline style="color:aliceblue">
    <v-timeline-item

      v-for="(etape, i) in etapes"
      :key="i"
      color="white"
      size="small"
    >
      <template v-slot:opposite>
        <p style="color:aliceblue">
          {{etape.step}}
        </p>
       
      </template>
      <div class="py-4">
         <span style="color:white"
          :class="`headline font-weight-bold text-${etape.color}`"
          v-text="etape.title"
        ></span>
        <p style="color:white">
          {{etape.text}}
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
         </v-col>
         <v-col md="2"></v-col>
         <v-col cols="12" md="4">
               <div class="Section_top">
        
    </div>
         </v-col>
       </v-row>
       
   </div>
    
  <div class="transformation">
    <br>
    <br>
      <h4  class="text-center" style="color:black"> Osez être vous-même</h4>
      <p class="text-center" style="font-size:20px">Pas d'excuses, d'excellents résultats. Les Athlètes Libres en <br> sont la preuve.
      <br>
      <br>
      <br>
<v-container>
    <v-row>
      <v-col cols="12" md="4" lg="4" >
          <v-img  class="bg-white" width="400px" height="400px"  :aspect-ratio="1"  src="https://as1.ftcdn.net/v2/jpg/03/97/11/72/1000_F_397117241_c1mQ5QleR1k56eGFEFxdV9mXiNYVvdjO.jpg" 
                   cover    >
                    <p style="color:white; margin-top:300px" class="text-center">Tranformation votre vie</p>
                   </v-img>
      </v-col>
       <v-col cols="12" md="4" lg="4" >
            <v-img  class="bg-white" width="400px" height="400px"  :aspect-ratio="1"  src="https://onestep4ward.com/wp-content/uploads/2016/05/13334619_10154202439906740_89320512_o.jpg" 
                   cover    >
                    <p style="color:white; margin-top:300px" class="text-center">Obtenir des abdos</p>
                   </v-img>
      </v-col>
       <v-col cols="12" md="4" lg="4" >
             <v-img  class="bg-white" width="400px" height="400px" :aspect-ratio="1"  src="https://media.gettyimages.com/photos/young-woman-losing-weight-picture-id1151790685?s=2048x2048" 
                   cover    >
                    <p style="color:white; margin-top:300px" class="text-center">Retrouvez la forme pour le grand jour</p>
                   </v-img>
      </v-col>
      
        
    </v-row>
    <br>
    <v-btn style="background-color: black ; color:white ; padding:2rem" class="text-center" >Devenir un Athlète Libre <v-icon>mdi-arrow-right</v-icon></v-btn> 
    </v-container>
</p>
  </div>

 <div class="training2">
   
    <v-container>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span style="background-color: cadetblue;; color:white; font-size:20px">OUR TRAINING</span>
      <h1 style="color:white; font-size:50px">Stay informed on our <br> latest news.</h1>
     
       <v-row>
      <v-col cols="12" md="4" lg="4" >
          <v-img  class="bg-white" width="400px" height="400px"  :aspect-ratio="1"  src="https://wgl-demo.net/zium/wp-content/uploads/2021/12/blog-single-12-740x600.jpg" 
                   cover    >
                         <span style="background-color: cadetblue; color:white; font-size:15px; "> <br> Avril 08, 2022</span>
                   </v-img>
                   <br>
                   <h1 style="; color:white; font-size:25px"><br> How long does it take to get <br> your fitness back?</h1>
                     <v-icon  style="color:white; font-size:40px">mdi-arrow-right</v-icon>
      </v-col>
       <v-col cols="12" md="4" lg="4" >
            <v-img  class="bg-white" width="400px" height="400px"  :aspect-ratio="1"  src="https://wgl-demo.net/zium/wp-content/uploads/2021/12/blog-single-10-740x600.jpg" 
                   cover    >
                          <span style="background-color: cadetblue;; color:white; font-size:15px"><br> Avril 08, 2022</span>
                   </v-img>
                   <br>
                     <h1 style="; color:white; font-size:25px"><br> How long does it take to get <br> your fitness back?</h1>
                       <v-icon  style="color:white; font-size:40px">mdi-arrow-right</v-icon>
      </v-col>
       <v-col cols="12" md="4" lg="4" >
             <v-img  class="bg-white" width="400px" height="400px" :aspect-ratio="1"  src="https://wgl-demo.net/zium/wp-content/uploads/2021/12/blog-single-7-740x600.jpg" 
                   cover    >
                          <span style="background-color: cadetblue;; color:white; font-size:15px;"> <br> Avril 08, 2022</span>
                   </v-img>
                   <br>
                     <h1 style="; color:white; font-size:25px"><br> How long does it take to get <br> your fitness back?</h1>
                    <v-icon  style="color:white; font-size:40px">mdi-arrow-right</v-icon>
      </v-col>
   
      
        
    </v-row>
      
    </v-container>
    <br>
    <br>
       <v-divider style="color:white"></v-divider>

 </div>

 


   
   

   
   


 
    
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'

export default {
  components: { NavbarView,  },
  data(){
      return{
           Objects: [
                { icon: "mdi-circle-slice-6", text: "Des séances d’entraînement personnalisées que vous pouvez effectuer où et quand vous voulez, avec ou sans équipement" },
                { icon: "mdi-run", text: "Des séances d’entraînement personnalisées que vous pouvez effectuer où et quand vous voulez, avec ou sans équipement" },
                { icon: "mdi-checkbox-marked-circle-outline", text: "Conseils d’entraînement pour débutants et athlètes de niveau avancé" },
                { icon: "mdi-chart-areaspline", text: "Suivez vos progrès et bénéficiez du soutien de la communauté" },
            ],
               etapes: [
        {
          color: 'cyan',
          step: 'étape1',
          title:"Trouvez le parcours d'entraînement idéal pour vous",
          text:"Indiquez à votre Coach qui vous êtes et quels sont vos objectifs."
        },
        {
          color: 'green',
          step: 'étape2',
          title:"Intégrez vos entraînements dans votre emploi du temps",
          text:"Vous décidez où, quand et comment vous voulez vous entraîner, et votre Coach élabore votre parcours d’entraînement en conséquence."
        },
        {
          color: 'pink',
           step: 'étape3',
           title:"Bénéficiez de séances d’entraînement personnalisées",
           text:"De l’échauffement à la récupération, tout est conçu pour vous aider à atteindre vos objectifs."
        },
        {
          color: 'amber',
           step: 'étape4',
           title:"Entraînez-vous, quoi qu’il arrive",
           text:"Avec ou sans équipement. Une heure ou 15 minutes. À l’intérieur ou en plein air. Adaptez vos séances selon vos préférences."
        },
        {
          color: 'orange',
           step: 'étape5',
           title:"Communiquez avec votre Coach",
           text:"Donnez un feedback à votre Coach pour qu’il continue à adapter vos séances en fonction de votre progression."
        },
      ],
      
      }
  }
    
}
</script>

<style>
.Entrainement{
    
    min-height: 105vh;
    min-width: 57vh;
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
      background: linear-gradient(45deg,#4f4d4d 50% , #ffcc5c 100%);
   
  
}
.training{
    
    min-height: 30vh;
    min-width: 57vh;
    background-size: cover !important;
    background-position: center !important;
    padding:  9%;
    display: flex;
    align-items: center;
       background-color: #181818 ;
   
  
}
.training1{
    min-height: 150vh;
   background-color: #181818 ;
}
.training2{
    min-height: 150vh;
      background-color: #181818 ;
}
.transformation{
    min-height: 105vh; 
    background: lightgray; 
}

.v-timeline--vertical .v-timeline-divider__line {
    height: 100%;
    width: var(--v-timeline-line-thickness);
    
    background-color: white;
}
.v-timeline-divider__dot--size-small .v-timeline-divider__inner-dot {
    height: calc(100% - 8px);
    width: calc(100% - 8px);
    background-color: white;
}
.Section_top{
  margin-top: 150px;
    width: 75%;
  height: 600px;    
    background-image: url("https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt0d55179f870e70d1/5ef49e633dd98f4328d6b424/desktop.jpg?auto=webp&quality=85&format=pjpg");
    background-size: cover;
    animation: change 10s infinite ease-in-out;
   border-radius: 5px;
      text-align: center;
    justify-content: center;
}
@keyframes change{
    0%
    {
        background-image: url("https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt459b6dc8ad2c766f/61c2f1bd8f8a44201b512126/Balanced_Burn_FR.jpeg?width=320");
    }
    20%
    {
        background-image: url("https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt6bfb931676305a91/61c2f1e985b59c201581be47/TJ_Selection_FR.jpeg?width=320");
    }
    40%
    {
        background-image: url("https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    }
     80%
    {
           background-image: url("https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blte214fdf46cf0f288/61c2f1dcc9ed2d27fb59f5e5/Adapt_FR.jpeg?width=320");
    }
         100%
    {
           background-image: url("https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt6501c51f8d8225ee/61c2f1c6f8d92f215589172c/Workout_Overview_FR.jpeg?width=320");
    }
     

}

</style>