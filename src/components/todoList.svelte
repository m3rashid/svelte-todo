<script lang="ts">
  import TodoItem from './todoItem.svelte';
  import {initialTodoList} from '../todoStore'
  import { fade, scale } from 'svelte/transition'
</script>

<div class="todo-list-container">

	{#each $initialTodoList as fb (fb.id)}
	<div in:scale out:fade="{{ duration: 500 }}">
  <TodoItem item={fb} />
</div>
{/each}

</div>

<style>
	.todo-list-container {
		width: 100%;
		max-width: 400px;
	}
</style>
