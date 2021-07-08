<script>
  import FooterButtonLink from 'fragments/FooterButtonLink.svelte';

  function getDateRange(): string {
    return `2020-${new Date().getFullYear()}`;
  }
</script>

<footer class="footer font-point font-size-16">
  <p>
    <i class="fab fa-github" /><span class="footer-item-icon-spacer" /><a href="https://github.com/AcrylicShrimp" target="_blank"
      >AcrylicShrimp</a
    >
  </p>
  <div class="footer-item-spacer" />
  <p>
    <i class="fab fa-twitter" /><span class="footer-item-icon-spacer" /><a href="https://twitter.com/AcrylicShrimp" target="_blank"
      >AcrylicShrimp</a
    >
  </p>
  <div class="footer-item-spacer" />
  <p>
    <i class="far fa-envelope" /><span class="footer-item-icon-spacer" /><a href="mailto:led789zxpp@naver.com" target="_blank"
      >led789zxpp@naver.com</a
    >
  </p>
  <div class="footer-item-spacer" />
  <p><i class="far fa-copyright" /><span class="footer-item-icon-spacer" />{getDateRange()} AcrylicShrimp All rights reserved.</p>
  <div class="footer-item-spacer wide" />
  <div class="footer-item-wrapper">
    <FooterButtonLink href="/login">Admin Login</FooterButtonLink>
  </div>
</footer>

<style lang="sass">
  @use 'app/layout.sass'
    
  .footer
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-end
    min-height: layout.$page-footer-min-height

    @media screen and (min-width: layout.$wide-width)
      min-height: layout.$page-footer-min-height-wide

  .footer-item-spacer
    height: 8px
    &.wide
      height: 26px

  .footer-item-icon-spacer
    display: inline-block
    width: 0.2em

  .footer-item-wrapper
    padding: 0 0 4px 4px
</style>
