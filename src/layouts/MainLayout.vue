<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <BarNavigation/>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import BarNavigation from '../components/Header/bar-navigation.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    BarNavigation
  },

  
})
</script>
