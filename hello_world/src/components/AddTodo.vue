<template>
    <div>
        <form @submit="addTodo">

        <input type="text" v-model="title">
        <button type="submit">add to</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'AddTodo',
    data(){
        return {
            title:''
        }
    },
    methods:{
        addTodo:function(){
            var newTodo = {
                title:this.title,
                completed:false
            }
            this.$emit('add-todo',newTodo)
            this.title = ''
        }
    }

}
</script>