<template>
  <div class="flex flex-center">
    <div class="insurance-info-container bg-primary">
                <div class="row justify-center items-center text-center q-my-md">
                  <div class="col-md-6 q-pa-md ">
                    <h5 class="text-white text-center">
                      {{ insuranceCentreInfo?.title }}
                    </h5>
                    <h6 class="text-white text-center">
                      {{ insuranceCentreInfo?.subTitle }}
                    </h6>
                  </div>
                  <div class="col-md-6 q-pa-md">
                    <div class="image-container">
                      <img src="https://media.easybimeh.com//Easybimeh/FileManager/InsuranceCentre/sabz/637447452444242558.jpg" alt="Insurance Image">
                      <div class="banner-details">
                        <q-btn flat>
                          <q-img src="@/assets/back.png" width="20px"></q-img>
                        </q-btn> 
                        <span class="text-white">رشد مقرری بگیران بیمه بیکاری با کرونا</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div class="column">
                <InsuranceTypes/>
                <InsurancePlans/>
                <InsuranceSuggestedPlans/>
                <InsurancePatternBanner/>
                <PolicyIntroduction/>
                <InsuranceNews/>
                <InsuranceRevivalForm/>
               </div>
            </div>
</template>
     
<script>
     import { defineComponent } from 'vue';
     import apiService from '@/services/api-services.js';
     import InsurancePlans from 'src/components/Insurance-Plans/insurance-plans.vue';
     import InsuranceTypes from 'src/components/Insurance-Types/insurance-types.vue';
     import InsuranceSuggestedPlans from 'src/components/Suggestion-Plans/insurance-suggested-plans.vue';
     import InsurancePatternBanner from 'src/components/Insurance-Pattern/insurance-pattern-banner.vue';
     import PolicyIntroduction from 'src/components/Policy-Introduction/policy-introduction.vue';
     import InsuranceNews from 'src/components/Insurance-News/insurance-news.vue';
     import InsuranceRevivalForm from 'src/components/Insurance-Revival/insurance-revival-form.vue';
     export default defineComponent({
       name: 'InsuranceCentre',
       components:{
        InsurancePlans ,
        InsuranceTypes ,
        InsuranceSuggestedPlans ,
        InsurancePatternBanner ,
        PolicyIntroduction,
        InsuranceNews,
        InsuranceRevivalForm
       },
       data(){
        return {
            insuranceCentreInfo: null,
        }
       } ,
       mounted() {
        this.getInfo();
       },
       methods: {
            getInfo() {
            console.log('sda');
            apiService.getInsuranceCentreInfo('sabz')
            .then(response => {
                this.insuranceCentreInfo = response.data.message;
                console.log(this.insuranceCentreInfo);
            })
            .catch(error => {
            console.error('Error fetching insurance centre info:', error);
            });
        }
        }
     })
</script>
<style scoped>
  .insurance-info-container{
    /* height: 100vh; */
    width: 100%;
    height: 600px;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
  }
    .image-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    display: block;
  }

  .banner-details{
   position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0px 0px 15px 15px;
    height: 50px;
    background: linear-gradient(110.72deg, rgba(59, 139, 255, 0.4) 0%, rgba(56, 132, 242, 0.6) 7.1%, rgba(53, 125, 230, 0.867) 30.76%, rgba(50, 118, 217, 0.933) 72.17%, rgb(47, 111, 204) 60%);
  }
  .banner-details .q-btn {
  margin-right: 10px;
}

.banner-details .text-white {
  font-size: 14px;
}

@media (max-width: 600px) {
  .banner-details .text-white {
    font-size: 12px;
  }
}
</style>
     
     