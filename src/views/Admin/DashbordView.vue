<template>
  

     <side-bar />
    
     <div >
        <v-card
      style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important; margin-top:90px; "
      height="500px"
      tile
      flat
      
      
      class="d-flex align-center "
      
    >
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="stat in Statistics" :key="stat.title">
           <v-card
    class="mx-auto"
    max-width="250"
    max-height="300"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{stat.title}}
        </div>
        <v-icon>{{stat.icon}}</v-icon>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

 
  </v-card>
        </v-col>
      
      </v-row>
    </v-card>
      <v-card tile class="mx-16 mt-n10 card1" color="white">
       <v-row>
         <v-col cols="12" md="12" >
             <table class="table" style="margin-top:30px; ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
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
                    </v-col>
                            </v-row>
                            </v-card>
                            </div>
                            
                    
              
  
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
    
    data() {
      return  {
         Statistics:[
           {icon:'mdi-chart-areaspline',title:'Total User',text:''},
            {icon:'mdi-chart-bar-stacked',title:'Total Coach',text:''},
             {icon:'mdi-chart-bell-curve',title:'Total Product',text:''},
              {icon:'mdi-chart-bell-curve',title:'Total Product',text:''}
         ]
      }
    },
    components: { SideBar }
}
</script>