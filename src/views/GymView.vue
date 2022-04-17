<template>
    <navbar-view />
    <div class="gym">
      <v-row>
        <v-col cols="12" md="8"></v-col>
        <v-col cols="12" md="4" style="margin-top:120px">
          <p>BUILD A HEALTHY ROUTINE</p>
          <h2 style="color:#181818">The best gyms. <br> For your best <br>  results.</h2>
        </v-col>
      </v-row>

    </div><br><br>
     <h1 class="mx-4" style="  text-transform:uppercase;letter-spacing:0.3px;-webkit-text-fill-color:transparent;-webkit-text-stroke-width:0.6px; font-size:88px; ">
       be healthy. be stronger. be beauty
       </h1><br><br><br><br>
         <v-container>
             <span style="background-color: black; color:white; font-size:20px ;" > HOW IT WORKS</span> <br>
            <h2 style="color:#181818">Reach new heights <br> with my trainings <br> right now...</h2><br>
            <v-row>
                 <v-col cols="12" md="6" lg="6">
            <br><br><br>
            <v-img  class="bg-white" width="600px"  height="650px"  :aspect-ratio="1"  src="https://wgl-demo.net/zium/wp-content/uploads/2021/12/home3_image_2.jpg" 
                   cover   > </v-img>
        </v-col>
        <v-col cols="12" md="6" lg="6">
               
            <div  style="margin-left:50px ; margin-top:70px">    
             <h1 style="color:#181818 ; font-size:35px">One of the popular areas in sports, <br> wich include two components for <br> successful result.</h1>
               
            </div>   
            <v-divider></v-divider>
          <v-row style="margin-left:120px">
              <v-col cols="12" md="6" >
             <img src="https://cdn-icons-png.flaticon.com/512/3043/3043888.png"  alt=""  style="width:80px ;">
             <h4 style="color:#181818">Intensive trainings</h4>
             <p>It’s one of the best methods of <br> combining the independence.</p>
            </v-col>
              <v-col cols="12" md="6">
                <img src="https://cdn-icons-png.flaticon.com/512/1616/1616487.png"  alt=""  style="width:80px ;">
             <h4 style="color:#181818 ;">Quality nutrition</h4>
             <p>It’s one of the best methods of <br> combining the independence.</p>
            </v-col>
          </v-row>
        </v-col>
           <v-col cols="12" md="6" lg="6">
            <br><br><br>
            
            <h1  style="color:#181818">Create body of your dream. With <br> our programs you can:</h1><br><br><br>
            <p style="font-size:25px">
              ―    Strengthen muscles <br>
            ―    Improve posture <br>
            ―    Improve coordination and flexibility <br>
            ―    Improve coordination and flexibility <br>
           ―    Boost immunity
            </p>
        </v-col>
        <v-col cols="12" md="6" lg="6" style="margin-top:-100px">
              <v-img  class="bg-white" width="600px"  height="710px"  :aspect-ratio="1"  src="https://images.pexels.com/photos/11685584/pexels-photo-11685584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                   cover   > </v-img>
        </v-col>
            </v-row>

         </v-container>

</template>
<script>
import NavbarView from '@/components/NavbarView.vue'

export default {
  components: { NavbarView },
    setup() {
        
    }
    
}
</script>
<style>
.gym{
    min-height: 80vh; 
    background: url(https://wgl-demo.net/zium/wp-content/uploads/2021/12/home3_image_1.jpg);
}
</style>