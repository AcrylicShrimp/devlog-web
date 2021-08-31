<script>
  import Footer from 'fragments/Footer.svelte';
</script>

<div class="px-3 py-6 pt-5 md:px-6 md:py-10 md:pt-8">
  <header class="font-point text-3xl text-red select-none md:text-4xl">
    <a href="/">
      <p>acrylicshrimp blog</p>
    </a>
  </header>
  <div class="mt-16 mb-4 min-h-screen md:mx-auto md:mt-32 mb-12 md:max-w-screen-lg">
    <slot />
  </div>
  <Footer />
</div>
