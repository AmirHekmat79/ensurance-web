<template>
    <div class="flex flex-center q-mb-lg  q-pa-md">
           <section class="insurance-types-container">
             <div class="row justify-around items-center ">
              <q-card  v-for="(type, index) in types" :key="index" class="text-center  cards shadow-10 q-mx-md">
                <q-card-section class="column justify-between items-center flex-wrap">
                  <q-img :src="type.Src" width="50px" ></q-img>
                  <p class="insurance-name">{{ type.name }}</p>
                </q-card-section>
               
              </q-card>
               
             </div>
           </section> 
    </div>
    <div class="separator"></div>
  </template>
       
 <script>
       import { defineComponent } from 'vue'
       import cureInsurance from '@/assets/cure-insurance.png';
       import Doctor from '@/assets/Doctor.png';
       import carInsurance from '@/assets/car-insurance.png';
       import thirdInsurance from '@/assets/third-insurance.png';
       export default defineComponent({
         name: 'InsuranceTypes',
         data() {
           return {
             types: [
               { name: 'بیمه عمر و زندگی انفرادی' ,
                 Src : cureInsurance
              
               },
               { name: 'بیمه مسئولیت  حرفه ای پزشکان و پیراپزشکان' ,
                 Src :  Doctor
                
               },
               { name: 'بیمه بدنه' ,
                 Src : carInsurance
               },
               { name: 'بیمه ثالث خودرو' ,
                Src : thirdInsurance
               },
             ]
           }
         }
       })
</script>
  <style scoped>
  .separator{
    width: 400px;
    height: 1px;
    background-color: #e4e4e4;
    margin: 50px auto;
  }
@media screen and (min-width: 864px) {
  .insurance-types-container {
    width: 100%;
    position: absolute;
   transform: translate(-40px , -50px);
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    z-index: 1;
    max-width: 80%;
}
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
 .cards:hover{
  transform: translateY(-8px);
  transition: all .4s ease-in-out linear;
 }
 .insurance-name{
   padding: 10px 5px 0px;
   font-size: 12px;
 }
  </style>
       
       