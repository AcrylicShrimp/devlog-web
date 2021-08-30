<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let error: string | undefined;
</script>

<input
  type="text"
  class="input font-size-18"
  class:with-error={!!error}
  on:change={(event) => dispatch('value', { value: event.currentTarget.value })}
  on:blur={() => dispatch('blur')}
/>
<div class="spacer" />
<p class="error" class:empty={!error}>{error || 'no error!'}</p>

<style lang="sass">
  .input
    border: 1px solid #b9c7dd
    border-radius: 4px
    padding: 4px 6px
    width: 300px
    background-color: transparent
    &.with-error
      color: #ff8a31
      border: 1px solid #ff8a31

  .spacer
    height: 8px

  .error
    padding-right: 4px
    color: #ff8a31
    text-align: right
    &.empty
      visibility: hidden
</style>
