<script lang="ts">
  import { ready } from '@roxi/routify';
  import Posts from 'fragments/Posts.svelte';
  import type { PostPreview } from 'app/schema';

  let posts: PostPreview[] = [];

  fetch('https://api.blog.ashrimp.dev/posts', {
    method: 'GET',
  })
    .then(async (res) => {
      posts = (await res.json()).posts.map((post) => ({
        ...post,
        category: post.category?.name,
        createdAt: new Date(post.createdAt),
        modifiedAt: new Date(post.modifiedAt),
      }));
    })
    .catch((err) => {
      console.error(err);
    })
    .finally($ready);
</script>

<h1 class="font-bold text-xl text-lightblue">Posts</h1>
<Posts {posts} />
