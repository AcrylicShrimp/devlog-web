<script>
  import FooterButtonLink from 'fragments/FooterButtonLink.svelte';

  function getDateRange(): string {
    return `2020-${new Date().getFullYear()}`;
  }
</script>

<footer class="flex flex-col justify-start items-start space-y-2 font-point text-sm">
  <p>
    <i class="far fa-envelope" /><span class="inline-block w-1" /><a
      href="mailto:led789zxpp@naver.com"
      target="_blank"
      rel="noopener noreferrer">led789zxpp@naver.com</a
    >
  </p>
  <p>
    <i class="fab fa-github" /><span class="inline-block w-1" /><a
      href="https://github.com/AcrylicShrimp"
      target="_blank"
      rel="noopener noreferrer">AcrylicShrimp</a
    >
  </p>
  <p>
    <i class="fab fa-twitter" /><span class="inline-block w-1" /><a
      href="https://twitter.com/AcrylicShrimp"
      target="_blank"
      rel="noopener noreferrer">AcrylicShrimp</a
    >
  </p>
  <p>
    <i class="far fa-copyright" /><span class="inline-block w-1" />{getDateRange()}
    <span class="block md:inline">AcrylicShrimp All rights reserved.</span>
  </p>
  <div class="px-2 pt-4 md:px-3 md:pt-6">
    <a class="button-footer" href="/login">Admin Login</a>
  </div>
</footer>
