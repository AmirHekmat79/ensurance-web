<template>
  <q-toolbar
    class="text-primary shadow-6 column justify-between items-center q-py-md"
  >
    <div class="row justify-between items-center">
      <q-btn
        @click="toggleSidebar"
        flat
        class="text-white hambergur-menu"
        icon="menu"
      ></q-btn>
      <div class="login-btn-group justify-between items-center">
        <q-btn class="register-btn"><a>ثبت نام</a></q-btn>
        <q-btn class="entrance-btn"><a> ورود</a></q-btn>
      </div>
      <!-- <q-space /> -->
      <q-toolbar-title dir="rtl" class="text-white title-container">
        <h6 class="title">کارگزاری راه سبز توسعه امید</h6>
      </q-toolbar-title>
    </div>
    <div class="row justify-start items-center q-ml-auto">
      <ul
        v-if="!sidebarVisible"
        class="navLink-container row justify-start items-center"
      >
        <li class="navLink-item">
          <q-btn flat class="navLink-btn"><a href="/">خانه</a></q-btn>
        </li>
        <li class="navLink-item">
          <q-btn flat class="navLink-btn"
            ><a href="#">محصولات و خدمات</a></q-btn
          >
        </li>
        <li class="navLink-item">
          <q-btn flat class="navLink-btn"><a href="https://sabz.easybimeh.com/blog">مجله بیمه ای</a></q-btn>
        </li>
        <li class="navLink-item">
          <q-btn flat class="navLink-btn"><a href="#">پیگیری</a></q-btn>
        </li>

        <li class="navLink-item">
          <q-btn flat class="navLink-btn"><a href="https://sabz.easybimeh.com/about">درباره ما</a></q-btn>
        </li>
        <li class="navLink-item">
          <q-btn flat class="navLink-btn"><a href="https://sabz.easybimeh.com/contactUs"> تماس با ما</a></q-btn>
        </li>
      </ul>

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
          <q-btn  class="register-btn btn-fixed-width"
            ><a>ثبت نام</a></q-btn
          >
          <q-btn  class="entrance-btn btn-fixed-width"
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
      { label: "محصولات و خدمات"},
      { label: "مجله بیمه ای"},
      { label: "پیگیری" },
      { label: "درباره ما"},
      { label: "تماس با ما" },
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
  white-space:nowrap; 
  width:100%;
  margin-left: auto;
  font-weight: 500;
  
}

.entrance-btn {
  /* padding: 8px 50px !important; */
  background: #3c9e75 !important;
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin-left: 20px !important;
  font-size: 14px;
  font-weight: 500;
  width: 130px;
}
.register-btn {
  width: 100px;
  margin-right: 10px;
  background: #a8cf8c !important;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

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
.sidebar-login-btn-container .entrance-btn {
  max-width: 100%; /* Make the buttons fill the full width */
  padding: 8px 30px !important;
  background: #3c9e75 !important;
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
}
.sidebar-login-btn-container .register-btn {
  /* Make the buttons fill the full width */
  padding: 8px 50px !important;
  background: #3c9e75 !important;
  color: #fff;
  white-space: nowrap;
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

@media only screen and (max-width: 870px) {
  .navLink-container {
    display: none;
  }

  .login-btn-group {
    display: none;
  }

  .title-container {
    margin-left: auto !important;
  }

  .title {
    font-size: 17px;
  }

  .hambergur-menu {
    display: block;
    margin-left: 10px;
  }

  .sidebar-navLink-container {
    display: block;
  }
  .register-btn , .entrance-btn {
    min-width:230px;
    width: 60%;
    text-align: center;
    margin: 6px auto !important;
  }
}
@media only screen and (max-width: 727px) {

  .hambergur-menu {
    display: block;
    margin-left: 165px;
  }

}
</style>
