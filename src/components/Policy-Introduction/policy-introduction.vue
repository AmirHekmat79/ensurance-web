<template>
  <div class="q-pa-md">
    <div class="row justify-center items-center text-center q-gutter-md">
      <h2 class="introduction-title">معرفی بیمه‌نامه‌ها</h2>
      <q-img src="@/assets/introduction.svg" width="40px"></q-img>
    </div>
    <q-carousel
      v-model="currentSlide"
      transition-prev="slide-right"
      transition-next="slide-left"
      height="100%"
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
        <div class="row justify-center items-center q-mx-auto q-gutter-md">
          <div
            class="col-lg-3  col-md-4 col-sm-6 col-xs-8"
            v-for="(item, itemIndex) in PoliciesIntroduction?.slice(
               index * 3,
               Math.min((index + 1) * 3, PoliciesIntroduction.length)
            )"
            :key="itemIndex"
          >
            <q-card class="cards bg-white shadow text-white">
              <q-card-section dir="rtl" class="column justify-center items-center card-section">
                <q-img :src="item?.metaMediaFileUrl" class="card-img" />
                <div class="text-h6 title textColor  q-mb-md">{{ item?.title }}</div>
                <p class="textColor text-right overflow-hidden">{{ item?.summary }}</p>
              </q-card-section>
              <q-separator light />
              <q-card-actions class="row justify-between items-center">
                <q-btn flat>
                  <q-img src="@/assets/back.png" width="20px"></q-img>
                </q-btn>
                <span class="text-dark">شرایط بیمه‌نامه</span>
              </q-card-actions>
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
  name: 'PolicyIntroduction',

  data() {
    return {
      PoliciesIntroduction: [],
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
          this.PoliciesIntroduction = response.data.message?.summaryCards || [];
          this.numSlides = Math.ceil(this.PoliciesIntroduction.length / 3);
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
.title {
  font-size: 18px;
  margin-top: 60px;
}
.introduction-title {
  font-size: 32px;
}

.card-img {
  border-radius: 5px;
  max-width: 100%;;
  background-position: center;
  background-size: cover;
  
  height: 200px;
  border-style: none;
}

.textColor {
  color: #3b1717 !important;
}
.insurance-title {
  font-size: 12px;
  margin: 5px 0px 0px 0px;
  color: #000;
  padding: 0px 5px;
}
.cards {
  width: 100%;
  height:100%;
  margin: auto 30px !important;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.cards:hover {
  background: #eee;
}
</style>