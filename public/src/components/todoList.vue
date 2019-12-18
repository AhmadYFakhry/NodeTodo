<template>
  <div>
    <p>
      Completed Tasks:
      {{
        todos.filter(todo => {
          return todo.isDone === true;
        }).length
      }}
    </p>
    <p>
      Pending Tasks:
      {{
        todos.filter(todo => {
          return todo.isDone === false;
        }).length
      }}
    </p>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["todos"]
};
</script>
