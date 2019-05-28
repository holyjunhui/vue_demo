<template>
  <div id="todo-list-example">
    <form v-on:submit.prevent = "addNewTodo">
      <lable for="new-todo">
        add a todo
      </lable>
      <input v-model = "newTodoText" id = "new-todo" placeholder = "e.g feed the cat">
      <button>add</button>
    </form>
    <ul>
      <li is = "todo-item"
        v-for="(todo,index) in todos"
        v-bind:key = "todo.id"
        v-bind:title = "todo.title"
        v-on:remove = "todos.splice(index,1)"

      >

      </li>
    </ul>
  </div>
</template>

<script>
// import func from "../../vue-temp/vue-editor-bridge";
import Vue from 'vue'
Vue.component('todo-item',{
  template:`
  <li>
    {{title}}
    <button v-on:click="$emit('remove')">Remove</button>
  </li>`,
  props:['title']
})
new Vue({
  el:'#todo-list-example',
  data:{
    newTodoText:'',
    todos:[
      {
        id:1,
        title:'take out the trash'
      },
      {
        id:2,
        title:'mow the lawn'
      }
    ],
    nextTodoId:3
  },
  methods:{
    addNewTodo:function(){
      this.todos.push({
        id:this.nextTodoId++,
        title:this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
