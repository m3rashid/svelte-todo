<script lang="ts">
  import {initialTodoList, type Todo} from '../todoStore'
  import Card from './card.svelte'
  export let item: Todo

  const handleDelete = (itemId: string) => {
    initialTodoList.update((current) => current.filter(item => item.id != itemId))
  }

	const handleMarkAsDone = (itemId: string) => {
		initialTodoList.update((current) => {
			const others = current.filter(item => item.id != itemId)
			const item = current.find(item => item.id == itemId)

			return [...others, { ...item, done: true }]
		})
	}

	const handleMarkAsNotDone = (itemId: string) => {
		initialTodoList.update((current) => {
			return current.map((t) => (t.id == itemId ? { ...t, done: false } : t))
		})
	}
</script>

<Card>
	<div class="outer-container">
		{#if !item.done}
  	<div class="num-display"></div>
	{/if}

	<p class="text-display">
		{item.title}
  </p>

	<div class="btn-container">
		<button class="close" on:click={() => handleDelete(item.id)}>Remove</button>
		{#if item.done}
			<button class="close" on:click={() => handleMarkAsNotDone(item.id)}>Undo</button>
		{:else}
			<button class="close" on:click={() => handleMarkAsDone(item.id)}>Done</button>
		{/if}
	</div>
</div>
</Card>

<style>
	.outer-container {
		display: flex;
		gap: 8px;
	}

	.text-display {
		flex-grow: 3;
	}

  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 6px;
    height: 6px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    cursor: pointer;
    border: none;
		padding: 8px;
		border-radius: 8px;
		width: 100%;
		}

	.btn-container {
		display: flex;
		gap: 4px;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
</style>
