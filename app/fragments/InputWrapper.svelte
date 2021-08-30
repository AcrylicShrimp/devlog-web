<script>
  export let label: string;
</script>

<div>
  <p class="font-point font-size-21 no-select">{label}</p>
  <div class="input-wrapper">
    <slot />
  </div>
</div>

<style lang="sass">
  .input-wrapper
    padding-top: 12px
    padding-left: 12px
</style>
