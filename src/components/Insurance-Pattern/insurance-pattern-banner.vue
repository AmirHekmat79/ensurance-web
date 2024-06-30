<template>
    <div class="column total-container justify-between items-center">
        <div class="banner-title-container">
            <h2 class="banner-title">فقط با چند کلیک خودت رو بیمه کن!</h2>
            <q-img src="@/assets/steps-icon.svg" width="50px" ></q-img>
        </div> 
        <div class="q-my-md">
            <img src="@/assets/mobile-banner.png" width="500px"/>
        </div> 
    </div>
  </template>
       
  <script>
       import { defineComponent } from 'vue'
       
     
       export default defineComponent({
       name: 'InsurancePatternBanner',
      
     })
  </script>
  <style scoped>
  .total-container{
    margin: 70px !important;
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
    font-size: 16px;
  }
  </style>
       
       