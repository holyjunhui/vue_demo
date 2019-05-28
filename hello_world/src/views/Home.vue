<template>
    <div>
        <AddTodo v-on:add-todo="addTodo"></AddTodo>
        <Todo v-on:del-todo = 'delTodo'  v-bind:todos = "todos"></Todo>
    </div>
</template>
<script>
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'
import axios from 'axios'
export default {
    name:'Home',
    components:{
        AddTodo,
        Todo
    },
    data(){
        return{
            todos:[]
        }
    },
    methods:{
        addTodo(newTodo) {
            // eslint-disable-next-line no-console
            console.log("obje",newTodo)
            var { title, completed } = newTodo;
             axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed
            }).then(res => this.todos = [...this.todos,res.data])
            .catch(err=> console.log(err))
            
        },
        delTodo(id){
            // eslint-disable-next-line no-console
            console.log("ididid",id)
                  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => this.todos = this.todos.filter(todo => todo.id !== id))
        // .catch(err => console.log(err));
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => {
            // eslint-disable-next-line no-console
            console.log("res.data",res.data)
            this.todos = res.data
            })
    }
}
</script>