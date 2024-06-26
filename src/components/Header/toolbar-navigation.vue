<template>
   <q-toolbar class="text-primary  shadow-6 column justify-start" >
       <div class="row justify-between items-center">
        <div>
             <q-btn class="register-btn"><a>ثبت نام</a></q-btn>
             <q-btn class="entrance-btn"><a> ورود</a></q-btn>
            <!-- <q-btn class="consult-btn"> <a> درخواست مشاوره</a></q-btn> -->
       </div>
       <q-space/>
       <q-toolbar-title   class="text-white title-container">
         <h6  class="title q-ml-auto">کارگزاری راه سبز توسعه امید </h6>
       </q-toolbar-title>
       </div>
      <div dir="rtl" class="row justify-start items-center q-mr-auto">
          <ul class="navLink-container row justify-start items-center ">
              <li class="navLink-item">
                  <q-btn flat class="navLink-btn"><a href="#">خانه</a></q-btn>
                </li>
                <li class="navLink-item">
                    <q-btn flat class="navLink-btn"><a href="#">محصولات و خدمات</a></q-btn>
                </li>
                <li class="navLink-item">
                    <q-btn flat class="navLink-btn"><a href="#">مجله بیمه ای</a></q-btn>
                </li>
                <li class="navLink-item">
                    <q-btn flat class="navLink-btn"><a href="#">پیگیری</a></q-btn>
                </li>
                
                <li class="navLink-item">
                    <q-btn flat class="navLink-btn"><a href="#">درباره ما</a></q-btn>
                </li>
                <li class="navLink-item">
                
                <q-btn flat  class="navLink-btn"><a href="#"> تماس با ما</a></q-btn>
             </li>
            
        </ul>
      </div>
    </q-toolbar>
</template>
     
<script>
     import { defineComponent } from 'vue'
     
     
     export default defineComponent({
       name: 'ToolbarNavigation',
     
     })
</script>
<style scoped>
.title-container{
    padding:0px 280px;
   
}
.title{
  
    font-size: 17px;
    margin-left: 20rem;
}

.entrance-btn{
  padding: 8px 50px !important;
  background: #3c9e75 !important;
  color : #fff;
  text-align: center;
  cursor: pointer;
  margin-left: 20px !important;
  font-size : 14px;
  font-weight: 500;
}
.register-btn{
  padding: 8px 25px  !important;
  background: #a8cf8c !important;
  color : #fff;
  text-align: center;
  cursor: pointer;
  font-size : 14px;
  font-weight: 500;

}
/* .consult-btn{
  padding: 8px 25px  !important;
  background: #f2c037 !important;
  margin-left: 20px !important;
  color : #fff;
  font-size : 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
} */
.navLink-container{
    list-style-type: none;
    
}
.navLink-item{
    margin: 5px 10px;
}
.navLink-item a {
    text-decoration:none ;
    color : #fff;
    cursor: pointer;
}
.navLink-btn {
    font-size: 14px;
}
</style>
     
     