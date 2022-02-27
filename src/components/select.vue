<template>
   <div class="select">
      <p 
      class="select__title"
      @click="areOptionVisible = !areOptionVisible"
      >{{selected}}</p>
      <div 
      class="select__option"
      v-if="areOptionVisible"
      >
         <p
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
         >
            {{option.name}}
         </p>
      </div>
   </div>
</template>

<script>
   export default {
      name: "select",
      props: {
         option: {
            type: Array,
            default() {
               return [];
            },
         },
         selected: {
            type: String,
            default: '',
         },
      },
      data() {
         return {
            areOptionVisible: false,
         }
      },
      computed: {},
      methods: {
         selectOption(option) {
            this.$emit('select', option)
            this.areOptionVisible = false;
         },

         hideSelect() {
            this.areOptionVisible = false;
         },

      },

      mounted() {
         document.addEventListener('click', this.hideSelect.bind(this), true)
      },

      beforeDestroy() {
         document.removeEventListener('click',this.hideSelect)
      },

   };
</script>

<style>
.select {
   position: relative;
   width: 200px;
   cursor: pointer;
}

.select p {
   margin: 0;
}

.select__title {
   border: solid 1px #aeaeae;
}

.select__option {
   border: solid 1px #aeaeae;
   position: absolute;
   top: 30px;
   right: 0;
   width: 100%;
}

.select__option p:hover {
   background: #e7e7e7;
}
</style>
