<template>
 <q-bar v-if="showBar" class="bar-bg text-info  q-py-lg">
   <div class="row justify-start items-center text-center">
    <div class="contact-container">
        <a class="cursor-pointer">
            <span class="bar-link">درباره ما</span>
            <q-img class="q-mx-md" width="20px" src="/icons/letter.svg"/>
           
        </a>
        <a class="cursor-pointer" >
            <span class="bar-link">تماس با ما</span>    
            <q-img  class="q-mx-md" width="20px" src="/icons/info_icon.svg"/>
        </a>
    </div>
   
    <div class="q-gutter-sm social-svg-container">
        <a class="cursor-pointer">
        <q-img width="20px" src="/icons/whatsapp.svg"/>
       </a>
    <a class="cursor-pointer">
        <q-img width="20px" src="/icons/twitter-x.svg"/>
    </a>
    <a class="cursor-pointer">
        <q-img  width="20px"  src="/icons/telegram.svg"/>
    </a>
    <a class="cursor-pointer">
        <q-img   width="20px" src="/icons/robika.svg"/>
    </a>
    <a class="cursor-pointer">
        <q-img  width="20px"  src="/icons/linkedin.svg"/>
    </a>
    <a class="cursor-pointer">
        <q-img   width="20px" src="/icons/instagram.svg"/>
    </a>
    <a class="cursor-pointer">
        <q-img   width="20px" src="/icons/facebook.svg"/>
    </a>
    <a class="cursor-pointer">
        <q-img   width="20px"  src="/icons/eitaa.svg"/>
    </a>
    <a class="cursor-pointer"><q-img width="20px" src="/icons/bale.svg"/></a>  
    </div>
   
   </div>
 </q-bar>
</template>
  
<script>
  import { defineComponent , ref } from 'vue'
  
  
  export default defineComponent({
    name: 'BarNavigation',
    setup() {
    const showBar = ref(true);
    const scrollThreshold = 100 ;

    const handleScroll = () => {
      const scrollPosition =  document.documentElement.scrollTop;
      showBar.value = scrollPosition < scrollThreshold;
    }

    window.addEventListener('scroll', handleScroll);

    return {
      showBar
    }
  }
  
  })
</script>
<style scoped>
.social-svg-container{
  position: absolute;
  right: 8px;
  padding-right: 130px;
}
.bar-bg{
    background-color: #319ad6 !important;
   
}
.bar-link{
    color: #8ee8d7 !important;
}
.contact-container{
    padding-left: 130px;
}
@media only screen and (max-width: 782px) {
    .contact-container{
        display: none;
    }
    .social-svg-container{
        position: absolute;
        text-align: center;
        margin:20px auto !important;
    }
}
</style>
  
  