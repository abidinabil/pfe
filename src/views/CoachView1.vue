<template>
    <navbar-view />
    <br>
 
    <v-row class="mx-4">
        <v-col cols="12" md="6">
                 <h1 style="  text-transform:uppercase;letter-spacing:2px;-webkit-text-fill-color:transparent;-webkit-text-stroke-width:0.3px; font-size:300px; "> Fit <br> Body  </h1>
                 <h2 style="color:#21212 ; margin-top:-550px  ;letter-spacing:2px ; ; font-size:90px">Your skilled personal gym trainer</h2>

        </v-col>
        <v-col cols="12" md="6">
              <v-img  class="bg-white" width="900px"  height="700px"  :aspect-ratio="1"  src="https://wgl-demo.net/zium/wp-content/uploads/elementor/thumbs/home4_image4-pi9t8053sogli3rcjga8iq2kieux9s688zkv3ekpj4.jpg" 
                   cover   > </v-img>
        </v-col>
    </v-row><br><br><br>
    <v-container>
        <br><br><br>
        
        <v-row>
            
        <v-col cols="12" md="6" lg="6">
            <br><br><br>
            <span style="background-color: black; color:white; font-size:20px ;" > HOW IT WORKS</span> <br>
            <h1  style="color:#212121">Reach new heights <br> with my trainings <br> right now...</h1>
        </v-col>
        <v-col cols="12" md="6" lg="6">
              <v-img  class="bg-white" width="600px"  height="500px"  :aspect-ratio="1"  src="https://wgl-demo.net/zium/wp-content/uploads/elementor/thumbs/home4_image2-pi9s5fthedo361ryqa69pyer4axsgu2om40p9pr6tc.jpg" 
                   cover   > </v-img>
        </v-col>
            <v-col cols="12" md="6" lg="6">
            <br><br><br>
            <v-img  class="bg-white" width="600px"  height="650px"  style="margin-top:-200px" :aspect-ratio="1"  src="https://wgl-demo.net/zium/wp-content/uploads/elementor/thumbs/home4_image3-pi9s9l9tl1cog1qvhkry8ep1kkh5gpk06nqwkpllc0.jpg" 
                   cover   > </v-img>
        </v-col>
        <v-col cols="12" md="6" lg="6">
            <h1 class="stroke">01 </h1> <h6 style="margin-left:60px">step</h6>   
            <div style="margin-left:250px ; margin-top:-200px">    
             <p>Choose your Training</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis quasi enim perspiciatis <br> molestias nulla non. Molestias magnam dolores, repellendus hic esse <br> fugiat dolor eos doloremque est aperiam. Deserunt, quisquam?</p>
            </div>   
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="6" lg="6">
             <h1 class="stroke">02 </h1> <h6 style="margin-left:60px">step</h6>   
            <div style="margin-left:250px ; margin-top:-270px" >    
             <p>Start The Work Anywhere</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis quasi enim perspiciatis <br> molestias nulla non. Molestias magnam dolores, repellendus hic esse <br> fugiat dolor eos doloremque est aperiam. Deserunt, quisquam?</span>
            </div>   
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="6" lg="6">
              <v-img  class="work"  width="600px"  height="650px"  style="margin-top:-200px" :aspect-ratio="1"  src="https://wgl-demo.net/zium/wp-content/uploads/elementor/thumbs/home4_image4-pi9t8053sogli3rcjga8iq2kieux9s688zkv3ekpj4.jpg" 
                   cover   > </v-img>
        </v-col>
        <v-col cols="12" md="6" lg="6">
            <div style="margin-top:-180px">
               <h3 style="color:black ; font-size:50px">... and transform <br> your body, feel, and <br> recharge yourself.</h3> </div> 
            
        </v-col>
        <v-col cols="12" md="6" lg="6">
             <h1 class="stroke">03 </h1> <h6 style="margin-left:60px">step</h6>   
            <div style="margin-left:250px ; margin-top:-300px" >    
             <p>    Make Real Result Happen</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis quasi enim perspiciatis <br> molestias nulla non. Molestias magnam dolores, repellendus hic esse <br> fugiat dolor eos doloremque est aperiam. Deserunt, quisquam?</span>
            </div>   
            <v-divider></v-divider>
        </v-col>
        </v-row>
    </v-container> <br><br><br>

    <div class="reviews"><br><br><br>
          <v-row>
              <v-col cols="12" md="4" lg="4" v-for="coach in coaches" :key="coach.id">
                   <v-card  class="coach  mx-auto"  max-width="344" style="height:480px" variant="outlined" > <br><br>
            <div class="text-center">
                  <v-avatar  size="x-large">  
                <v-img  src="https://cdn.vuetifyjs.com/images/john.jpg" ></v-img>
               
                </v-avatar>
                 <p>{{coach.name}}</p>
                  <span  style="color:#61CE70 ">{{coach.specialite}} </span>
                  <br><br>
                  <v-icon>mdi-facebook</v-icon> <v-icon>mdi-twitter</v-icon> <v-icon>mdi-youtube</v-icon><v-icon>mdi-cellphone</v-icon> <br><br>
                      <v-btn
                    variant="outlined"
                    color="#61CE70"
                    >
                   Contact me
                    </v-btn>
                 <p>{{coach.subtext}}</p>
         
            </div>
             
            </v-card>
              </v-col>
          </v-row>
          
    </div><br><br><br>

    <v-container>
          <span style="background-color: black; color:white; font-size:20px ;" > WATCH THE GALLERY</span> <br><br>
           <h1  style="color:#212121">Unlimited group & personal <br> trainings anywhere.</h1><br><br><br><br>
           
    </v-container>
  
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios';
export default {
    data(){
        return{
             coaches:{}
        }
    },
  components: { NavbarView },
       created(){
      this.getCoach();
    },
  methods:{
                getCoach(){
       axios.get('http://localhost:8000/api/auth/getCoach')
        .then (res => {
         console.log(res.data);
         this.coaches = res.data;
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
@media only screen and (max-width: 768px) {
  .work img{
      margin-top: 180px;
  }
}
.reviews{
  background-color: #181818 ;
  min-height: 70vh;
}
.coach{
     background: linear-gradient(to bottom,#172b4d 70%, white 30% );
}
</style>