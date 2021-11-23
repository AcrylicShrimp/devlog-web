<script lang="ts">
  import type { PostPreviewSchema } from 'app/schema';
  import Layout from 'entries/_layout.svelte';
  import Posts from 'fragments/Posts.svelte';

  export let posts: PostPreviewSchema[];
</script>

<Layout>
  <h1 class="font-bold text-xl text-lightblue">Posts</h1>
  <Posts {posts} />
</Layout>
