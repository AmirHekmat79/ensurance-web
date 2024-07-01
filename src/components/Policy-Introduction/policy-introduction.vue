<template>
<div class="q-pa-md">
   <div class="row justify-center items-center text-center q-gutter-md">
    <h2 class="introduction-title">معرفی بیمه نامه‌ها</h2>
    <q-img src="@/assets/introduction.svg" width="50px"></q-img>
   </div>
    <q-carousel
      v-model="currentSlide"
      transition-prev="slide-right"
      transition-next="slide-left"
      height="100%"
      infinite
      animated
      padding
      :autoplay="autoplay"
      swipeable
      draggable
     
      
    >
      <q-carousel-slide 
      
        v-for="(slide, index) in PoliciesIntroduction && Math.ceil(PoliciesIntroduction.length / 2)"
        :key="index"
        :name="index.toString()"
      >
      <div class="row justify-center items-center q-mx-auto q-gutter-lg">
        <div class="col-md-3 col-xs-8" 
         v-for="(item, itemIndex) in PoliciesIntroduction.slice(
              index * 3,
              index * 3 + 3
            )"
            :key="itemIndex"
        >
          <q-card class="my-card bg-white shadow text-white">
          <q-card-section  dir="rtl" class="column justify-center items-center card-section">
            <q-img :src="item.metaMediaFileUrl" class="card-img" />
            <div class="text-h6 title textColor q-mb-md">{{ item.title }}</div>
            <p class="textColor text-right overflow-hidden">{{ item.summary }}</p>
          </q-card-section>
          <q-separator light />
          <q-card-actions class="row justify-between items-center">
            <q-btn flat>
              <q-img src="@/assets/back.png" width="20px"></q-img>
            </q-btn> 
            <span class="text-dark">شرایط بیمه نامه</span>
          </q-card-actions>
         </q-card>
        </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
   
  </div>
</template>
       
  <script>
     import {defineComponent  } from 'vue'
     import apiService from 'src/services/api-services';
       export default defineComponent({
       name: 'PolicyIntroduction',
       
       data(){
        return {
            PoliciesIntroduction: null,
            currentSlide: '0',
            autoplay: true,
           autoplayInterval: 3000, 
            
        }
       } ,
      
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
  .title{
    font-size: 18.7;
    margin-top: 60px;
  }
  .introduction-title{
    font-size: 26px;
  }

.card-img{
  border-radius: 5px;
  width: 100%;
  height: 200px;
  border-style: none;

}
.card-section {
  padding: 20px;
 min-height: 200px; 

}
.textColor {
  color : #3b1717 !important;
}
.insurance-title{
  font-size: 12px;
    margin: 5px 0px 0px 0px;
    color: #000;
    padding: 0px 5px;
  
 }
 .cards{
    width: 396px;
    height: 561px;
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
       
       