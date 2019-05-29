<template>
    <div>
        <h3>Your Cart</h3>
        <p v-show="products.length == 0">please add some products to cart</p>
        <ul v-for="product in products"
            :key = "product.id"
        >
            <li>{{product.title}}::{{product.price}}</li>
        </ul>
        <p>totalPrice {{totalPrice}}</p>
        <button :disabled="!products.length" @click="checkout(products)">checkout</button>
        <p v-show="checkoutStatus">checkout sucessful</p>
    </div>
</template>
<script>
import {mapGetters,mapState} from 'vuex'
export default {
    name:"Cart",
    computed:{
        ...mapState({
            checkoutStatus:state=>state.cart.checkoutStatus
        }),
        ...mapGetters("cart",{
            products:"cartProducts",
            totalPrice:"cartTotalPrice"
        })
    },
    methods:{
        checkout(products){
            this.$store.dispatch("cart/checkout",products)
        }
    }
}
</script>