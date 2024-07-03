<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <BarNavigation/>
      <ToolbarNavigation/>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterSection/>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import BarNavigation from '../components/Header/bar-navigation.vue';
import ToolbarNavigation from '../components/Header/toolbar-navigation.vue';
import FooterSection from '../components/Footer-Layout/footer-section.vue';
export default defineComponent({
  name: 'MainLayout',

  components: {
    BarNavigation ,
    ToolbarNavigation,
    FooterSection
  },

  
})
</script>
