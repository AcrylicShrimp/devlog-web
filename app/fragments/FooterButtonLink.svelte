<script>
  export let href: string;
</script>

<a class="font-point button" {href}>
  <slot />
</a>

<style lang="sass">
  .button
    display: block
    border: 1px solid rgba(185, 199, 221, 0.25)
    border-radius: 4px
    padding: 7px 15px
    color: rgba(185, 199, 221, 0.25)
    font-size: 16px
    transition: border-color 0.2s, color 0.2s

    &:hover
      border-color: rgb(185, 199, 221)
      color: rgb(185, 199, 221)
</style>
