<template>
    <div class="text-center q-mb-lg  q-pa-md">
        <div class="row justify-center items-center q-my-md">
            <h2 class="news-title q-mx-md">اخبار و اطلاعیه ها</h2>
            <q-img :src="imgSrc" width="40px"  ></q-img>
        </div>
        <section>
            <div class="row justify-between items-center">
                <span class="Font">خبر</span>
                <h5 class="news-subtitle">تست</h5>
           </div>
           <p  class="text-center">تست</p>
        </section>
        <section>
            <div class="row justify-between items-center">
                <span class="Font">خبر , 1402/05/04</span>
                <h5 class="news-subtitle">تست تاریخ اخبار</h5>
           </div>
           <p  class="text-center">از عباسی</p>
        </section>
        <section>
            <div class="row justify-between items-center">
                <span class="Font">خبر , 1402/05/06</span>
                <h5 class="news-subtitle">تغییر ریاست بیمه مرکزی</h5>
           </div>
           <p class="text-center">تست یک لینک از این قسمت</p>
        </section>
        <section>
           <div class="row justify-between items-center">
               <span class="Font">خبر , 1402/05/08</span>
               <h5 class="news-subtitle">تست سایت مپ اطلاع رسانی عباسی</h5>
            
           </div>
           <p class="text-center">تست</p>
        </section>
        <section>
            <div class="row justify-between items-center">
                <span class="Font">خبر , 1402/05/09</span>
                <h5 class="news-subtitle">تست وبلاک سایت مپ عباسی</h5>
           </div>
           <p  class="text-center">تست</p>
        </section>
        <q-btn class="search-news-btn">مشاهده همه</q-btn>
    </div>
  
  </template>
       
 <script>
       import { defineComponent } from 'vue'
       import news from '@/assets/news.svg';
      
       export default defineComponent({
         name: 'InsuranceNews',
         data(){
            return {
                imgSrc : news
            }
         }
         
          
       })
</script>
<style scoped>
 .news-title{
    font-size: 32px;
 }
 .news-subtitle{
    font-size: 16px;
    font-weight: 500;

 }
 .Font{
    font-family: 'iranSans' !important;
    color: #bdbdbd;
 }
 .search-news-btn{
    border-color: transparent;
    margin-top: 14px;
    padding: 10px 45px;
    background: #5e7345 !important;
    color: #e3e3e3 !important;
    border-radius: 4px;
    font-size: 18px;
 }
 section{
    width: 65%;
    display: block;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e0e0e0;
    text-align: right;
    cursor: pointer;
 }
 </style>
       
       