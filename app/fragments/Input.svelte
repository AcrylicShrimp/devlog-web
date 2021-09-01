<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let error: string | undefined;
</script>

<input
  type="text"
  class="px-2 py-1 w-full text-base bg-darkgray bg-opacity-40 focus:outline-none focus:ring-1 focus:ring-red"
  class:with-error={!!error}
  on:change={(event) => dispatch('value', { value: event.currentTarget.value })}
  on:blur={() => dispatch('blur')}
/>
<p class="mt-2 text-sm text-error text-right" class:empty={!error}>{error || 'no error!'}</p>

<style lang="sass">
  .with-error:not(:focus)
    @apply border border-error

  .empty
    @apply invisible
</style>
