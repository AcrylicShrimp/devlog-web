<script lang="ts">
  import type { PostPreview } from 'app/schema';

  export let posts: PostPreview[];

  function formatDate(date: Date) {
    return `${String(date.getFullYear()).padStart(4, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(
      date.getDate(),
    ).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }
</script>

<div class="mt-4 flex flex-col justify-start align-center text-lg">
  {#each posts as post (post.slug)}
    <p class="post-item">
      <span class="text-gray">[{formatDate(post.createdAt)}]</span>
      <a href={`/?category=${post.category}`} class="text-wine hover:underline">[{post.category}]</a>
      <a href={`/posts/${post.slug}`} class="text-yellow hover:underline">{post.title}</a>
    </p>
  {:else}
    <p class="text-gray">No post yet :(</p>
  {/each}
</div>

<style lang="sass">
  .post-item
    & + &
      @apply mt-2
</style>
