<template>
   <div class="catalog-item">
      <img class="catalog-item__image" :src=" require('../../assets/images/' + productData.image)" alt="img">
      <p class="catalog-item__name">{{productData.name}}</p>
      <p class="catalog-item__color">{{productData.color}}</p>
      <p class="catalog-item__price">Цена: {{productData.price}} руб.</p>
      <button class="catalog-item__add-to-card-btn btn" 
      @click="addToCart(), articleChild()">Купить
      </button>
   </div>
</template>

<script>
export default {
   name: 'catalog-item',
   components: {},
   props: {
      productData: {
         type: Object,
         default(){
            return {}
         }
      }
   },
   data() {
      return {

      }
   },
   computed: {},
   methods:{
      addToCart() {
         this.$emit('addToCart', this.productData)
      },
      articleChild() {
         this.$emit('articleChild', this.productData.article)
      }
   },
      mounted() {
      this.$set(this.productData, 'quantity', 1)
   },
}
</script>

<style>
.catalog-item {
   flex-basis: 25%;
   box-shadow: 0 0 8px 0 #a1a1a1;
   border-radius: 5px;
   padding: 8px;
   margin-bottom: 8px;
}
.catalog-item__image {
   max-width: 250px;
}
.catalog-item__add-to-card-btn {
  display: inline-block;
  font-family: arial,sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: rgb(68,68,68);
  text-decoration: none;
  user-select: none;
  padding: .2em 1.2em;
  outline: none;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 2px;
  background: rgb(245,245,245) linear-gradient(#f4f4f4, #f1f1f1);
  transition: all .218s ease 0s;
}
.catalog-item__add-to-card-btn:hover {
  color: rgb(24,24,24);
  border: 1px solid rgb(198,198,198);
  background: #f7f7f7 linear-gradient(#f7f7f7, #f1f1f1);
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
}
.catalog-item__add-to-card-btn:active {
  color: rgb(51,51,51);
  border: 1px solid rgb(204,204,204);
  background: rgb(238,238,238) linear-gradient(rgb(238,238,238), rgb(224,224,224));
  box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
}
</style>