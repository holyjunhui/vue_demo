<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo = "todo" v-on:del-todo="del"></TodoItem>
        </div>
        
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name:"Todo",
    props:['todos'],
    components:{
        TodoItem
    },
    methods:{
        del(id){
            // eslint-disable-next-line no-console
            console.log("paranid ",id);
            // eslint-disable-next-line no-console
            console.log("todos ",this.todo);
            this.$emit("del-todo",id)
        }
    }
}
</script>