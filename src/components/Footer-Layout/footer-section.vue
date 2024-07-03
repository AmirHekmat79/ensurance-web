<template>
    <section dir="rtl" class="row justify-center items-center top-footer">
      <div class="col-md-4  col-sm-6 col-xs-12"> 
        <h2 class="title"> امکانات سایت </h2>
        <ul class="site-features">
          <li><a>   درباره ما </a></li>
          <li><a> خدمات ما  </a> </li>
          <li><a> تماس با ما </a></li>
          <li><a> پیشنهادات ، انتقادات و شکایات </a></li>
          <li> <a> پرسش های متداول</a> </li>
          <li><a> پیگیری بیمه</a> </li>
          <li><a>سامانه بازاریابیان</a> </li>
          <li><a>همکاری با نمایندگان بیمه </a></li>
          <li><a>همکاری با ما</a></li>
          <li><a>مقررات و قوانین</a></li>
        </ul>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12"> 
        <h2 class="title"> ارتباط با ما</h2>
        <ul class="contactus">
          <div>
            <li class="row q-gutter-sm items-center q-my-sm">
                <img src="@/assets/footeremail.png" width="20px" />
              aka.co.ir@gmail.com
            </li>
          
            <li class="row q-gutter-sm items-center  q-my-sm" >
              <q-icon name="phone" color="secondary" size="20px" ></q-icon>
              02191691049
            </li>
            
             <li class="row q-gutter-sm items-center q-my-sm"> 
                 <q-icon name="place" color="secondary" size="20px" ></q-icon>
               آدرس : تهران خ میرداماد ساختمان نقره
            </li>
          </div>
        </ul>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div id="footer-map" style="height: 200px; width: 180px;"></div>
      </div>
    </section>
    <section dir="rtl" class="row justify-center items-center sub-footer">
      <div class="col-md-4"> 
        <q-img src="@/assets/kargozar.png" class="sub-footer-img" ></q-img>
      </div>
      <div class="col-md-4">
        <q-img src="@/assets/enamad.png" class="sub-footer-img" ></q-img>
      </div>
      <div class="col-md-4">
        <q-img src="@/assets/samandehi.png" class="sub-footer-img" ></q-img>
      </div>
    </section>
    <q-footer  class="Footer text-center" elevated>
        {{ InsuranceFooterTitle?.footerContent }}
    </q-footer>
  </template>
  
  <script>
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import apiService from 'src/services/api-services';
  export default {
    name: 'FooterSection',
    data() {
      return {
        map: null ,
        InsuranceFooterTitle : null
      }
    },
    mounted() {
      this.initMap();
      this.getPolicyIntroduction();
    },
    methods: {
      initMap() {
        this.map = L.map('footer-map', {
          center: [51.5074, -0.1278],
          zoom: 13,
          scrollWheelZoom: false
        })
  
        L.tileLayer('@/assets/MainLocation.png', {
        }).addTo(this.map)
  
        L.marker([51.5074, -0.1278]).addTo(this.map)
      
      } ,
      getPolicyIntroduction() {
        apiService
          .getPolicyIntroduction('sabz')
          .then((response) => {
            this.InsuranceFooterTitle = response.data.message;
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
    }
  }
  </script>
  
  <style scoped>
  .title {
    font-size: 20px;
    font-weight: 500;
  }
  .Footer {
    padding: 11px;
    background: #3d6df2 !important;
    color: #fff !important;
    position: absolute;
    overflow: hidden;
  }
  .top-footer {
    padding-bottom:  130px;
    padding-right: 40px;
    background: #bfbebe;
  }
  .sub-footer{
    padding:40px 30px;
    margin: auto;
    text-align: center;
    background: #eee;
  }
  #footer-map {
    width: 100%;
    height: 100%;
  }
  .site-features , .contactus{
    font : 14px 'iransans';
  }
  .site-features li{
    margin: 12px auto;
  }

  .sub-footer-img{
    width: 150px;
  }
  @media screen and (max-width: 500px) {
    .sub-footer-img{
    width: 80px;
  }
  }
  </style>

