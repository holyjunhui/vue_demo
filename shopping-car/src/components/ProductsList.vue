<template>
    <div>
        <ul v-for="product in products"
            v-bind:key = "product.id"
        >
            <li>{{product.title}} - {{product.price}}</li>
            <br>
            <button v-bind:disabled = "!product.inventory"  
            @click='addProductToCart(product)'>add to cart</button>
        </ul>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:"ProductsList",
    computed:mapState({
        products:state =>state.products.all
    }),
    methods:mapActions("cart",[
        "addProductToCart"
    ]),
    created(){
        console.log("sotre",this.$store)
        this.$store.dispatch('products/getAllProducts')
    }
    
}
</script>