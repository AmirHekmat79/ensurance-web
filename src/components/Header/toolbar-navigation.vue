<template>
  <q-toolbar
    class="text-primary shadow-6 column justify-start items-center q-py-md"
  >
    <div class="row justify-between items-center">
      <q-btn
        @click="toggleSidebar"
        flat
        class="text-white hambergur-menu q-mx-lg"
        icon="menu"
      ></q-btn>
      <div class="login-btn-group">
        <q-btn class="register-btn"><a>ثبت نام</a></q-btn>
        <q-btn class="entrance-btn"><a> ورود</a></q-btn>
      </div>
      <q-space />
      <q-toolbar-title class="text-white title-container">
        <h6 class="title">کارگزاری راه سبز توسعه امید</h6>
      </q-toolbar-title>
    </div>
    <div dir="rtl" class="row justify-start items-center q-mr-auto">
      <ul
        v-if="!sidebarVisible"
        class="navLink-container row justify-start items-center"
      >
        <li class="navLink-item">
          <q-btn flat class="navLink-btn"><a href="#">خانه</a></q-btn>
        </li>
        <li class="navLink-item">
          <q-btn flat class="navLink-btn"
            ><a href="#">محصولات و خدمات</a></q-btn
          >
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
          <q-btn flat class="navLink-btn"><a href="#"> تماس با ما</a></q-btn>
        </li>
      </ul>
      <!-- <ul v-else class="sidebar-navLink-container">
        
        <div
          class="column justify-center items-center sidebar-login-btn-container"
        >
          <q-btn class="register-btn"><a>ثبت نام</a></q-btn>
          <q-btn class="entrance-btn"><a> ورود</a></q-btn>
        </div>
        <li class="sidebar-navLink-item">
          <q-btn flat class="navLink-btn"><a href="#">خانه</a></q-btn>
        </li>
        <li class="sidebar-navLink-item">
          <q-btn flat class="navLink-btn"
            ><a href="#">محصولات و خدمات</a></q-btn
          >
        </li>
        <li class="sidebar-navLink-item">
          <q-btn flat class="navLink-btn"><a href="#">مجله بیمه ای</a></q-btn>
        </li>
        <li class="sidebar-navLink-item">
          <q-btn flat class="navLink-btn"><a href="#">پیگیری</a></q-btn>
        </li>
        <li class="sidebar-navLink-item">
          <q-btn flat class="navLink-btn"><a href="#">درباره ما</a></q-btn>
        </li>
        <li class="sidebar-navLink-item">
          <q-btn flat class="navLink-btn"><a href="#">تماس با ما</a></q-btn>
        </li>
      </ul> -->

      <q-drawer
        v-else
        v-model="sidebarVisible"
        side="left"
        show-if-above
        class="q-py-md"
        :style="{ width: '200px' }"
      >
        <!-- Sidebar navigation links -->
        <q-separator class="q-my-xl" color="gray-blue-10" inset />
        <div
          class="column justify-center items-center sidebar-login-btn-container"
        >
          <q-btn align="between" class="register-btn btn-fixed-width q-pa-md"
            ><a>ثبت نام</a></q-btn
          >
          <q-btn align="between" class="entrance-btn btn-fixed-width q-pa-md"
            ><a>ورود</a></q-btn
          >
        </div>
        <q-list class="q-mt-md">
          <q-item v-for="item in sidebarItems" :key="item.label">
            <q-item-section class="item-section">
              <q-btn
                flat
                dense
                class="navLink-btn"
                :label="item.label"
                :to="item.to"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    </div>
  </q-toolbar>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ToolbarNavigation",
  setup() {
    const sidebarVisible = ref(false);
    const sidebarItems = [
      { label: "خانه", to: "/" },
      { label: "محصولات و خدمات", to: "/products" },
      { label: "مجله بیمه ای", to: "/magazine" },
      { label: "پیگیری", to: "/tracking" },
      { label: "درباره ما", to: "/about" },
      { label: "تماس با ما", to: "/contact" },
    ];
    function toggleSidebar() {
      sidebarVisible.value = !sidebarVisible.value;
    }

    return {
      sidebarVisible,
      toggleSidebar,
      sidebarItems,
    };
  },
});
</script>
<style scoped>
.title-container {
  padding: 0px 280px;
}
.title {
  font-size: 17px;
  margin-left: 20rem;
}

.entrance-btn {
  padding: 8px 50px !important;
  background: #3c9e75 !important;
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin-left: 20px !important;
  font-size: 14px;
  font-weight: 500;
}
.register-btn {
  padding: 8px 25px !important;
  background: #a8cf8c !important;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
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
.navLink-container {
  list-style-type: none;
}
.navLink-item {
  margin: 5px 10px;
}
.navLink-item a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
.navLink-btn {
  font-size: 14px;
}
.hambergur-menu {
  display: none;
}

.sidebar-navLink-container {
  display: none !important;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-between;
}

.sidebar-login-btn-container {
  text-align: center;
}
.sidebar-navLink-item {
  margin: 5px 10px;
}
.sidebar-login-btn-container .register-btn,
.entrance-btn {
  max-width: 100%; /* Make the buttons fill the full width */
  padding: 8px 35px !important;
  background: #3c9e75 !important;
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
}
.sidebar-navLink-item a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
.item-section {
  margin-left: 50px !important;
}
.sidebar-navLink-btn {
  font-size: 14px;
}

@media only screen and (max-width: 630px) {
  .navLink-container {
    display: none;
  }

  .login-btn-group {
    display: none;
  }

  .title-container {
    padding: 0px;
  }

  .title {
    font-size: 17px;
  }

  .hambergur-menu {
    display: block;
  }

  .sidebar-navLink-container {
    display: block;
  }
}
</style>
