<template>
    <div class="flex flex-center q-my-md">
           <section>
             <div class="row justify-around items-center">
              <q-card  v-for="(item , index) in insurancePlans" :key="index" class="text-center  cards shadow-10 q-mx-md">
                <q-card-section class="column justify-between items-center flex-wrap">
                  <q-img :src="item.iconImage" width="50px"/>
                  <span>{{ item.title}}</span>
                </q-card-section>
               
              </q-card>
               
             </div>
           </section> 
    </div>
  </template>
       
  <script>
       import { defineComponent } from 'vue'
       import apiService from '@/services/api-services.js';
     
       export default defineComponent({
       name: 'InsurancePlans',
       data(){
        return {
            insurancePlans: null,
        }
       } ,
       mounted() {
        this.getInsurancePlan();
       },
       methods: {
        getInsurancePlan() {
            console.log('asdadadadada');
            apiService.getInsurancePlan('sabz')
            .then(response => {
                this.insurancePlans = response.data.message;
                console.log(this.insurancePlans);
            })
            .catch(error => {
            console.error('Error fetching insurance centre info:', error);
            });
        }
        }
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
    border: 2px solid #48bdd5;
    cursor: pointer;
 }
  </style>
       
       