<template>
    <header class="header">
        <h1>this is a todoList</h1>
        <nav id = 'nav'>
            <router-link to='/'>Home</router-link>|
            <router-link to='/about'>About</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style>

    .header {
        background: black;
        text-align: center;
        color: #fff
    }    
    .header a {
        color:#fff;
        text-decoration: none;
    }
</style>