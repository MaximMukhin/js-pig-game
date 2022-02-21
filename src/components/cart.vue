<template>
   <div class="cart">
      <router-link :to="{name: 'catalog'}">
         <div class="catalog__link-to-cart">Вернуться в каталог</div>
      </router-link>
      <p v-if="!cartData.length">Корзина пуста</p>
      <cart-item 
         v-for="(item, index) in cartData"
         :key="item.article"
         :cartItemData="item"
         @deleteFromCartItem="deleteFromCartItem(index)"
      />
      <button class="cart__btn">Корзина</button>
   </div>
</template>
<script>
import cartItem from './cart-item'
import{mapActions} from 'vuex'

export default {
   name: 'cart',
   components: {
      cartItem
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
   computed: {},
   methods:{
      ...mapActions([
         'DELETE_FROM_CART',
      ]),
      deleteFromCartItem(index){
         this.DELETE_FROM_CART(index)
      }
   },
}
</script>
<style>
.cart__btn {
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
.cart__btn:hover {
  color: rgb(24,24,24);
  border: 1px solid rgb(198,198,198);
  background: #f7f7f7 linear-gradient(#f7f7f7, #f1f1f1);
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
}
.cart__btn:active {
  color: rgb(51,51,51);
  border: 1px solid rgb(204,204,204);
  background: rgb(238,238,238) linear-gradient(rgb(238,238,238), rgb(224,224,224));
  box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
}
</style>