<script lang="ts">
  import 'styles/post.sass';
  import 'styles/post-highlight-halflife.sass';

  export let title: string;
  export let category: undefined | string;
  export let content: string;
  export let createdAt: Date;

  function formatDate(date: Date) {
    return `${String(date.getFullYear()).padStart(4, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(
      date.getDate(),
    ).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(
      date.getSeconds(),
    ).padStart(2, '0')}`;
  }
</script>

<article>
  <header>
    <h1 class="font-bold text-xl text-lightblue">Posts/{title}</h1>
    {#if category}
      <p class="mt-1 text-sm text-gray">
        Written in {formatDate(createdAt)}, categoried as
        <a href={`/?category=${category}`} class="text-wine hover:underline">{category}</a>
      </p>
    {:else}
      <p class="mt-1 text-sm text-gray">Written in {formatDate(createdAt)}</p>
    {/if}
  </header>
  <div class="mt-16 post">
    {@html content}
  </div>
</article>
