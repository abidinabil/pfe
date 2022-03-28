<template>
    <div class="Team">
        <h1 class="subheading grey--text"> Team</h1>
         <v-container>
            <v-row>
                <v-col xs="12" md="4" lg="3" v-for="person in team" :key="person.Name">
                  <v-card class="mx-auto" max-width="344">
 <v-img  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"  ></v-img>

    <v-card-title> {{person.Name}} </v-card-title>

    <v-card-subtitle>  {{person.role}}</v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text>
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon @click="show = !show"   >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
         {{person.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
                </v-col>
                </v-row> 
         </v-container>
    </div>
</template>

<script>
export default {
    data(){
        
        return {
        team: [
            { Name: 'Hammouda', role: 'web developper', description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et optio vero, iste eum elige dolorum est eos quisquam!' },
            { Name: 'Ayoub', role: 'web developper' ,  description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et optio vero, iste eum elige dolorum est eos quisquam!'},
            { Name: 'Farah', role: 'web developper', description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et optio vero, iste eum elige dolorum est eos quisquam!' },
            { Name: 'Nabil', role: 'web developper',  description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et optio vero, iste eum elige dolorum est eos quisquam!' },
            { Name: 'Nabil', role: 'web developper',  description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et optio vero, iste eum elige dolorum est eos quisquam!' },
            
                

      ],
        show: false,
        }
    }
}
</script>