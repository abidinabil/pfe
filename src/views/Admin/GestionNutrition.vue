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
      style="background:url(https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); margin-top:80px"
      dark
    >
     
    </v-card>
        <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="transparent">
                

                <h1 style="font-size:20px; "> List Nutrition</h1> <br>
                
                

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
          Ajout Nutrition
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
                 <form action="" @submit.prevent="SaveNutrition">  
               <v-row >
                   
                 
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center" >Ajouter Nutrition</h4>  
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="title"  label="title" outline  dense   color="blue"  autocomplete="false"  class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="text" label="text" outlined  dense color="blue" autocomplete="false" class="mt-4"  />
                           </v-col>
                            <v-col cols="12" sm="6">
                              <v-textarea
                              v-model="subtext"  background-color="grey lighten-2" color="cyan"  label="Label"
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
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">text</th>
            <th scope="col">subtext</th>
            <th scope="col">image</th>
            <th> Action</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="nutrition in nutritions" :key="nutrition.id">
              <td>{{nutrition.id}}</td>
            <td>{{nutrition.title}}</td>
            <td>{{nutrition.text}}</td>
            <td>{{nutrition.subtext}}</td>
             <v-img>{{nutrition.image}}</v-img>
             <td>
               <v-btn type="button" @click="deleteNutrtion(nutrition.id) " color="error"> delete</v-btn> 
               
              
                  <v-container >
                
       
      <v-dialog
        transition="dialog-bottom-transition"
        style="margin-top:-400px ;"
     
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            @click="updateNutrition(nutrition.id)"
          >Update</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
            >Update Nutrition</v-toolbar>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
    <v-row align="center" justify="center">
                          <v-col cols="12" sm="12">
                           <v-row>
                           <v-col cols="12" sm="12">
                            <v-text-field
                            v-model="edittitle"
                            label="title"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="12">
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
                            <v-col cols="12" sm="12">
                              <v-textarea
                              v-model="editsubtext"
                            background-color="grey lighten-2"
                            color="cyan"
                            label="Label"
                          ></v-textarea>
                           </v-col>
                       
                           </v-row>
                          <v-text-field
                            v-model="editimage"
                            label="image"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                               
                           
                          <v-btn color="black" dark block tile type="submit" @click="editNutrition" data-dismiss="modal"> Update</v-btn>
                 
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
    <!-- Button trigger modal -->

  <!-- Button trigger modal -->


  </v-col> 
  </v-row>
</template>
<script>
import SideBar from "@/components/SideBar.vue"
import axios from 'axios'



export default {
  components: { SideBar },
    data(){
        return{
              test: false,
              dialog:false,
              
              
                
          nutritions :{},
          id:"",
               title:"",
               text:"",
               subtext:"",
               image:"",
               edittitle:"",
               edittext:"",
               editsubtext:"",
               editimage:""
           
        
        }
    },
      created(){
      this.getNutrition();
    },
    methods:{
        onChange(e){
           console.log("selected file", e.target.files[0])
           this.image = e.target.files[0]; 
         },
         SaveNutrition(){
           let fd = new FormData();
           
         
           console.log(FormData)
            console.log(this.name)
           fd.append('image', this.image);
            fd.append('text', this.text);
                 fd.append('title', this.title);
                      fd.append('subtext', this.subtext);
           
      
           axios.post("http://localhost:8000/api/auth/Nutrition" ,fd , { 
           
           })
          
           .then(res=>{
             console.log("Response" , res.data);
               if(res.status == 200){
                    alert('success');
                    this.getNutrition();
                    
               }else{
                 alert('error')
               }
             
           })
         },

     
     /*   saveNutrition(){
    
           axios.post('http://localhost:8000/api/auth/Nutrition' ,{
               title : this.title,
               text: this.text,
               subtext: this.subtext,
               image : this.image,
                

             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                    alert('success')
            
                    this.getNutrition();
               }else{
                 alert('error')
               }
          });
        }, */
      
     



          getNutrition(){
       axios.get('http://localhost:8000/api/auth/getNutrition')
        .then (res => {
         console.log(res.data);
         this.nutritions = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
       mounted() {
       console.log('Nutrition ')
     },
     deleteNutrtion(id){
        axios.delete('http://localhost:8000/api/auth/deleteNutrition/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getNutrition();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
     updateNutrition(id){
           axios.get('http://localhost:8000/api/auth/updateNutrition/'+ id)
        .then(response => {
               console.log(response);
                  this.id = response.data.id;
               this.edittitle = response.data.title;
               this.edittext = response.data.text;
               this.editsubtext = response.data.subtext;
               this.editimage = response.data.image
     }); 
    },
       editNutrition(){
           axios.put('http://localhost:8000/api/auth/editNutrition' ,{
                id : this.id,
               title : this.edittitle,
               text: this.edittext,
               subtext: this.editsubtext,
               image : this.editimage,
                

             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                      alert('update succefuly')
                      this.getNutrition();
                   
               }else{
                 alert('error')
               }
          });
       },
       imagechange(){
         for(let i = 0 ;i<this.$refs.files.files.length; i++){
           this.image.push(this.$refs.files.files[i]);
           console.log(this.image);
         }
       },
    /*   uploadImage(){
         var self =this;
         let formData = new FormData();
         for(let i = 0; this.images.length ; i++){
         let file = self.images[i];
         formData.append('files[' + i+ ']',file)
         }
         
       }*/
    }
}
</script>
<style>
@media(max-width: 500px){
  .table thead{
    display:none;
  }
  .table, .table tbody, .table tr,  .table th, .table td{
    display: block;
    width: 100%;
  }
  .table tr{
    margin-bottom: 15px;
 
  }
    
     
      .table th::before{
        content: attr(data-label);
        position: absolute;
        left: 0;
       
        padding-left: 15px;
        font-size: 15px;
        font-weight: bold;
        text-align: left;
      };
      .si{
    height:150vh;
    background: linear-gradient(-3deg,#172b4d 50%,#2dcecc 50%, #2dce89);
}
}
</style>