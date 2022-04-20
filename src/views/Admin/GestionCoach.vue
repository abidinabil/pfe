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
      style="background:url(https://images.pexels.com/photos/5646011/pexels-photo-5646011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); margin-top:80px"
      dark
    >
     
    </v-card>
         <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> List Coach</h1> <br>
                
                

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
      Ajout Coach
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
                  <form action="" @submit.prevent="SaveCoach">   
               <v-row >
                   

                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Ajouter Coach</h4>
                        
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="name"
                            label="name"
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
                            v-model="specialite"
                            label="specialite"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="age"
                            label="age"
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
                            label="Label"
                          ></v-textarea>
                           </v-col>
      
                           </v-row>
                           <v-file-input
                          accept="image/*" label="File input"    @change="onChange" ></v-file-input>
    
                       <input type="submit" value="Ajouter">
                 
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                  </v-row>
                  </form>  
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
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">text</th>
            <th scope="col">specialite</th>
            <th scope="col">age</th>
                <th scope="col">subtext</th>
                 <th scope="col">photo</th>
            <th> Action</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="coach in coaches" :key="coach.id">
              <td>{{coach.id}}</td>
            <td>{{coach.name}}</td>
            <td>{{coach.text}}</td>
            <td>{{coach.specialite}}</td>
             <td>{{coach.age}}</td>
              <td>{{coach.subtext}}</td>
              <img :src="'./assets/Coaches/'+coach.photo" :alt="coach.photo"><img>
             <td>
               <v-btn type="button" @click="deleteCoach(coach.id) " color="error"> delete</v-btn> 
               
              
                  <v-container >
                
       
      
      <v-dialog
        transition="dialog-bottom-transition"
        style="margin-top:-350px"
     
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            @click="updateCoach(coach.id)"
          >Update</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
               style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important;"
            >Update Coach</v-toolbar>
            <v-form
           
             style="width:1500px"
            ref="form"
            
            lazy-validation
          >
    <v-row >
                          <v-col cols="12" sm="7">
                           <v-row>
                           <v-col cols="12" sm="4">
                            <v-text-field
                            v-model="editname"
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
                             <v-col cols="12" sm="4">
                            <v-text-field
                            v-model="editspecilaite"
                            label="text"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                             <v-col cols="12" sm="4">
                            <v-text-field
                            v-model="editage"
                            label="text"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="12">
                              <v-textarea
                              v-model="editsubtext"
                            background-color="grey lighten-2"
                            color="cyan"
                            label="subtext"
                          ></v-textarea>
                           </v-col>
                                    <v-file-input
                    accept="image/*"
                    label="File input"
                    ref="files"
                    @change="onChange"
                  ></v-file-input>
                       
                           </v-row> 
                          <v-btn color="black" dark tile  type="submit" @click="editCoach" > Update</v-btn>
                 
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
import axios from 'axios';


export default {
  components: { SideBar },
    data() {
        return{
           dialog:false,
           coaches:{},
           id:"",
           name:"",
           text:"",
           specialite:"",
           age:"",
           subtext:"",
           photo:"",
           editname:"",
           edittext:"",
           editspecialite:"",
           editage:"",
           editsubtext:"",
           editphoto:"",
          

        } 
    },
        created(){
      this.getCoach();
    },
    methods:{
           onChange(e){
           console.log("selected file", e.target.files[0])
           this.photo = e.target.files[0]; 
         },
         SaveCoach(){
           let fd = new FormData();
           
         
           console.log(FormData)
            
           fd.append('photo', this.photo);
              fd.append('name', this.name);
                 fd.append('age', this.age);
            fd.append('text', this.text);
               fd.append('specialite', this.specialite);
                
               fd.append('subtext', this.subtext);
           
      
           axios.post("http://localhost:8000/api/auth/SaveCoach" ,fd , { 
           
           })
          
           .then(res=>{
             console.log("Response" , res.data);
               if(res.status == 200){
                    alert('success');
                    this.getCoach();
                    
               }else{
                 alert('error')
               }
             
           })
         },

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
    

         deleteCoach(id){
        axios.delete('http://localhost:8000/api/auth/deleteCoach/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getCoach();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
      updateCoach(id){
           axios.get('http://localhost:8000/api/auth/updateCoach/'+ id)
        .then(response => {
               console.log(response);
               this.id = response.data.id;
               this.editname = response.data.name;
               this.edittext = response.data.text;
               this.editspecialite = response.data.specialite;
               this.editage = response.data.age;
               this.editsubtext = response.data.subtext;
               this.editphoto = response.data.photo
     }); 
    },
       editCoach(){
           axios.put('http://localhost:8000/api/auth/editCoach' ,{
                id : this.id,
               name : this.editname,
               text: this.edittext,
                specialite: this.editspecialite,
               age: this.editage,
               subtext: this.editsubtext,
               photo : this.editphoto,
                

             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                      alert('update succefuly')
                      this.getCoach();
                   
               }else{
                 alert('error')
               }
          });
       },
    }
   
}
</script>