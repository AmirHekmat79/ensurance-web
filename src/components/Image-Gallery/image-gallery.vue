<template>
    <div class="q-pa-md">
      <div class="row justify-center items-center text-center q-gutter-sm">
        <h2 class="gallery-title"> گالری تصاویر </h2>
        <q-img src="@/assets/introduction.svg" width="33px"></q-img>
      </div>
      <q-carousel
        v-model="currentSlide"
        transition-prev="slide-right"
        transition-next="slide-left"
        height="400px"
        infinite
        animation="fade"
        padding
        :autoplay="autoplay"
        :autoplay-interval="autoplayInterval"
        :autoplay-progress-bar="false"
        swipeable
        draggable
      >
        <q-carousel-slide
         v-for="(slide, index) in numSlides"
          :key="index"
          :name="index.toString()"
        >
          <div class="row justify-center items-center q-mx-auto q-gutter-md" >
            <div
            
              class="col-auto"
              v-for="(item, itemIndex) in InsuranceImageAlbums?.slice(
                 index * 4,
                 Math.min((index + 1) * 4, InsuranceImageAlbums.length)
              )"
              :key="itemIndex"
            >
              <q-card class="cards bg-white shadow text-white">
                <q-card-section dir="rtl" class="column justify-center items-center card-section">
                  <q-img :src="item?.metaMediaFileUrl" class="card-img" />
                  <div class="text-h6  gallery-title textColor  q-mb-md">{{ item?.title }}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import apiService from 'src/services/api-services';
  
  export default defineComponent({
    name: 'ImageGallery',
  
    data() {
      return {
        InsuranceImageAlbums: [],
        currentSlide: '0',
        autoplay: true,
        autoplayInterval: 3000,
        numSlides: 0,
      };
    },
  
    mounted() {
      this.getPolicyIntroduction();
    },
  
    methods: {
      getPolicyIntroduction() {
        apiService
          .getPolicyIntroduction('sabz')
          .then((response) => {
            this.InsuranceImageAlbums = response.data.message?.imageAlbums || [];
            this.numSlides = Math.ceil(this.InsuranceImageAlbums.length / 4);
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
    },
  
    watch: {
      currentSlide(newSlide) {
        if (newSlide === this.numSlides.toString()) {
          this.currentSlide = '0'; // Reset the slide to the first one
        }
      },
  }});
  </script>
  
  <style scoped>
 
  .gallery-title {
    font-size: 26px;
    font: 26px 'iransans';
  }
  
  .card-img {
    border-radius: 5px;
    width: 161px;
    height: 161px;
    background-position: center;
    background-size: cover;
    border-style: none;
  }
  
  .textColor {
    color: #3b1717 !important;
    font : 17px 'iransans';
    margin-top : 25px !important;
  }
 
  .cards {
    width: 191px;
    height:191px;
    margin: auto 30px !important;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .cards:hover {
    background: #eee;
  }
  </style>