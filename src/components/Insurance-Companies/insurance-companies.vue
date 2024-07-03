<template>
    <div class="q-pa-md">
      <div class="row justify-around items-center text-center q-gutter-md">
        <h3 class="company-section-title">شرکت های بیمه</h3>
      </div>
    <div class="row items-center justify-center q-mx-auto q-gutter-md">
        <q-btn
        flat
        round
           color="white"
        @click="prevSlide"
        :disable="currentSlide === '0'"
         class="col-auto bg-dark q-px-sm"
      >
        <q-icon name="chevron_left" />
      </q-btn>
      <q-carousel
      class="cursor-pointer"
        v-model="currentSlide"
        transition-prev="slide-right"
        height="300px"
        infinite
        animation="fade"
        padding
        style="overflow: hidden;"
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
          <div class="row  justify-around  items-center q-gutter-lg">
            <div
                class="col-sm-4  col-xs-6 col-md-auto"
              v-for="(item, itemIndex) in InsuranceCompanies.slice(
                 parseInt(currentSlide) * 6,
                 (parseInt(currentSlide) * 6) + 6
              )"
              :key="itemIndex"
            >
              <q-card class="cards bg-white shadow text-white">
                <q-card-section
                  class="row justify-center items-center card-section"
                >
                  <q-img :src="item.src" class="card-img" width="85px" height="85px"></q-img>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-btn
        flat
        round
        color="white"
        @click="nextSlide"
        :disable="currentSlide === (numSlides - 1).toString()"
         class="col-auto bg-dark q-px-sm"
      >
        <q-icon name="chevron_right" />
      </q-btn>
    </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import alborz from '@/assets/alborz.png';
  import dana from '@/assets/dana.png';
  import pasargad from '@/assets/pasargad.png';
  import parsian from '@/assets/parsian.png';
  import mihan from '@/assets/mihan.png';
  import kosar from '@/assets/kosar.png';
  import iran from '@/assets/iran.png';
  import taavon from '@/assets/taavon.png';
  import tejarat from '@/assets/tejarat.png';
  import asia from '@/assets/asia.png';
  import saman from '@/assets/saman.png';
  import moalem from '@/assets/moalem.png';
  import arman from '@/assets/arman.png';
  import dayinsurance from '@/assets/dayinsurance.png';
  import carafarin from '@/assets/carafarin.png';
  import novin from '@/assets/novin.png';
  import ourinsurance from '@/assets/ourinsurance.png';
  import razi from '@/assets/razi.png';
  import sina from '@/assets/sina.png';
  import asmari from '@/assets/asmari.png';

  export default defineComponent({
    name: 'InsuranceCompanies',
    data() {
      return {
        InsuranceCompanies: [
          { id: 1, src: alborz },
          { id: 2, src: dana },
          { id: 3, src: pasargad },
          { id: 4, src: parsian },
          { id: 5, src: mihan },
          { id: 6, src: kosar },
          { id: 7, src: iran },
          { id: 8, src: taavon },
          { id: 9, src: tejarat },
          { id: 10, src: asia },
          { id: 11, src: saman },
          { id: 12, src: moalem },
          {id : 13 , src:  dayinsurance} ,
           {id:14, src : carafarin},
           {id:15 ,src : novin},
            {id:16 , src : ourinsurance},
          {id:17 ,src: razi},
          {id:18 ,src: sina},
            {id:19,src:asmari}
        ],
        currentSlide: '0',
        autoplay: true,
        autoplayInterval: 3000,
        numSlides: 0,
      };
    },
    methods: {
    prevSlide() {
      this.currentSlide = (parseInt(this.currentSlide) - 1).toString();
    },
    nextSlide() {
      this.currentSlide = (parseInt(this.currentSlide) + 1).toString();
    },
  },
    mounted() {
      this.numSlides = Math.ceil(this.InsuranceCompanies.length / 6);
    },
    watch: {
      currentSlide(newSlide) {
        if (newSlide === this.numSlides.toString()) {
          this.currentSlide = '0'; // Reset the slide to the first one
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .company-section-title {
    font-size: 24px;
  }
  .cards {
    width: 124px;
    height: 100px;
    background: #ffff;
  }
  </style>