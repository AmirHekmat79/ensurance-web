<template>
  <h2 class="text-h6 text-right">یادآور تمدید بیمه نامه</h2>
  <q-form>
   <div class="row justify-center items-center">
    <div class="col-md-4">
      <q-input v-model="text" label="نام"  outlined/>  
    </div>
    <div class="col-md-4">
      <q-input v-model="text" label="ایمیل" outlined />
    </div>
    <div class="col-md-4">
      <q-input v-model="text" label="نام خانوادگی بیمه گذار" outlined />
    </div>
    <div class="col-md-4">
      <q-input v-model="text" label="شهر"  outlined />
    </div>
   </div>
  
 </q-form>



</template>
  
  <script>
  import { defineComponent } from 'vue';

  
  export default defineComponent({
    name: 'InsuranceRevivalForm',
  
    
 });
  </script>
  
  <style scoped>
  .insurance-form-title{
    font-size: 26px;
    text-align: right;
    margin: 2rem !important;
  }
 
  </style>