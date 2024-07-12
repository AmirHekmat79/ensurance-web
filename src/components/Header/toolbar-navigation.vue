<template>
  <q-toolbar
    class="text-primary shadow-6 column justify-start items-center q-py-md"
  >
    <div
      class="row justify-between items-center"
      style="padding-top: 10px !important"
    >
      <q-btn
        @click="toggleSidebar"
        flat
        class="text-white hambergur-menu"
        icon="menu"
      ></q-btn>
      <div class="login-btn-group justify-between items-center">
        <q-btn class="register-btn"><a>ثبت نام</a></q-btn>
        <q-btn class="entrance-btn"><a>ورود</a></q-btn>
      </div>
      <q-toolbar-title class="text-white title-container q-ml-auto">
        <h6 class="title">{{ InsuranceHeaderInfo?.centreName }}</h6>
      </q-toolbar-title>
    </div>
    <div class="row justify-start items-center q-ml-auto">
      <q-list
        v-if="!sidebarVisible"
        class="navLink-container row justify-start items-center"
      >
        <q-item
          v-for="(item, index) in sortedMenuItems"
          :key="index"
          class="navLink-item"
        >
          <submenu
            class="navLink-btn"
            :isSubMenu="hasChildItems(item.id)"
            :menus="getChildItems(item.id)"
            :menu="item"
            :allMenu="InsuranceNavbarMenuItems"
            isFirst
          />
        </q-item>
      </q-list>
      <q-drawer
        v-else
        v-model="sidebarVisible"
        side="left"
        show-if-above
        class="q-py-md"
        :style="{ width: '200px' }"
      >
        <q-separator class="q-my-xl" color="gray-blue-10" inset />
        <div
          class="column justify-center items-center sidebar-login-btn-container"
        >
          <q-btn class="register-btn btn-fixed-width"><a>ثبت نام</a></q-btn>
          <q-btn class="entrance-btn btn-fixed-width"><a>ورود</a></q-btn>
        </div>
        <q-list class="q-mt-md">
          <q-item
            v-for="(item, index) in sortedMenuItems.reverse()"
            :key="index"
            class="navLink-item"
          >
            <submenu
              class="navLink-btn"
              :isSubMenu="hasChildItems(item.id)"
              :menus="getChildItems(item.id)"
              :menu="item"
              :allMenu="InsuranceNavbarMenuItems"
              isFirst
            />
          </q-item>
        </q-list>
      </q-drawer>
    </div>
  </q-toolbar>
</template>

<script>
import { defineComponent, ref } from "vue";
import apiService from "src/services/api-services";
import submenu from "src/components/Header/submenu.vue";
export default defineComponent({
  name: "ToolbarNavigation",
  components: {
    submenu,
  },
  data() {
    return {
      InsuranceHeaderInfo: null,
      InsuranceNavbarMenuItems: [],
    };
  },

  mounted() {
    this.getPolicyIntroduction();
    this.getMenuesItem();
  },

  methods: {
    getPolicyIntroduction() {
      apiService
        .getPolicyIntroduction("sabz")
        .then((response) => {
          this.InsuranceHeaderInfo =
            response.data.message?.insuranceCentrePortal;
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
    getMenuesItem() {
      apiService
        .getMenuesItem("sabz")
        .then((response) => {
          this.InsuranceNavbarMenuItems = response.data.message;
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
    hasChildItems(itemId) {
      return (
        this.InsuranceNavbarMenuItems.filter((item) => item.parentId == itemId)
          .length > 0
      );
    },
    getChildItems(itemId) {
      return this.InsuranceNavbarMenuItems.filter(
        (item) => item.parentId == itemId
      );
    },
  },
  computed: {
    sortedMenuItems() {
      return this.InsuranceNavbarMenuItems.filter(
        (item) => item.parentId == null
      ).sort((a, b) => b.order - a.order);
    },
  },
  setup() {
    const sidebarVisible = ref(false);
    function toggleSidebar() {
      sidebarVisible.value = !sidebarVisible.value;
    }

    return {
      sidebarVisible,
      toggleSidebar,
    };
  },
});
</script>
<style scoped>
.title-container {
  margin-left: 440px !important;
  text-align: right !important;
}
.title {
  font-size: 17px;
  white-space: nowrap;
  width: 100%;
  margin-left: auto;
  font-weight: 500;
}
* {
  padding: 0 !important;
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

.sidebar-navLink-btn {
  font-size: 14px;
}

@media only screen and (max-width: 990px) {
  .navLink-container {
    display: none;
  }
  .title-container {
    margin-left: 300px !important;
    text-align: right !important;
  }
  .login-btn-group {
    display: none;
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
  .register-btn,
  .entrance-btn {
    min-width: 230px;
    width: 60%;
    text-align: center;
    margin: 6px auto !important;
  }
}
@media only screen and (max-width: 727px) {
  .hambergur-menu {
    display: block;
    /* margin-left: 65px; */
  }
  .title-container {
    margin-left: 200px !important;
  }
}
</style>
