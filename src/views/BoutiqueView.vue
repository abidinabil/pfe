<template>
  <v-container fluid>
    <v-card
      color="#3853D8"
      height="150px"
      tile
      flat
      class="d-flex align-center justify-center"
      dark
    >
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center">MEN'S LIFESTYLE SHOES</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col cols="12" sm="8" class="pr-0">
          <v-card height="250px" tile flat color="#3890D8">
            <v-row>
              <v-col cols="12" sm="4" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutupercase" small tile>
                  new
                </v-btn>
                <h6 class="white--text mt-8">MOUNTAIN BIKE</h6>
                <h3 class="white--text mt-5">Trek Speed Concept</h3>
                <v-btn
                  rounded
                  color="#4C9CDB"
                  dark
                  class="withoutupercase px-8 mt-10"
                >
                  More Info
                </v-btn>
              </v-col>
              <v-col cols="12" sm="8">
                <v-img
                  src="bike.png"
                  max-height="400"
                  max-width="400"
                  contain
                  class="mt-n6"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" class="pl-0">
          <v-card height="250px" tile flat color="#6857E1">
            <v-row>
              <v-col cols="12" sm="6" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutupercase" small tile>
                  new
                </v-btn>
                <h6 class="white--text mt-8">DOWN JACKET</h6>
                <h3 class="white--text mt-5">Sale Collection 2015</h3>
                <v-btn
                  rounded
                  color="#8375E7"
                  dark
                  class="withoutupercase px-8 mt-3"
                >
                  More Info
                </v-btn>
              </v-col>
              <v-col cols="12" sm="12">
                <v-img
                  src="jacket2.png"
                  max-height="400"
                  max-width="420"
                  contain
                  class="mt-n2"
             
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
           <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h6">Category</v-toolbar-title>
            
        
          </v-toolbar>
        </v-col>
      
      </v-row>
     <!---------------------------------- categorie ------------------------------->
   
            
      <!--------------------------------categorie-------------------------------->




       <v-row justify="center" class="space px-16">
          
         <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="pro in products" :key="pro.id">
    <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
     height="400"
      
      v-bind="props"
    >
      <v-img cols="12" sm="12"
        :aspect-ratio="16/9"
        cover
        :src="pro.src"
        height="300"
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2 text-white"
            style="height: 100%;"
          >
            {{pro.price}}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
   
     
        <div class="font-weight-light text-h6 mb-2">
         {{pro.name}}
        </div>
        <v-spacer><p>test</p></v-spacer>
        
      </v-card-text>
    </v-card>
  </v-hover>
  
  </v-col>
 
  </v-row>

      
    </v-card>

  </v-container>
 
</template>

<script>
export default {
    data(){
        return{
            Products:[
                {title:'Whey Proteine', prix:'180D', img:'https://www.dravelnutrition.fr/2525-thickbox_default/whey-gold-standard-whey-optimum-nutrition.jpg',text:'La whey est une protéine en poudre issue du lait de vache. Elle est également appelée protéine de petit-lait ou de lactosérum . En fonction des techniques dextractions utilisées, on obtient une poudre plus ou moins pure'},
                {title:'Iso Whey', prix:'220D', img:'https://cdn.ericfavre.com//products_images/prod_194//c_proteins-eric-favre-sport-nutrition-expert-efspiwz-iso-zero-100-whey-proteine-capuccino-front-10.jpg',text:'lorem'},
                {title:'Creatine', prix:'100D', img:"https://cdn.ericfavre.com//products_images/prod_194//c_proteins-eric-favre-sport-nutrition-expert-efspiwz-iso-zero-100-whey-proteine-capuccino-front-10.jpg",text:'lorem'},
                
            ],
      
             products:[
             
               
                {
                    id:3,
                    name:'Zara limited...',
                    type:'Denim',
                    price:'25.00',
                    src:require('../assets/img/shop/whey.jpg')
                },
                     {
                    id:3,
                    name:'Zara limited...',
                    type:'Denim',
                    price:'25.00',
                    src:require('../assets/img/shop/whey1.jpg')
                },
                 
                     {
                    id:3,
                    name:'Zara limited...',
                    type:'Denim',
                    price:'25.00',
                    src:require('../assets/img/shop/creatine.jpg')
                },
         
                {
                    id:7,
                    name:'TRUCKER JACKET',
                    type:'Jackets',
                    price:'38.00',
                    src:require('../assets/img/shop/bcaa.jpg')
                },
               
                {
                    id:11,
                    name:'TRUCKER JACKET',
                    type:'Jackets',
                    price:'38.00',
                    src:require('../assets/img/shop/vitamine.jpg')
                },
                {
                    id:12,
                    name:'COATS',
                    type:'Jackets',
                    price:'25.00',
                    src:require('../assets/img/shop/cart.jpg')
                }
            ],
        
            bpm: 1,
             methods: {
      decrement () {
        this.bpm--
      },
      increment () {
        this.bpm++
      },
     
    },
};
            
        }
    }

</script>


<style>
.container {
  padding: 0px !important;
}
.v-btn.withoutupercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
</style>