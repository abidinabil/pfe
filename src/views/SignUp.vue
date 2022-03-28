<template>
    <v-container class="test">
            <v-card
            class="mx-auto"
            width="900px"
            height="75vh"
            outlined
            style="padding:50px"
            border="border-dark"
            >
            <h3 class="text-center border border-dark">Rejoignez-nous en tant que coach ou utilisateur</h3>
   <br>
   <br>
   
  <v-row>
    <v-col
      cols="12"
      sm="12"
      md="6"
      lg="6"
      xs="12"
      
      
    >
      <v-hover
        v-slot="{ isHovering, props }"
        open-delay="200"
      >
        <v-card
          :elevation="isHovering ? 16 : 2"
          :class="{ 'on-hover': isHovering }"
          class="mx-auto"
          height="200"
          max-width="350"
          v-bind="props"
           to="/UserView"
        >
          <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1 border border-dark">
                 <v-icon style="color:blue" class="text-center" >mdi-account</v-icon><br>
         je veux prendre soin de mon corps
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>

    <v-col
      cols="12"
      sm="12"
      md="6"
      xs="6"
      lg="6"
     
    >
      <v-hover
        v-slot="{ isHovering, props }"
        close-delay="200"
      >
        <v-card
          :elevation="isHovering ? 16 : 2"
          :class="{ 'on-hover': isHovering }"
          class="mx-auto"
          height="200"
          max-width="350"
          v-bind="props"
          to="/CoachView"
         
        >
          <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1 border border-dark">
                 <v-icon style="color:blue" class="text-center" >mdi-account</v-icon><br>            
un coach ici pour vous aider à assister à votre objet
                  
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
  <br>
  <br>
  <br>
  <p style="text-align:center">Already have an account? <router-link to="/CoachView" style="color:blue"> SignIn</router-link></p>
  </v-card>
    </v-container>
</template>


<script>
export default {
    name: 'SignUP',
    data() {
        

    },
}
</script>
<style>
.test{
    margin-top: 90px;
   
}
@media only screen and (max-width: 786px){
    .test{
     width: 200px;
     margin-left: -200px;
     
    }
    

}
</style>