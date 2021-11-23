<script lang="ts">
  import Layout from 'entries/_layout.svelte';
  import image from 'img/404.gif';
</script>

<Layout>
  <h1 class="font-bold text-xl text-lightblue">Page not found</h1>
  <p class="mt-4 text-lg text-gray">Please double-check the URL and try again!</p>
  <img src={image} alt="the A.R.O.N.A trys to hit you" class="block mx-auto my-6 rounded max-w-full" />
</Layout>
