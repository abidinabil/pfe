<template>
    <navbar-view />
    <div style="margin-top:100px">
         <v-row>
          <v-col cols="12" md="4" lg="4" v-for="blog in Blog" :key="blog.title">
            <div class="cardNutritionniste">
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
    </div>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  components: { NavbarView },
  data(){
      return{
           Blog: [
                { img: "https://images.pexels.com/photos/5039523/pexels-photo-5039523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: " GYM / NUTRITION", text: "Few benefits of group and  personal training" },
                { img: "https://images.pexels.com/photos/1769626/pexels-photo-1769626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: " Exercices / NUTRITION", text: "Top 5 benefits of outdoor  personal training" },
                { img: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", title: " GYM / WORKOUT", text: "How long does it take to get your fitness back?" }
            ]
      }
  }
    
}
</script>

<style>
@media (max-width: 700px) {
  .cardNutritionniste{
    margin: 200px auto;
  }
}
.cardNutritionniste .box{
 
  margin: 0 auto;
  position: relative;
  perspective: 1000px;
}
.cardNutritionniste .box .front-face{
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
</style>