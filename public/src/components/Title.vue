<template>
  <div class="title">
    <h1 id="todo">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#todo {
  font-size: 115px;
  padding-bottom: 50px;
}
</style>
