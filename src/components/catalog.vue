<template>
   <div class="catalog">
      <router-link :to="{name: 'cart', params: {cartData: CART}}">
         <div class="catalog__link-to-cart">Корзина: {{CART.length}}</div>
      </router-link>

      <h1>Каталог</h1>
      <div class="catalog__list">
      <catalog-item
         v-for="product in PRODUCTS"
         :key="product.article"
         :productData="product"
         @addToCart="addToCart"
         @articleChild="showArticleChild"
       />
      </div>

   </div>
</template>
<script>
import catalogItem from './catalog-item'
import{mapActions, mapGetters} from 'vuex'

export default {
   name: 'catalog',
   components: {
      catalogItem,
   },
   props: {},
   data() {
      return {

      }
   },
   computed: {
      ...mapGetters([
         'PRODUCTS',
         'CART',
      ]),
   },
   methods:{
      ...mapActions([
         'GET_PRODUCTS_FROM_API',
         'ADD_TO_CART',
      ]),
      addToCart(data) {
         this.ADD_TO_CART(data)
      },
      showArticleChild(data) {
         console.log('Добавлена в корзину',data)
      }
   },
   mounted() {
      this.GET_PRODUCTS_FROM_API()
   }
}
</script>

<style>
.catalog {
   font-size: 20px;
   font-weight: 600;
}

h1 {
   margin: 10px;
}
.catalog__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
}
.catalog__link-to-cart {
   position: absolute;
   top: 20px;
   right: 20px;
   padding: 14px;
   border: solid #aeaeae;
   border-radius: 10px;
}
</style>