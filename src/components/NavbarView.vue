<template>
  <nav>
      <v-toolbar-title class="text-uppercase " style="color:white">
      <span class="font-weight-light">Fit</span>
      <span>Body</span>
   
    </v-toolbar-title>
       
    <input type="checkbox" id="click">
    <label for="click" class="menu-btn">
      <i class="fas fa-bars"></i>
    </label>
 
    <ul>
      <li><router-link to="EntrainementView">Entrainement</router-link></li>
      <li><router-link to="NutritionView">Nutrition</router-link></li>
      <li>
             <v-menu>
      <template v-slot:activator="{ props }">
        <li v-bind="props"  >
          <router-link to="">Blog</router-link>
        </li>
      </template>
      <v-list>
               <li><router-link to="">Actualité</router-link></li>
                <li><router-link to="NutritionnisteView">Nutritionniste</router-link></li>
                <li><router-link to="CoachView1">Coach</router-link></li>
                 <li><router-link to="GymView">Gym</router-link></li>
      </v-list>
    </v-menu>
      </li>
       <li><router-link to="">Boutique</router-link></li>
          <li v-if="loggedIn"><router-link to="ProfileView">Profile</router-link></li>
              <li v-if="loggedIn"><router-link to="CreateWorkout">Create Workout</router-link></li>
      <li>  <v-btn v-if="!loggedIn" to="/SignIn">Se Connecter</v-btn></li>
       <li>  <v-btn v-if="!loggedIn" to="/SignUp">Commencer dés maintenant</v-btn></li>  
             <li v-if="loggedIn">  <v-btn @click.prevent="performLogout" >Logout</v-btn></li> 
    </ul>
  </nav>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
} 
nav{
  
  display: flex;
  height: 80px;
  width: 100%;
  background: #1b1b1b;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 100px;
  flex-wrap: wrap;
}
nav .logo{
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}
nav ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;

}
nav ul li{
  margin: 0 5px;
  
}
nav ul li a{
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
 
  border-radius: 5px;
  letter-spacing: 1px;
  
}
nav ul li a.active,
nav ul li a:hover{
  color: #111;
  background: #fff;
}
nav .menu-btn i{
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"]{
  display: none;
}
@media (max-width: 1000px){
  nav{
    padding: 0 40px 0 50px;
  }
}
@media (max-width: 920px) {
  nav .menu-btn i{
    display: block;
  }
  #click:checked ~ .menu-btn i:before{
    content: "\f00d";
  }
  nav ul{
    position: absolute;
    top: 80px;
    left: -100%;
    background: #111;
    height: 120vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
  }
  #click:checked ~ ul{
    left: 0;
  }
  nav ul li{
    width: 100%;
    margin: 40px 0;
  }
  nav ul li a{
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul li a{
    margin-left: 0px;
  }
  nav ul li a.active,
  nav ul li a:hover{
    background: none;
    color: cyan;
  }
}


</style>

<script>
export default {
  data() {
    return{
      token:null
    }
    
  },
  mounted(){
    this.chekUserStatus();
  },


  methods: {
    chekUserStatus(){
      if(localStorage.getItem('token') != null){
        this.token = localStorage.getItem('token')
      }
    },
   performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then((res) => {
          console.log(res);
          this.$router.push("/exampleView");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
    computed: {
    loggedIn() {
      return this.$store.getters.get_loggedIn;
    }
  },
}
</script>
