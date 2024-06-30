<template>
  <div class="q-pa-sm">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      height="400px"
      animated
      navigation
      padding
      draggable
      class="bg-red"
    >
      <q-carousel-slide
        v-for="(item, index) in PoliciesIntroduction"
        :key="index"
        :name="style"
        :img-src="item.metaMediaFileThumbnailUrl"
      >
        <div class="absolute-bottom custom-caption bg-transparent">
          <div class="text-h5 text-dark text-center">{{ item.title }}</div>
          <!-- <div>{{ item.description }}</div> -->
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
       
  <script>
     import {defineComponent ,ref} from 'vue'
     import apiService from 'src/services/api-services';
       export default defineComponent({
       name: 'PolicyIntroduction',
      
       data(){
        return {
            PoliciesIntroduction: null,
            
        }
       } ,
       setup(){
         const slide = ref('style');
         return {
            slide
         }
       },
       mounted() {
        this.getPolicyIntroduction();
       },
       methods: {
        getPolicyIntroduction() {
            console.log('asdadadadada');
            apiService.getPolicyIntroduction('sabz')
            .then(response => {
                this.PoliciesIntroduction = response.data.message?.summaryCards ;
                console.log(this.PoliciesIntroduction);
            })
            .catch(error => {
            console.error('Error fetching insurance centre info:', error);
            });
        },
             
        },
  
     })
  </script>
  <style scoped>
    .separator{
    width: 400px;
    height: 1px;
    background-color: #e4e4e4;
    margin: 40px auto;
  }
.insurance-title{
  font-size: 12px;
    margin: 5px 0px 0px 0px;
    color: #000;
    padding: 0px 5px;
  
 }
 .cards{
    width: 145px;
    height: 150px;
    margin: 10px;
    background-color: #fff;
    border-radius: 35px;
    border: 2px solid #48bdd5;
    cursor: pointer;
 }
 .cards:hover{
    background: #eee;
 }


  </style>
       
       