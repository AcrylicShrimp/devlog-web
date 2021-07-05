<div class="page">
  <slot />
</div>

<style lang="sass">
  @use 'app/layout.sass'
  
  .page
    padding: 24px 8px 30px
    
    @media screen and (min-width: layout.$wide-width)
      margin: 0 auto
      padding: 48px 24px 64px
      max-width: 900px
</style>
