<template>
   <div class="cart">
      <router-link :to="{name: 'Catalog'}">
         <div class="catalog__link-to-cart">Вернуться в каталог</div>
      </router-link>
      <p v-if="!cartData.length">Корзина пуста</p>
      <cart-item 
         v-for="(item, index) in cartData"
         :key="item.article"
         :cartItemData="item"
         @deleteFromCartItem="deleteFromCartItem(index)"
         @increment="increment(index)"
         @decrement="decrement(index)"
      />

      <div class="cart-total">
         <p class="cart-total__name">Сумма:</p>
         <p class="cart-total__sum">{{cartTotalCost}} руб</p>
      </div>
   </div>
</template>
<script>
import CartItem from './CartItem'
import{mapActions} from 'vuex'

export default {
   name: 'Cart',
   components: {
      CartItem
   },
   props: {
      cartData: {
         tipe: Array,
         default() {
            return []
         }
      }
   },
   data() {
      return {

      }
   },
   computed: {
      cartTotalCost() {
         let result = []

         if (this.cartData.length) {
            for (let item of this.cartData) {
            result.push(item.price * item.quantity)
         }
         result = result.reduce(function(sum, el) {
            return sum + el;
         })
         return result
         } else {
            return 0;
         }

      }
   },
   methods:{
      ...mapActions([
         'DELETE_FROM_CART',
         'DECREMENT_CART_ITEM',
         'INCREMENT_CART_ITEM',
      ]),
      deleteFromCartItem(index){
         this.DELETE_FROM_CART(index)
      },
      decrement(index) {
         this.DECREMENT_CART_ITEM(index)
      },
      increment(index) {
         this.INCREMENT_CART_ITEM(index)
      },
   },
}
</script>
<style>
.cart-total {
position: fixed;
bottom: 0;
right: 0;
left: 0;
padding: 10px;
display: flex;
justify-content: center;
background: rgb(105, 173, 105);
color: #ffffff;
}


</style>