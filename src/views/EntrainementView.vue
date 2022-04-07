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
   <div class="box">
        <div class="image">
            <img src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt3a8efbd6d1fa12ec/61c9aa323d2b1760404ede29/1104_x_1264_female_(2).jpg?auto=webp&quality=85&format=pjpg&width=878" alt="">
        </div>
        <div class="text">
            <p>What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                
                
                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      <p>What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        
        
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    <p>What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        
        
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>       
    </div>

    </div>
   


 
    
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  components: { NavbarView },
  data(){
      return{
           Objects: [
                { icon: "mdi-circle-slice-6", text: "Des séances d’entraînement personnalisées que vous pouvez effectuer où et quand vous voulez, avec ou sans équipement" },
                { icon: "mdi-run", text: "Des séances d’entraînement personnalisées que vous pouvez effectuer où et quand vous voulez, avec ou sans équipement" },
                { icon: "mdi-checkbox-marked-circle-outline", text: "Conseils d’entraînement pour débutants et athlètes de niveau avancé" },
                { icon: "mdi-chart-areaspline", text: "Suivez vos progrès et bénéficiez du soutien de la communauté" },
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

</style>