<template>
    <div class="si">
         <v-container style="padding:7rem">
             <h1 style="color:white" class="text-center">Welcome</h1>
             <p style="color:white" class="text-center">Use these awesome forms to login or create new account in <br> your project for free.</p>
             <br>
             <br>
               <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
  <br>
  <br>
  

        <div class="text-center">
          Sign up with
        </div>
        <br>
        
        <v-row class="text-center">
        <v-col cols="12" md="12" >
             <v-btn  style="  width:130px ; border-radius:5px" color="white " ><v-icon color="blue">mdi-facebook</v-icon > Facebook</v-btn> 
             <v-btn  style="  width:130px ; border-radius:5px" color="white "><v-icon color="red">mdi-google</v-icon>Google</v-btn>    
        </v-col>
        <br>
        <v-divider></v-divider> <br>         
        </v-row>
        <br><br>
           <p class="text-center">Or Sign Up in with credentials</p>
           
           
            <v-form>
                <v-container>
                     <v-text-field
                  
                color="secondary"
                label="Name"
                variant="contained"
                placeholder="Placeholder"
                v-model="name"
              ></v-text-field>
              <v-text-field
                  
            color="secondary"
            label="Email"
            variant="contained"
            placeholder="Placeholder"
            v-model="email"
          >
          
          </v-text-field>
               <v-text-field
                  
            color="secondary"
            label="Password"
            variant="contained"
            placeholder="Placeholder"
            type="password"
            v-model="password"
          ></v-text-field>  
              <input type="hidden" v-model="role">
          <div class="text-center">
          <v-btn flat color="#5e72e4"  @click.prevent="performRegister" > Sign up </v-btn> </div>
                </v-container>
                  
            </v-form>
            <br>
            <br>
            
        

   
  </v-card>
         </v-container>
         <v-container style="margin-top:-130px">
             <v-row class="text-center">
                 <v-col cols="12" md="6">
                <p style="color:white">Forgot password?</p>
                 </v-col>
                  <v-col cols="12" md="6">
                <p style="color:white">login into your account</p>
                 </v-col>
             </v-row>
         </v-container>
    </div>
</template>

<script>

export default {

  name: "SignIn",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "coach",
      error: "",
      isLoading: false,
    };
  },
  methods: {
    performRegister() {
      this.isLoading = true;
      this.$store
        .dispatch("performRegisterCoach", {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
        })
        .then((res) => {
          console.log(res);
          this.isLoading = false;

          this.$router.push("/NutritionView");
        })
        .catch((err) => {
          this.isLoading = false;
          this.error = " Registration faild";
          console.log(err.message);
        });
    },
  },
};
</script>


<style>
.si{
    height:150vh;
    background: linear-gradient(-3deg,#172b4d 50%,#2dcecc 50%, #2dce89);
}
</style>