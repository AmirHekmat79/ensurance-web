<template>
    <div class="column total-container justify-between items-center">
        <div class="banner-title-container">
            <h2 class="banner-title">فقط با چند کلیک خودت رو بیمه کن!</h2>
            <q-img src="@/assets/steps-icon.svg" width="50px" ></q-img>
        </div> 
        <div class="q-my-md">
            <img class="banner" src="@/assets/mobile-banner.png" width="400px"/>
            <div class="row justify-around items-center banner-cards">
              <q-card  v-for="(step, index) in steps" :key="index" class="text-center  cards shadow-10 q-mx-md q-pa-md">
                <q-card-section class="column justify-between items-center flex-wrap">
                  <!-- <q-img :src="item.iconImage" width="50px"/> -->
                  <q-img :src="step.Src" width="120px" class="fit" ></q-img>
                  <p class="insurance-title">{{ step.name }}</p>
                </q-card-section>
               
              </q-card>
               
             </div>
        </div> 
    </div>
  </template>
       
  <script>
       import { defineComponent } from 'vue'
       import step1 from '@/assets/step1.svg';
       import step2 from '@/assets/step2.svg';
       import step3 from '@/assets/step3.svg';
       import step4 from '@/assets/step4.svg';
       import step5 from '@/assets/step5.svg';
     
       export default defineComponent({
       name: 'InsurancePatternBanner',
       data() {
           return {
             steps: [
               { name: 'بیمه مورد نظرت رو انتخاب کن' ,
                 Src : step1
              
               },
               { name: 'مشخصات مورد بیمه رو وارد کن' ,
                 Src :  step2
                
               },
               { name: 'قیمت بیمه رو استعلام کن' ,
                 Src : step3
               },
               { name: 'درخواستت رو نهایی کن' ,
                Src : step4
               },
               { name: 'بیمه نامه  ات آماده است' ,
                Src : step5
               },
             ]
           }
         } 
     })
  </script>
  <style scoped>
  .insurance-title{
    width: 100%;
    padding: 0px 15px 10px;
    text-align: center;
    color: #fcfcfc !important;
    margin: 35px auto;
  }
  .cards{
    /* box-shadow: 6px 20px 40px -5px rgba(31, 34, 58, 0.2); */
    background: #ccdbda !important;
    width: 245px;
    height: 245px;
    margin: 10px;
    background-color: #fff;
    border-radius: 35px;
    border: 2px solid #fff;
    cursor: pointer;
  }
  .cards:hover{
    box-shadow: 6px 20px 40px -5px rgba(31, 34, 58, 0.2);
  }
  .total-container{
    margin: 70px !important;
  }
  .banner{
    display: none;
  }
  @media screen and (max-width: 600px){
    .banner{
      display: block;
    }
    .banner-cards{
      display: none;
    }
  }
  .banner-title-container{

       text-align: center;
        display: flex;
        flex-direction: row;
        justify-content : center;
        align-items : flex-start;
        padding: 0 16px;
  }
  .banner-title{
    font-size: 20px;
  }
  </style>
       
       