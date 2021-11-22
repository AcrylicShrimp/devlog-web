<script lang="ts">
  import { ready } from '@roxi/routify';
  import Post from 'fragments/Post.svelte';
  import type { PostSchema } from 'app/scheme';

  export let slug: string;
  let post: undefined | PostSchema;

  fetch(`https://api.blog.ashrimp.dev/posts/${slug}`, {
    method: 'GET',
  })
    .then(async (res) => {
      const json = await res.json();
      post = {
        title: json.title,
        category: json?.category.name,
        content: json.htmlContent,
        createdAt: new Date(json.createdAt),
      };
    })
    .catch((err) => {
      console.error(err);
    })
    .finally($ready);
</script>

{#if post}
  <Post title={post.title} category={post.category} content={post.content} createdAt={post.createdAt} />
{:else}
  <h1 class="font-bold text-xl text-lightblue">Posts/{slug}</h1>
{/if}
