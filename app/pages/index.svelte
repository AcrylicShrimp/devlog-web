<script lang="ts">
  import { getContext } from 'svelte';
  import Posts from 'fragments/Posts.svelte';
</script>

<h1 class="font-bold text-xl text-lightblue">Posts</h1>
<Posts posts={getContext('post-previews')} />
