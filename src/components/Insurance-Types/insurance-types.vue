<template>
    <div class="flex flex-center q-my-md">
           <section>
             <div class="row justify-around items-center">
              <q-card  v-for="(n, index) in 3" :key="index" class="text-center  cards shadow-10 q-mx-md">
                <q-card-section class="column justify-between items-center flex-wrap">
                  <!-- <q-img :src="item.iconImage" width="50px"/> -->
                  <h6>بیمه</h6>
                </q-card-section>
               
              </q-card>
               
             </div>
           </section> 
    </div>
  </template>
       
  <script>
       import { defineComponent } from 'vue'
       
     
       export default defineComponent({
       name: 'InsuranceTypes',
      
     })
  </script>
  <style scoped>
 h6{
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
    border: 2px solid #fff;
    cursor: pointer;
 }
  </style>
       
       