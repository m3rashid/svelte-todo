<script lang="ts">
  import {initialTodoList} from '../todoStore'

  $: count = $initialTodoList.length
	$: completed = $initialTodoList.filter((item) => item.done).length
	$: pending = $initialTodoList.filter((item) => !item.done).length
</script>

<div class="todo-stats">
  <p>{completed}/{count} Completed</p>
  <p>{pending}/{count} Pending</p>
</div>

<style>
  .todo-stats {
    display: flex;
		flex-direction: column;
    align-items: center;
  }

	.todo-stats > p {
		margin: 0;
		font-weight: bold;
		margin-bottom: 2px;
	}
</style>
