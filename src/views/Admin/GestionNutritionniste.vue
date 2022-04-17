<template>
   <side-bar />
       <v-row>
    <v-col cols="12" md="2"></v-col>
    <v-col cols="12" md="10">
              <v-card
      
      height="500px"
      tile
      flat
      class="mx-10"
      style="background:url(https://media.istockphoto.com/photos/your-doctors-got-all-the-nutrition-facts-you-need-picture-id1185387859?s=612x612); margin-top:80px"
      dark
    >
     
    </v-card>
         <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> List Nutritionniste</h1> <br>
                
                

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
      rounded="lg"
      color="primary"
      v-bind="props"
    >
      Ajout Nutritionniste
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
  
        </v-toolbar>
          <v-container style="margin-top:-20px">
     
            
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
                        >Ajouter Nutritionniste</h4>
                        
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="nom"
                            label="Nom"
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
                            label="Text"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="6">
                              <v-textarea
                              v-model="subtext"
                              
                            background-color="grey lighten-2"
                            color="cyan"
                            label="SubText"
                          ></v-textarea>
                           <v-text-field
                            v-model="adresse"
                            label="Adresse"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                       
                           </v-row>
                            <v-file-input
                            accept="image/*"
                            label="File input"
                            ref="files"
                            v-model="photo"
                        ></v-file-input>
                          
                     

                            <!-- <div class="m-auto">
                               <p v-for="(image,index) in images" :key="index">{{image.name}}</p>
                               </div>  --> 
                           
                          <v-btn color="blue" dark block tile type="submit"  @click="saveNutritionniste"> Ajouter</v-btn>
                 
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
            <th scope="col">Nom</th>
            <th scope="col">Text</th>
            <th scope="col">subtext</th>
            <th scope="col">Adresse</th>
             <th scope="col">Photo</th>
            <th> Action</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="nutritionniste in nutritionnistes" :key="nutritionniste.id">
              <td>{{nutritionniste.id}}</td>
            <td>{{nutritionniste.nom}}</td>
            <td>{{nutritionniste.text}}</td>
            <td>{{nutritionniste.subtext}}</td>
            <td>{{nutritionniste.adresse}}</td> 
             <td><v-img>{{nutritionniste.photo}}</v-img></td>  
             <td>
               <v-btn type="button" @click="deleteNutrtionniste(nutritionniste.id) " color="error"> delete</v-btn> 
                       
                  <v-container>
                
 
      <v-dialog
        transition="dialog-bottom-transition"
        style="margin-top:-350px"
     
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            @click="updateNutritionniste(nutritionniste.id)"
          >Update</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
               style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important;"
            >Update Nutritionniste</v-toolbar>
            <v-form
           
             style="width:1500px"
            ref="form"
            v-model="valid"
            lazy-validation
          >
    <v-row >
                          <v-col cols="12" sm="7">
                           <v-row>
                           <v-col cols="12" sm="4">
                            <v-text-field
                            v-model="editnom"
                            label="nom"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="4">
                            <v-text-field
                            v-model="edittext"
                            label="text"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="6">
                              <v-textarea
                              v-model="editsubtext"
                            background-color="grey lighten-2"
                            color="cyan"
                            label="subtext"
                          ></v-textarea>
                           </v-col>
                       
                           </v-row>
                          <v-text-field
                            v-model="editadresse"
                            label="adresse"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                            
                            
                               
                           
                          <v-btn color="black" dark tile  type="submit" @click="editNutritionniste" > Update</v-btn>
                 
                          </v-col>
                        </v-row> 

  </v-form>
            <v-card-actions class="justify-end">
              <v-btn
              color="blue" dark block tile
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    
   
               </v-container>
               </td>
               </tr>
               </tbody>
               </table>
                       </v-card>
        </v-col>
        </v-row>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import axios from 'axios'
export default {
  components: { SideBar },
    data() {
        return{
           dialog:false,

           nutritionnistes:{},
           nom:"",
           text:"",
           subtext:"",
           adresse:"",
           photo:"",
             editnom:"",
               edittext:"",
               editsubtext:"",
               editadresse:"",
               editphoto:"",
        } 
    },
        created(){
      this.getNutritionniste();
    },
    methods:{

        //************************Save Nutritionniste ************************* */
          saveNutritionniste(){
     
           axios.post('http://localhost:8000/api/auth/SaveNutritionniste' ,{
               nom : this.nom,
               text: this.text,
               subtext: this.subtext,
               adresse : this.adresse,
               photo:this.photo,
                

             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                    alert('success')
                    this.getNutritionniste();
            
                   
               }else{
                 alert('error')
               }
          });
        },
         //************************Fin Save Nutritionniste ************************* */

         //******************************Get Nutritionniste*************************** */
          getNutritionniste(){
       axios.get('http://localhost:8000/api/auth/getNutritionniste')
        .then (res => {
         console.log(res.data);
         this.nutritionnistes = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
      //************************Fin Get Nutritionniste ************************* */


      //***************************Delete Nutritionniste ************************* */
          deleteNutrtionniste(id){
        axios.delete('http://localhost:8000/api/auth/deleteNutritionniste/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getNutritionniste();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
       //************************Fin Delete Nutritionniste ************************* */

       /******************************update Nutritionniste******************** */
            updateNutritionniste(id){
           axios.get('http://localhost:8000/api/auth/updateNutritionniste/'+ id)
        .then(response => {
               console.log(response);
                  this.id = response.data.id;
               this.editnom = response.data.nom;
               this.edittext = response.data.text;
               this.editsubtext = response.data.subtext;
               this.editadresse = response.data.adresse;
              this.editphoto = response.data.photo;
     }); 
    },
    /****************************Fin Update Nutritionniste */

       /********************* edit Nutritionniste *********************** */
       editNutritionniste(){
           axios.put('http://localhost:8000/api/auth/editNutritionniste' ,{
                id : this.id,
               nom : this.editnom,
               text: this.edittext,
               subtext: this.editsubtext,
               adresse : this.editadresse,
               photo : this.editphoto,
                

             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                      alert('update succefuly')
                      this.getNutritionniste();
                   
               }else{
                 alert('error')
               }
          });
       },
        /*******************************Fin Edit Nutritionniste */
       mounted() {
       console.log('Nutritionniste ')
     },
    }
}
</script>