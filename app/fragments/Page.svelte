<div class="page">
  <slot />
</div>

<style lang="sass">
  @use 'app/layout.sass'
  
  .page
    padding: 8px
    @media screen and (min-width: layout.$full-width)
      padding: 24px
</style>
