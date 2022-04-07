<template>
  <v-container style="margin-top:90px">
      <div class="shape1"></div>
            
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                       
               <v-row >
                   

                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >UpdateNutrition</h4>
                        
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="title"
                            label="Title"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="text"
                            label="text"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="subtext"
                            label="subtext"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="image"
                            label="image"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           </v-row>
                      
                         
                           
                          <v-btn color="blue" dark block tile> Update</v-btn>
                     
               
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'


  export default {
   data(){
       return{
            nutritions :{},
            title:"",
               text:"",
               subtext:"",
               image:""
       }
       
   },
   methods: {
          created(){
      this.getNutrition();
    },
      updateNutrition(){
           axios.get(`http://localhost:8000/api/auth/updateNutrition/${this.$route.params.id}`)
        .then(response => {
               console.log(response);
            
               this.title = response.data.title;
               this.text = response.data.text;
               this.subtext = response.data.subtext;
               this.image = response.data.image
     }); 
    }
   },
 
    
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>