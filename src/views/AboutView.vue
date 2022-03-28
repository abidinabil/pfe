<template>
  <div class="AboutView">
   <v-container >
    <v-row class="r1">
      <v-col  cols="12" xs="12" sm="6" md="6" lg="6">
            <h2>Welcome to FitBodt</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem animi eveniet voluptate beatae, facilis vitae 
              rerum perspiciatis blanditiis porro, unde, sunt optio similique quidem ab. Veniam laudantium tempore dolore.</p>
          <v-btn color="indigo" rounded>Get Started</v-btn>    
          <v-btn color="success" rounded> <v-icon>mdi-play-circle</v-icon> Watch Video</v-btn>     
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6">
        <v-img  src="https://st2.depositphotos.com/2069237/7265/i/950/depositphotos_72653947-stock-photo-runner-running-listening-music.jpg"  ></v-img>
      </v-col>
    </v-row>
   </v-container><br><br>
  <h4  class="text-center" > Comment Ca Marche</h4><br><br>
    <v-row>
      <v-col v-for="info in infos" :key="info.icon" class="text-center" cols="12" xs="12" sm="6" md="6" lg="6">
       <v-icon class="text-center" color="success">{{info.icon}}</v-icon>
       <p>{{info.text}}</p>
      </v-col>
        <v-btn color="indigo"  rounded>Commencer L'experience</v-btn>  
      </v-row>

   <v-container   class="fill-height" fluid style="min-height: 434px">
    <v-col  md="12" lg="12" class="text-center">
     
      <v-subheader class="text-h4"> Régimes</v-subheader><br><br>
         <div class="text-center">
       <v-chip @click="activateregime = 'prise'" :color="activateregime === 'prise' ? 'black':''" class="mx-3"> Prise de Masse </v-chip>
        <v-chip @click="activateregime = 'seche'" :color="activateregime === 'seche' ? 'success':''" class="mx-3"> Séche</v-chip>
         </div>
       </v-col>
    <v-fade-transition mode="out-in">
      <v-row>
         <slot v-if="activateregime=='prise'">
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="prise in Prises" :key="prise.text">
          <v-card   gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)" height="250px">
            <v-img
              :src="prise.image"
              
              height="200px"
              class="grey darken-4"
               gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            ></v-img>
            <v-card-title class="text-h6">
              {{prise.title}}
            </v-card-title>
          </v-card>
        </v-col>
        </slot>
            <slot v-if="activateregime=='seche'">
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="seche in Seches" :key="seche.text">
          <v-card  gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)" height="250px">
            <v-img
              :src="seche.image"
              height="200px"
              width="400px"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              {{seche.title}}
            </v-card-title>
          </v-card>
        </v-col>
        </slot>
        </v-row>
    </v-fade-transition>
  </v-container>

  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6">
         <v-img rounded src="./../assets/fitness.jpg"  ></v-img>
      </v-col>
      <v-col cols="12" xs="20" sm="6" md="6" lg="6" >
       <h4 > It's not a diet, it's a Lifestyle </h4>
       <p>Athlète ou sportif avancé ? Complétez votre routine avec notre formule Lifestyle en choisissant le nombre de repas
          et collations ainsi que les calories souhaitées.</p>
              <v-btn
      class="ma-2" outlined color="indigo" >  Découvrer notre formule Lifestyle
    </v-btn>
    <v-icon>email</v-icon>
    
      </v-col>
    </v-row>
  </v-container>
<v-container>
   <h4  class="text-center"> We take care of everything</h4><br><br>
    <v-row>
      <v-col v-for="about in abouts" :key="about.icon" class="text-center" xs="4" md="4">
       <v-icon class="text-center" color="success">{{about.icon}}</v-icon>
       <h5 class="text-center" >{{about.title}}</h5>
       <p>{{about.text}}</p>
      </v-col>
   
      </v-row>
</v-container>


 
  </div>
</template>

<script>
export default {
  data(){
    return{
      activateregime:'prise',
      Prises:[
        {title:'prise1' , image:'https://st3.depositphotos.com/3813349/18488/i/1600/depositphotos_184883396-stock-photo-beautiful-young-woman-holding-bowl.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/13324256/16763/i/1600/depositphotos_167633292-stock-photo-healthy-breakfast-on-plate.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/2325841/18120/i/1600/depositphotos_181204894-stock-photo-woman-eating.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/1177973/18089/i/1600/depositphotos_180890438-stock-photo-dish-tasty-seafood-risotto-table.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/1062035/17349/i/1600/depositphotos_173494798-stock-photo-creamy-seafood-pasta.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/13707056/17205/i/1600/depositphotos_172058302-stock-photo-delicious-sweet-pancakes.jpg'},

      ],
            Seches:[
        {title:'prise1' , image:'https://st3.depositphotos.com/1014889/18120/i/1600/depositphotos_181202716-stock-photo-organic-vegetables-on-wood.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/1000975/18110/i/1600/depositphotos_181106678-stock-photo-spinach-soup-served-on-wooden.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/14426936/18247/i/1600/depositphotos_182473622-stock-photo-close-delicious-sandwiches-fish-avocado.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/3308451/18084/i/1600/depositphotos_180841278-stock-photo-asian-cuisine-ingredients.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/1177973/18088/i/1600/depositphotos_180883258-stock-photo-tasty-bruschettas-fried-eggs-avocado.jpg'},
        {title:'prise1' , image:'https://st3.depositphotos.com/13707056/17205/i/1600/depositphotos_172058302-stock-photo-delicious-sweet-pancakes.jpg'},

      ],
      infos:[
        {icon:'mdi-check-underline', text:'Vos calories à travers un diagnostic personnalisé'},
        {icon:'mdi-amplifier', text:'Notre nutritionniste pour un bilan complet'},
        {icon:'mdi-cart-outline', text:'Recevez vos repas chez vous tous les soirs.'},
        {icon:'mdi-dumbbell', text:' Atteignez vos objectifs et profitez de votre temps'}
      ],

      abouts:[
        {icon:'mdi-calendar-check',title:'Abonnements flexibles',text:'5 ou 6 jours par semaine ? Un dîner imprévu ? Un voyage ? Pas de panique possibilité de suspendre votre abonnement.'},
        {icon:'mdi-chef-hat',title:'Repas équilibrés et variés',text:'Tous nos repas respectent des proportions nutritives nécessaires à votre corps dans des menus qui changent chaque semaine.'},
        {icon:'mdi-gesture-double-tap', title:'Respectant votre objectif',text:'Prise de masse, Perte de poids, Sèche Musculaire possibilité de jeûne intermittent.'},
        {icon:'mdi-nutrition', title:'Accompagnement nutritionnel',text:'Bilan personnalisé et suivi régulier chez notre nutritionniste.'},
        {icon:'mdi-dumbbell',title:'Programme et coaching sportif',text:'Personnalisé et adapté à tous les niveaux'}
      ]
      

      
    }
  }
}
</script>
<style>

h2{
    font-size: 60px;
    font-weight: bold;
    font-family: cursive;
    color: #444;
}
h4{
    font-size: 40px;
    font-weight: bold;
    font-family: cursive;
    color: #444;
}
p{
  font-size: 19;
  font-family: cursive;
  margin: 25px 0px;

}


</style>
