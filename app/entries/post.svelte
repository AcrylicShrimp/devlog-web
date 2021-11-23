<script lang="ts">
  import Layout from 'entries/_layout.svelte';
  import Post from 'fragments/Post.svelte';

  export let title: string;
  export let category: undefined | string;
  export let content: string;
  export let createdAt: Date;
</script>

<Layout>
  <Post {title} {category} {content} {createdAt} />
</Layout>
