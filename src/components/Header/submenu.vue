<template>
    <div class="q-gutter-md text-center row justify-center q-mx-auto items-center">
  <q-btn v-if="!isSubMenu" flat  :class="[isFirst ? 'text-white' : 'text-dark']"  :label="menu.title" :to="menu.url"> </q-btn>
<div v-else>
    <q-btn v-if="isFirst"  flat class="text-white" :label="menu.title">
     <q-item-section side>
       <q-icon color="white"  name="keyboard_arrow_down"  />
     </q-item-section>
        <q-menu dir="rtl" class="bg-gray-blue-8" anchor="bottom left" self="top left">
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
       <q-icon color="black"  name="keyboard_arrow_left" />
     </q-item-section>
        <q-menu dir="rtl" anchor="top start" self="top end" class="bg-gray-blue-8">
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
    mounted(){
        console.log(36,"sinna",this.isSubMenu,this.menu)    
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
   background-color: transparent !important;
    max-width: 100%;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* margin-right: auto !important; */
  }
 .separator{
    width: 60px;
    height: 40px;
 }
  </style>
  