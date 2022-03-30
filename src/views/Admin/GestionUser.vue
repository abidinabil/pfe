<template>
    <side-bar />
    
      <v-card
      
      height="500px"
      tile
      flat
     
      class="mx-10"
      
      style="background:url(https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); margin-top:80px"
      dark
    >
     
    </v-card>
        <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="transparent">
                

                <h1>List Utulisateurs</h1> <br>
                
                

                <v-spacer></v-spacer>
                   <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
          Ajout Utulisateurs
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        
          <v-spacer></v-spacer>
          
        </v-toolbar>
         <v-container style="margin-top:70px">
     
            
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
                        >Ajouter Utulisateur</h4>
                        
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="First Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="Last Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            label="email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                           type="password"
                          />
                           </v-col>
                           </v-row>
                            <v-file-input
                            multiple
                            label="Image"
                        ></v-file-input>
                               <v-radio-group
                                    v-model="row"
                                    row
                                    >
                                    <v-radio
                                        label=" Coach"
                                        value="radio-1"
                                        color="primary"
                                    ></v-radio>
                                    <v-radio
                                        label="Adherant"
                                        value="radio-2"
                                        color="success"
                                    ></v-radio>
                                    </v-radio-group>
                           
                          <v-btn color="blue" dark block tile>Ajouter</v-btn>
                 
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


     
      </v-card>
    </v-dialog>
  </v-row>
         

                </v-toolbar>

                 </v-col>
                 
            </v-row>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            
    </v-card>
   
</template>
<script>
import SideBar from "@/components/SideBar.vue"


export default {
  components: { SideBar },
    data(){
        return{
               dialog: false,
        
        }
    },
    
}
</script>