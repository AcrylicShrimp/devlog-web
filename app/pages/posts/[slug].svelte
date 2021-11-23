<script lang="ts">
  import Post from 'fragments/Post.svelte';
  import { getContext } from 'svelte';
  import type { PostSchema } from 'app/schema';

  export let slug: string = '';
  const post = getContext<Map<string, PostSchema>>('posts').get(slug);

  console.log(post);
</script>

{#if post}
  <Post title={post.title} category={post.category} content={post.content} createdAt={post.createdAt} />
{:else}
  <h1 class="font-bold text-xl text-lightblue">Posts/{slug}</h1>
{/if}
