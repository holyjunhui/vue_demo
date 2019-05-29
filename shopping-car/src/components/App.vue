<template>
    <div id = "app">
        <h1>Shopping Cart Example</h1>
        <br>
        <h3>products</h3>
        <ProductsList></ProductsList>
        <br>
        <Cart></Cart>
    </div>
</template>

<script>
import Cart from './Cart'
import ProductsList from './ProductsList'
export default {
    components:{
        Cart,
        ProductsList
    }
}
</script>
