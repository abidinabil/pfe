<template>
<navbar-view />
    <div class="slide">
          <v-container >
    <v-row class="r1">
      <v-col  cols="12" xs="12" sm="6" md="6" lg="6">
            <h2 class="test" style="color:white">Welcome to FitBodt</h2>
            
            <p style="color:aliceblue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem animi eveniet voluptate beatae, facilis vitae 
              rerum perspiciatis blanditiis porro, unde, sunt optio similique quidem ab. Veniam laudantium tempore dolore.</p>
           <v-btn style="background-color: white ; color:black" >Commencer dés maintenant</v-btn>    
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6">
        <v-img  src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf8bcb6b2a38ae87a/61c9aa6b95cb603e6b5cd6e9/1104_x_1264_male.jpg?auto=webp&quality=85&format=pjpg&width=878" style="height:450px"  ></v-img>
      </v-col>
    </v-row>
   </v-container><br><br>
    </div>
    <br>
    <br>
    <div>
        <v-container>
            <v-row >
                <v-col cols="12" xs="12" md="8" lg="3">
                    <p style="color:blue">Training Journey</p>
                    <h1>
                        A training journey for every goal
                    </h1>
                    <p>
                        Your Coach analyzes your fitness and goals, <br>
                         paving your individual path to success
                    </p>
                     <v-btn style="margin-left:50px" depressed color="black">  learn about training <v-icon>mdi-arrow-right</v-icon> </v-btn>
                
                </v-col>
                  <v-col cols="12" xs="12" md="8" lg="3">
                       <v-img rounded src="https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  style="  margin-top:70px " ></v-img>
                     
                       

                </v-col>
                  <v-col cols="12" xs="12" md="8" lg="3">
                   <v-img rounded src="https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  ></v-img>

                </v-col>
                  <v-col cols="12" xs="12" md="8" lg="3">
                   <v-img rounded src="https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  style="margin-top:70px"  ></v-img>
                </v-col>
               
            </v-row>
        </v-container>
        
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <section>
        <div class="Benefits">
        <v-row>
          <v-col cols="12" xs="12" md="6"  lg="6">
          <v-img class="i" src="https://images.pexels.com/photos/1582161/pexels-photo-1582161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">   </v-img>
          </v-col>
          <v-col cols="12" xs="12" md="6" sm="12" lg="6">
            <div class="a">
          <p style="color:white">OUR BENEFITS</p>
          <h2   style="color:white" class="text">Unlimited group & <br> personal trainings <br> anywhere.</h2> </div>
          </v-col>
        </v-row>  
        </div>
         <div>
            <v-row>
         
          <v-col cols="12" xs="12" md="6" sm="12" lg="6">
            <div class="r" style="margin-top:-400px ; margin-left:20px" >
          <p style="color:white">test</p>
          <h2 style="color:white" class="text">Unlimited group & <br> personal trainings <br> anywhere.</h2> </div>
          </v-col>
           <v-col cols="12" xs="12" md="6"  lg="6">
          <v-img class="c" src="https://images.pexels.com/photos/2092479/pexels-photo-2092479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">   </v-img>
          </v-col>
        </v-row>
        </div>
        </section>
      

      <br>
      <br>
      <br>

    <v-container>
   <h4  class="text-center"> We take care of everything</h4><br><br>
    <v-row>
      <v-col v-for="about in abouts" :key="about.icon" class="text-center"  xs="4" md="4">
       <v-icon class="text-center" color="yellow">{{about.icon}}</v-icon>
       <h5 class="text-center" >{{about.title}}</h5>
       <p>{{about.text}}</p>
      </v-col>
   
      </v-row>
    </v-container>

    <br>
    <br>
    <div >
        <v-container>
            <v-row >
               
                  <v-col cols="12" xs="12" md="6" lg="6">
                       <v-img rounded src="https://ma-mutuelle-sante.fr/wp-content/uploads/2021/08/Quelles-sont-les-applications-mobiles-pour-une-meilleure-nutrition.jpg" style="border-radius:20px"   ></v-img>
                     
                       

                </v-col>
                <v-col cols="12" xs="12" md="6" lg="6">
                    <p style="color:blue">APPLI NUTRITION</p>
                    <h1>
                       Bénéficiez d'un accompagnement <br> nutritionnel
                    </h1>
                    <p>
                       Obtenez des programmes de repas personnalisés et idéals <br> pour votre corps et vos objectifs. Pas de calcul de calories nécessaire.
                    </p>
                     <v-btn style="margin-left:50px" depressed color="black">  learn about training <v-icon>mdi-arrow-right</v-icon> </v-btn>
                
                </v-col>

             
               
            </v-row>
        </v-container>
        
    </div>
  <br>
  <br>
  <br>
  <h4 class="text-center"> Un coaching numérique moins <br> cher qu'un cours de fitness par semaine</h4>
 <br>
 <br>
 <section class="combo" >
  <div class="container">
    <div class="left">   
    </div>
    <div class="right">
      <div class="content">
        <h1>Combo Entraînement & <br> Nutrition</h1>
        <p>Parcours d'entraînement personnalisés <br>
                Coaching numérique via IA <br>
                Accompagnement nutritionnel</p>
        <a href="#" class="btn">Click Me</a>
      </div>
    </div>
  </div>
</section>
<br>
<br>
      <br>
      <br>
      <br>
       <div class="offer">
          <v-container>
           <p style="color:white; text-align:center"> WHAT WE OFFER</p> 
           <h2 style=" text-align:center" class="best"> The best standards <br> anywhere. </h2>
           <br>
           <br>
           <br>

            <v-row>
              <v-col v-for="offer in Offers" :key="offer.icon" class="text-center" xs="4" md="3">
              <v-icon class="text-center" style="color:yellow">{{offer.icon}}</v-icon>
              <h5 class="text-center" style="color:white" >{{offer.title}}</h5>
              <p style="color:white">{{offer.des}}</p>
              </v-col>
          
              </v-row>
                  </v-container>
       </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
     
      <div>
        <v-container>
        <p style=" color:black">Our Blog</p>
        
        <h4 style="color:black">
          Stay informed on our <br> latest news.
        </h4>
        <v-spacer></v-spacer>
        <v-btn >learn more</v-btn>
        <br>
        <br>
        
        <v-row>
          <v-col cols="12" md="4" lg="4" v-for="blog in Blog" :key="blog.title">
            <div class="wrapper">
         <div class="box">
            <div class="front-face" >
               <div class="icon">
                    <v-img :src="blog.img"></v-img>
               </div>
             
            </div>
            <div class="back-face">
               <span>{{blog.title}}</span>
               <p>
                 {{blog.text}}
               </p>
            </div>
         </div>
        
      </div>
          </v-col>
        </v-row>
        </v-container>
      </div>
      <br>
      <br>
      <br>

      <br>
      <br>

      <a class="gotopbtn" href="#"> <v-icon>mdi-arrow-up</v-icon> </a>

   
     


    
    
</template>

<script>
import NavbarView from "@/components/NavbarView.vue"


export default {
    data() {
        return {
            cycle: false,
            slides: [
                { nom: "test", reviews: "lorem ipsum" },
                { nom: "test", reviews: "lorem ipsum" },
                { nom: "test", reviews: "lorem ipsum" },
            ],
            abouts: [
                { icon: "mdi-calendar-check", title: "Abonnements flexibles", text: "5 ou 6 jours par semaine ? Un dîner imprévu ? Un voyage ? Pas de panique possibilité de suspendre votre abonnement." },
                { icon: "mdi-chef-hat", title: "Repas équilibrés et variés", text: "Tous nos repas respectent des proportions nutritives nécessaires à votre corps dans des menus qui changent chaque semaine." },
                { icon: "mdi-gesture-double-tap", title: "Respectant votre objectif", text: "Prise de masse, Perte de poids, Sèche Musculaire possibilité de jeûne intermittent." },
                { icon: "mdi-nutrition", title: "Accompagnement nutritionnel", text: "Bilan personnalisé et suivi régulier chez notre nutritionniste." },
                { icon: "mdi-dumbbell", title: "Programme et coaching sportif", text: "Personnalisé et adapté à tous les niveaux" }
            ],
            Offers: [
                { icon: "mdi-check-underline", title: "Motivate", des: "Vos calories à travers un diagnostic personnalisé" },
                { icon: "mdi-amplifier", title: "Workout", des: "Recevez vos repas chez vous tous les soirs." },
                { icon: "mdi-dumbbell", title: "Objectif", des: "Atteignez vos objectifs et profitez de votre temps" },
                { icon: "mdi-cart-outline", title: "Results", des: "Recevez vos repas chez vous tous les soirs." },
            ],
            Blog: [
                { img: "https://images.pexels.com/photos/5039523/pexels-photo-5039523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: " GYM / NUTRITION", text: "Few benefits of group and  personal training" },
                { img: "https://images.pexels.com/photos/1769626/pexels-photo-1769626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: " Exercices / NUTRITION", text: "Top 5 benefits of outdoor  personal training" },
                { img: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", title: " GYM / WORKOUT", text: "How long does it take to get your fitness back?" }
            ]
        };
    },
    components: { NavbarView }
}

</script>



<style>
html{
  scroll-behavior: smooth;
}
.gotopbtn{
  position: fixed;
  width: 50px;
  height: 50px;
  background: black;
  bottom: 40px;
  right: 50px;

  text-decoration: none;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 22px;
}
/* combo entrainement */
.i{
   width: 100%;
  min-height: 500px;
  display: flex;
  padding: 30px;
  border-radius: 8px;
  margin-top: -600px;
  margin-left: -100px;

 
}
.a{
 margin-top:-400px
}
.c{
  margin-top: -430px;
   width: 100%;
  min-height: 500px;
  margin-left: -50px;
}
.container {
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;

 
}
.best{
    background: linear-gradient(-135deg, rgb(70, 70, 247), rgb(136, 179, 115));
}
.left {
  width: 150%;
  height: 550px;
  background: url(https://wgl-demo.net/zium/wp-content/uploads/2021/12/home1_image_1.jpg)
    no-repeat center / cover;
  border-radius: 8px;
}
.right {
  width: 70%;
  min-height: 400px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;
  color: white;
  margin-left: -150px;
}

.right a {
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  color: black;
  padding: 20px 30px;
  display: inline-block;
  letter-spacing: 2px;
}

@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
  }
  .left {
    width: 100%;
    height: 400px;
  }
  .right {
    width: 70%;
    margin: 0;
    margin-top: -100px;
  }
}
/* fin comno */
.offer{
  background-color: black;
  min-height: 75vh;
}
@media (max-width: 1000px) {
  .Benefits{
  
    width: 100%;
   
  }
  .i{
    margin-top: -550px;
    margin-left: 10px;
  
  }
  
  .c{
    margin-top: -450px;
    margin-left: 15px;
  }
  .a{
    margin-top: -220px;
  }
  .text{
   font-size:large;
   
   
   
  }
  .r{
  
   margin-top: -400px;
  }
}
.Benefits{
    
    min-height: 120vh;
    min-width: 57vh;
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
    background-color: black;
  
}

.slide{
    
    min-height: 75vh;
    min-width: 57vh;
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
    background-color: black;
  
}
  /*-------------------------offer --------------------------*/
 

/*-------------------fin offre----------------*/
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


/* box flip */

@media (max-width: 700px) {
  .wrapper{
    margin: 200px auto;
  }
}
.wrapper .box{
 
  margin: 0 auto;
  position: relative;
  perspective: 1000px;
}
.wrapper .box .front-face{
  background: #fff;
  height: 500px;
  width: 100%;

}


.box .back-face{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 500px;
  width: 100%;
  padding: 30px;
  color: #fff;

  transform-style: preserve-3d;
  backface-visibility: hidden;
  background: linear-gradient(-135deg, rgb(120, 137, 248), rgb(90, 238, 199));
  transform: translateY(110px) rotateX(-90deg);
  box-shadow: 0px 5px 20px 0px rgba(0, 81, 250, 0.1);
  transition: all 0.5s ease;
}

.box:hover .back-face{
  opacity: 1;
  transform: rotateX(0deg);
}
/*fin box flip */




</style>