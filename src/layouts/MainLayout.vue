<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <BarNavigation/>
      <ToolbarNavigation/>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import BarNavigation from '../components/Header/bar-navigation.vue'
import ToolbarNavigation from '../components/Header/toolbar-navigation.vue'
export default defineComponent({
  name: 'MainLayout',

  components: {
    BarNavigation ,
    ToolbarNavigation
  },

  
})
</script>
