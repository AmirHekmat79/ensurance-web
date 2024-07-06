<template>
    <div class="q-gutter-md text-center row justify-center q-mx-auto items-center">
  <q-btn v-if="!isSubMenu" flat   :class="[isFirst ? 'Light' : 'Dark']"  :label="menu.title" :to="menu.url?.url"> </q-btn>
<div v-else>
    <q-btn v-if="isFirst"  flat :class="[isFirst ? 'Light' : 'Dark']" :label="menu.title" :to="menu.url?.url">
     <q-item-section side>
       <q-icon :color="isFirst ? 'black' : bgWhite"  name="keyboard_arrow_down"  />
     </q-item-section>
        <q-menu dir="rtl"  anchor="bottom left" self="top left">
          <q-list>
            <q-item v-for="subMenu in menus" flat clickable  :key="subMenu.id" class="linkItems text-dark">
              <submenu   :isSubMenu="computeIsSubMenu(subMenu.id)" :menus=computeMenus(subMenu.id) :menu="computeMenu(subMenu.id)" :allMenu = "allMenu" />
              <q-separator light />
            </q-item>
            <q-separator dark />

          </q-list>
        </q-menu>
</q-btn>
  <q-btn v-else  flat class="text-dark" :label="menu.title">
     <q-item-section side>
       <q-icon :color="isFirst ? Dark : Light"  name="keyboard_arrow_left" />
     </q-item-section>
        <q-menu dir="rtl" anchor="top start" self="top end">
          <q-list>
            <q-item flat v-for="subMenu in menus" dense clickable  :key="subMenu.id" class="linkItems text-dark">
              <submenu   :isSubMenu="computeIsSubMenu(subMenu.id)" :menus=computeMenus(subMenu.id) :menu="computeMenu(subMenu.id)" :allMenu = "allMenu" />
              <q-separator light />
            </q-item>
          </q-list>
        </q-menu>
</q-btn>
</div>
</div>
 </template>
  
  
  <script>
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "ToolbarNavigation",
    data(){
      return {
        bgWhite : 'white',
      }
    },
    props:{
        isSubMenu : Boolean,
        menus : [Object],
        menu : Object,
        allMenu : [Object],
        isFirst : Boolean,
    },
    methods:{
        computeMenus(id){
            let newMenus= this.allMenu.filter((item) => item.parentId == id)
            return newMenus;
        },
        computeMenu(id){
            let newMenu = this.allMenu.filter((item) => item.id == id)[0];
            return newMenu;
        },
        computeIsSubMenu(id){
            let newIsSubMenu= this.allMenu.some((item) => item.parentId == id)
            return newIsSubMenu;
        },
        
    }
    
  });
  </script>
  <style scoped>
  .linkItems{
    border: none !important;
   /* background-color: transparent !important; */
    max-width: 100%;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* margin-right: auto !important; */
  }
  .Light{
    color : white !important;
  }
  .Dark {
    color: black !important;
  }
  @media only screen and (max-width: 990px) {
    .Light , .Dark{
    color : black !important;
  }
  
}

  </style>
  