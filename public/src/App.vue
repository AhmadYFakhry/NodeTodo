<template>
  <div id="title">
    <Title msg="todo"></Title>
    <todo-list id="list" v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import todoList from "./components/todoList";
import Title from "./components/Title";
export default {
  components: {
    todoList,
    Title
  },
  data() {
    return {
      task: [
        {
          todo: "Todo A",
          isDone: false,
          hasAttachement: false
        },
        {
          todo: "Todo B",
          isDone: false,
          hasAttachement: false
        },
        {
          todo: "Todo C",
          isDone: false,
          hasAttachement: false
        }
      ]
    };
  }
};
</script>

<style>
#title {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #06467a;
  margin-top: 10px;
}
#list {
  font-size: 30px;
  padding-right: 300px;
}
</style>
