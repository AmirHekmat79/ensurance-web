<template>
 <div class="q-pa-md">
  <h2 class="text-h6 text-right  revival-insurance-title">یادآور تمدید بیمه نامه</h2>
  <q-form>
   <div class="row justify-center items-center q-gutter-md">
      <div class="col-lg-3 col-md-4 col-xs-6">
        <q-input v-model="text" label="ایمیل" outlined  >
          <template v-slot:append>
          <q-avatar>
              <img :src="insuranceEmailIcon" width="32px" />
            </q-avatar>
       </template>
        </q-input>
      </div>
      <div class="col-lg-3 col-md-4 col-xs-6" >
        <q-input v-model="text" label="شماره تلفن همراه"  outlined 
        >
          <template v-slot:append>
          <q-avatar>
              <img :src="insurancePhoneIcon" width="32px" />
            </q-avatar>
       </template>
        </q-input>
    
      </div>
      <div class="col-lg-3 col-md-4  col-xs-6">
        <q-select outlined v-model="model" :options="options" label="نوع بیمه نامه" 
        >
          <template v-slot:append>
           <q-avatar>
            <img :src="insuranceTypeIcon" width="32px" />
          </q-avatar>
        </template>
        </q-select>
      </div>
      <div class="col-lg-3 col-md-4  col-xs-6" >
        <q-input v-model="text" label="نام خانوادگی بیمه گذار" outlined
        >
          <template v-slot:append>
          <q-avatar>
              <img :src="insurancePersonIcon" width="32px" />
            </q-avatar>
       </template>
        </q-input>
      </div>
      <div class="col-lg-3 col-md-4  col-xs-6" >
       <q-input  v-model="text" label="نام"  outlined
       >
        <template v-slot:append>
          <q-avatar>
              <img :src="insurancePersonIcon" width="60px" />
            </q-avatar>
       </template>
       </q-input>
      </div>
      <div class="col-lg-3 col-md-4 col-xs-6" >
       <q-select outlined v-model="Mmodel" :options="Months" label="ماه" 
       >
        <template v-slot:append>
          <q-avatar>
              <img :src="insuranceMonthIcon" width="60px" />
            </q-avatar>
       </template>
       </q-select>
      </div>
      <div class="col-lg-3 col-md-4 col-xs-6" >
       <q-select outlined v-model="dmodel" :options="days" label="روز"
       >
        <template v-slot:append>
          <q-avatar>
              <img :src="insuranceMonthIcon" width="60px" />
            </q-avatar>
       </template>
       </q-select>
      </div>
      <div class="col-lg-3 col-md-4  col-xs-6">
       <q-input  v-model="text" label="شهر"  outlined >
        <template v-slot:append>
          <q-avatar>
              <img :src="insuranceLocationIcon" width="60px" />
            </q-avatar>
       </template>
       </q-input>
      </div>
      <div class="col-lg-3 col-md-4  col-xs-6">
       <q-select outlined v-model="Pmodel" :options="Provinces"  label="استان">
        <template v-slot:append>
          <q-avatar>
              <img :src="insuranceLocationIcon" width="60px" />
            </q-avatar>
       </template>
       </q-select >
      </div>
   </div> 
  </q-form>
  <div class="row justify-end items-center">
    <div class="col-lg-3 col-md-4 col-xs-6">
    <q-btn class="insurance-revival-btn">یادآوری کن</q-btn>
  </div>
  </div>
 </div>
</template>
  
  <script>
  import { defineComponent , ref } from 'vue';
  import umberella from '@/assets/umberella.svg'
  import phone from '@/assets/phone.svg';
  import email from '@/assets/email.svg';
  import person from '@/assets/person.svg';
  import location from '@/assets/location.svg';
  import month from '@/assets/month.svg';
  export default defineComponent({
    name: 'InsuranceRevivalForm',
    setup(){
      return{
        model: ref(null),
          options: [
            'بیمه ثالث خودرو', 'بیمه بدنه', 'بیمه مسئولیت  حرفه ای پزشکان و پیراپزشکان ', 'بیمه عمر و زندگی انفرادی'
          ] ,
          dmodel : ref(null) ,
          days : [
              '1 ام ',  '2 ام ',  '3 ام ' ,  '4 ام ' ,  '5 ام ' ,  '6 ام ' , '7 ام ' , '8 ام ' ,  '9 ام ' ,  '10 ام ' ,
               '11 ام ' ,  '12 ام ' ,  '13 ام ' , '14 ام ' ,  '15 ام ' ,  '16 ام ',  '17 ام ' ,  '18 ام ' ,  '19 ام ' ,
                '20 ام ' ,  '21 ام ' ,  '22 ام ',  '23 ام ' ,  '24 ام ' , '25 ام ' ,  '26 ام ' ,
                 '27 ام ' ,  '28 ام ' ,  '29 ام ' , '30 ام ', '31 ام '
          ],
          Pmodel : ref(null) ,
          Provinces: [
            'آذربایجان شرقی', 'آذربایجان غربی ', 'اردبیل ', 'اصفهان' , 'تهران'
          ] ,
          Mmodel : ref(null) ,
          Months: [
            'فروردین', 'اردیبهشت', 'خرداد ', 'تیر' , 'مرداد', 'شهریور' , 'مهر' , 'آبان' , 'آذر',
          ] ,
          insuranceTypeIcon : umberella ,
          insurancePhoneIcon : phone ,
          insuranceEmailIcon : email ,
          insurancePersonIcon: person ,
          insuranceLocationIcon : location ,
          insuranceMonthIcon : month ,

      }
    }
    
 });
  </script>
  
  <style scoped>
  .insurance-form-title{
    font-size: 26px;
    text-align: right;
    margin: 2rem !important;
  }
  .revival-insurance-title{
    margin-right: 60px !important; 
  }
  .q-field__control {
    text-align: end;
    direction: ltr;
}
.insurance-revival-btn{
  background: #e85454 !important;
  color: #ffffff !important;
  padding: 10px 45px;
  margin: 15px auto;
  font: 18px 'iransans';
}
  </style>