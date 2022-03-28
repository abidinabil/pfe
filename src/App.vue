<template>
  <v-app > 
    <NavbarView/>

    <v-content  >
      <router-view></router-view>
    </v-content>
  
  </v-app>
</template>

<script>
import NavbarView from "./components/NavbarView.vue"

export default {
  name: 'App',
  components:{
    NavbarView,
  
  
  },

  data: () => ({
    //
  }),
}
</script>

