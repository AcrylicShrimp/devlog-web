<main class="page-content">
  <slot />
</main>

<style lang="sass">
  @use 'app/layout.sass'

  .page-content
    margin-top: layout.$page-content-margin-top
    min-height: layout.$page-content-min-height

    @media screen and (min-width: layout.$wide-width)
      margin-top: layout.$page-content-margin-top-wide
      min-height: layout.$page-content-min-height-wide
</style>
