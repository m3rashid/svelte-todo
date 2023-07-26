<script lang="ts">
  import {v4 as uuidv4} from 'uuid'

  import Card from './card.svelte'
  import Button from './button.svelte'
  import {initialTodoList, type Todo} from '../todoStore'

  let text = ''
  let btnDisabled = true
  let min = 10
  let message: string|null

  const handleInput = () => {
    if(text.trim().length <= min) {
      message = `Text must be at least ${min} characters`
      btnDisabled = true
    } else {
      message = null
      btnDisabled = false
    }
  }

  const handleSubmit = () => {
    if(text.trim().length > min) {
      initialTodoList.update((currentList) => {
        return [{
					id: uuidv4(),
					title: text,
					done: false
      }, ...currentList]
      })

      text = ''
    }
  }
</script>


<Card>
  <header>
    <h2>Add a new Todo</h2>
  </header>
<form on:submit|preventDefault={handleSubmit}>
  <div class="input-group">
    <input type="text" on:input={handleInput} bind:value = {text} placeholder="Add a todo">
    <Button disabled={btnDisabled} type="submit">Send</Button>
  </div>
  {#if message}
    <div class="message">
      {message}
    </div>
  {/if}
</form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
		margin-bottom: 10px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
