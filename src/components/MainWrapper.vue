<template>
   <div class="main-wrapper">
      <p>{{titel}}</p>
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
   </div>
</template>

<script>

import{mapGetters} from 'vuex'

export default {
   name: 'MainWrapper',
   props:{},
   data(){
      return {
         titel: 'Main wrapper Acqua-Craft'
      }
   },
   computed: {
      ...mapGetters([
         'CART'
      ])
   },
   methods: {},
   watch: {},
}
</script>

<style>
.main-wrapper {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 1024px;
   margin: 0 auto;
   font-size: 20px;
   color: rgb(48, 48, 48);
}

p {
   margin: 4px;
}
</style>