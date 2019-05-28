<template>
    <div  class="todo-item" v-bind:class="{'is-completed':todo.completed}">
        <p>
            <input type="checkbox" v-on:change = "makeChange">
            {{todo.title}}
            <button @click="$emit('del-todo',todo.id)">delete</button>
        </p>
    </div>
</template>
<script>
export default {
    name:"TodoItem",
    props:{
        todo:{
            type:Object,
            default:function(){
                return {title:"faffasdf",completed:false}
            }
        }
    },
    methods:{
        makeChange:function(){
            // eslint-disable-next-line no-console
            console.log("change",this.todo)
            this.todo.completed = ! this.todo.completed
        },
        // del(e){
        //     // eslint-disable-next-line no-console
        //     console.log("object",todo)
        //     this.$emit('del-todo',todo.id)
        // }
    }

}
</script>
<style scoped>
    .todo-item {
        color:black;

    }
    .is-completed {
        text-decoration: line-through
    }
</style>