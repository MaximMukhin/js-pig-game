<template>
   <div class="catalog">
      <router-link :to="{name: 'Cart', params: {cartData: CART}}">
         <div class="catalog__link-to-cart">Корзина: {{CART.length}}</div>
      </router-link>

   <div class="catalog__select">
      <h2>Каталог</h2>
      <Select
      :selected="selected"
      :options="colors"
      @select="sortByColors"
      />
   </div>

      <div class="catalog__list">
      <catalog-item
         v-for="product in filteredProduct"
         :key="product.article"
         :productData="product"
         @addToCart="addToCart"
         @articleChild="showArticleChild"
      />
      </div>

   </div>
</template>
<script>
import CatalogItem from './CatalogItem'
import {mapActions, mapGetters} from 'vuex'
import Select from '../Select'

export default {
   name: 'Catalog',
   components: {
      CatalogItem,
      Select,
   },
   props: {},
   data() {
      return {
         colors: [
            {name: 'Все', value: 'colorAll'},
            {name: 'Белый глянец', value: 'colorWhide'},
            {name: 'Красный глянец', value: 'colorRed'},
         ],
         selected: 'Все',
         sortedProducts: [],
      }
   },
   computed: {
      ...mapGetters([
         'PRODUCTS',
         'CART',
      ]),

      filteredProduct() {
         if (this.sortedProducts.length) {
            return this.sortedProducts
         } else {
            return this.PRODUCTS
         }
      },
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
      },

      sortByColors(color) {
         this.sortedProducts = []
         let vm = this
         this.PRODUCTS.map(function (item) {
            if (item.color === color.name) {
               vm.sortedProducts.push(item)
            }
         }),
         this.selected = color.name
      }
   },
   mounted() {
      this.GET_PRODUCTS_FROM_API()
   }
}
</script>

<style>
.catalog {
   font-size: 12px;
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
   margin: 0 10px;
}
.catalog__link-to-cart {
   font-size: 12px;
   font-weight: 600;
   position: absolute;
   top: 20px;
   right: 20px;
   padding: 14px;
   border: solid #aeaeae;
   border-radius: 10px;
}
</style>