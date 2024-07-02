<template>
    <div class="q-pa-md q-mx-auto text-center">
      <div class="row justify-center items-center text-center q-gutter-sm">
        <h2 class="gallery-title"> گالری ویدئوها </h2>
      </div>
      <div class="flex">
        <div 
              class="col-md-6 video-desktop"
              v-for="(item, itemIndex) in InsuranceVideoGalleries.slice(0,1)"
              :key="itemIndex"
            >
              <div class="bg-white shadow text-white">
                <div class="row justify-center items-center card-section">
                    <video class="expand-video" controls>
                        <source :src="item.metaMediaFileUrl" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
              </div>
        </div>
       <div class="col-6">
        <q-carousel
        v-model="currentSlide"
        transition-prev="slide-right"
        transition-next="slide-left"
        height="auto"
        infinite
        animation="fade"
        padding
        :autoplay="false"
        :autoplay-interval="autoplayInterval"
        :autoplay-progress-bar="false"
        swipeable
        draggable
        control-color="black"
        navigation
      >
        <q-carousel-slide
         v-for="(slide, index) in numSlides"
          :key="index"
          :name="index.toString()"
        >
          <div class="row justify-center  items-center text-center" >

            <div class="column justify-center items-center q-gutter-sm">
                <div 
                class="col-auto"
                v-for="(item, itemIndex) in InsuranceVideoGalleries.slice(0,3)"
                :key="itemIndex"
            >
              <div class=" bg-white shadow text-white">
                <div  class="row justify-center items-center card-section">
                    <video controls>
                        <source :src="item.metaMediaFileUrl" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
              </div>
            </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
       </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import apiService from 'src/services/api-services';
  
  export default defineComponent({
    name: 'VideoGallery',
  
    data() {
      return {
        InsuranceVideoGalleries: [],
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
            this.InsuranceVideoGalleries = response.data.message?.videoGalleries || [];
            this.numSlides = Math.ceil(this.InsuranceVideoGalleries.length / 3);
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
    color: #b37676 !important;
  }
  
  video {
    border-radius: 5px;
    width: 298px;
    height: 150px;
    background-position: center;
    background-size: cover;
    border-style: none;
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow : clip;
  }
  .expand-video {
    border-radius: 5px;
    width: 656px;
    height: 385px;
    background-position: center;
    background-size: cover;
    border-style: none;
    object-fit: contain;
    overflow : clip;
  }
  .video-desktop{
        display: block;
    } 
 @media screen and (max-width : 716px){
    .video-desktop{
        display: none;
    } 
 }

  </style>