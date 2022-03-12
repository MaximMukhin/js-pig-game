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
      name: "Select",
      props: {
         options: {
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
    text-align: left;
    bottom: 10px;
}

.select p {
   margin: 0;
}

.select__title {
    border: solid 1px #aeaeae;
    padding: 8px;
}

.select__option {
    border: solid 1px #aeaeae;
    background: #ffffff;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    padding: 8px;
}

.select__option p:hover {
   background: #e7e7e7;
}
</style>
