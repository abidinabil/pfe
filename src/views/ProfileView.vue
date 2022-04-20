<template>
    

   <navbar-view />

         <v-row  class="mx-2" >
    
    <v-col cols="12" md="12" justify-center>
     <div >
        <v-card
      style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important; margin-top:50px; "
      height="500px"
      tile
      flat   
      class="d-flex align-center " >
      <v-container>
          <h1>Hello</h1> <br>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sit architecto. Consequuntur, 
         <br> voluptatum nihil maxime veritatis fuga voluptate molestias dignissimos sunt at aliquam vitae atque est ipsam cupiditate. Quam, perferendis.</p>
    </v-container>
   
    </v-card>
    <v-row>
        <v-col cols="12" md="8">
             <v-card tile class="mx-5 mt-n10 card1" color="white">
                 <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> MyAccount</h1> <br>
                </v-toolbar>
                <v-divider></v-divider>
                <v-container>
                    <p>User Information</p><br>
                    <v-form>
                        <v-row>
                          <v-col cols="12" sm="6">
                             <v-text-field
                  
                                color="secondary"
                                label="Nom"
                                variant="contained"
                                placeholder="Placeholder"
                            >
                            
                            </v-text-field>
                           </v-col>
                            <v-col cols="12" sm="6">
                                   <v-text-field
                  
                                color="secondary"
                                label="Email"
                                variant="contained"
                                placeholder="Placeholder"
                            >
                            
                            </v-text-field>
                           </v-col>
                              <v-col cols="12" sm="6">
                             <v-text-field
                  
                                color="secondary"
                                label="Password"
                                variant="contained"
                                placeholder="Placeholder"
                                type="password"
                            >
                            
                            </v-text-field>
                           </v-col>
                            <v-col cols="12" sm="6">
                                   <v-text-field
                  
                                color="secondary"
                                label="weight"
                                variant="contained"
                                placeholder="Placeholder"
                                type="number"
                            >
                            
                            </v-text-field>
                           </v-col>
                              <v-col cols="12" sm="6">
                             <v-text-field
                  
                                color="secondary"
                                label="Taille"
                                variant="contained"
                                placeholder="Placeholder"
                                type="number"
                            >
                            
                            </v-text-field>
                           </v-col>
                           <v-divider></v-divider>

                         
                           </v-row>
                             <p>ABOUT ME</p>
                                <v-textarea
                            background-color="light-blue"
                            color="black"
                            label="Label"
                            ></v-textarea>
                    </v-form>
                </v-container>
              </v-card>
        </v-col>
          <v-col cols="12" md="4">
             <v-card tile class=" mt-n10 card1" color="white">
             <img src="https://cdn-icons-png.flaticon.com/512/2690/2690150.png"  alt="" class="rounded-circle " style="width:150px ; margin-left:180px ;">
             <br>
             <v-row  >
                    <v-col cols="12" md="4" class="text-center">
                     <p>85</p> 
                   <p class="text-center">  <v-img src="https://cdn-icons-png.flaticon.com/128/4813/4813685.png" style="width:50px ; margin-left:60px"></v-img>Weight(Kg)</p> 
                    </v-col>
                 <v-col cols="12" md="4" class="text-center">
                     <p>3330</p> 
                   <p class="text-center">  <v-img src="https://cdn-icons.flaticon.com/png/512/2058/premium/2058065.png?token=exp=1650203625~hmac=bf0b4eb93c902b72a3ed52a885591448" style="width:50px ; margin-left:60px"></v-img>Calorie</p> 
                    </v-col>
                    <v-col cols="12" md="4" class="text-center">
                     <p>1.90</p> 
                   <p class="text-center">  <v-img src="https://cdn-icons-png.flaticon.com/128/349/349410.png" style="width:50px ; margin-left:60px"></v-img>Taille(Cm)</p> 
                    </v-col>
             </v-row><br><br>
             <div class="text-center">
               <h3>{{user.name}}</h3>
               <p>{{user.email}}</p>
               <p>Coach de Fitness</p>
               <p>University of Computer Science</p>
               <v-divider></v-divider>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore et est voluptates libero,
                   <br> eum reiciendis itaque molestias necessitatibus beatae nulla laboriosam ex accusamus provident ratione qui harum, quos dolorem?</p>
             </div>
              </v-card>
        </v-col>
    </v-row>
      </div>
                            
                   </v-col> 
   </v-row>           

</template>

<script>

import NavbarView from "@/components/NavbarView.vue";

export default {
  components: { NavbarView },
  data() {
    return {
      image: null,
      
      name: "",
      email: "",
      password: "",
      users: {},
     
      }
  },
  
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },



};
</script>

        