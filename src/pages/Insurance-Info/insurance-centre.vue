<template>
  <q-page class="flex flex-center">
    <div class="insurance-info-container bg-primary">
                <div class="row justify-center items-center text-center q-my-md">
                  <div class="col-md-6 q-pa-md ">
                    <h5 class="text-white text-center">
                      {{ insuranceCentreInfo?.title }}
                    </h5>
                    <h6 class="text-white text-center">
                      {{ insuranceCentreInfo?.subTitle }}
                    </h6>
                  </div>
                  <div class="col-md-6 q-pa-md">
                    <img src="https://media.easybimeh.com//Easybimeh/FileManager/InsuranceCentre/sabz/637447452444242558.jpg" style="border-radius: 15px; width: 400px;">
                    <div class="row justify-center q-mx-auto items-center q-px-md bg-info" style="width:fit-content ; position: absolute; bottom: 188px;right: 15%;" >
                      <q-btn flat ><q-img src="../../assets/back.png" width="20px"></q-img></q-btn> 
                      <span class="text-white"> رشد مقرری بگیران بیمه بیکاری با کرونا</span>
                      
                    </div>
                  </div>
                </div>
    </div>
  

  </q-page>
</template>
     
<script>
     import { defineComponent } from 'vue'
     import apiService from '@/services/api-services.js';
     
     export default defineComponent({
       name: 'InsuranceCentre',
       data(){
        return {
            insuranceCentreInfo: null,
                   
            
        }
       } ,
       mounted() {
        this.getInfo();
       },
       methods: {
            getInfo() {
            console.log('sda');
            apiService.getInsuranceCentreInfo('sabz')
            .then(response => {
                this.insuranceCentreInfo = response.data.message;
                console.log(this.insuranceCentreInfo);
            })
            .catch(error => {
            console.error('Error fetching insurance centre info:', error);
            });
        }
        }
     })
</script>
<style scoped>
  .insurance-info-container{
    /* height: 100vh; */
    width: 100%;
   height: 500px;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
  }
</style>
     
     