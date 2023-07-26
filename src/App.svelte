<script lang="ts">
	import AddTodoForm from "./components/form.svelte";
  import TodoList from "./components/todoList.svelte";
  import TodoStats from "./components/todoStats.svelte";
</script>

<main class="container">
	<AddTodoForm />
	<TodoStats />
	<TodoList />
</main>

<style>
	.container {
		max-width: 400px;
		margin-left: 12px;
		margin-right: 12px;
}
</style>
