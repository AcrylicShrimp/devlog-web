<script>
  export let label: string;
</script>

<div class="w-full">
  <p class="font-point text-lg select-none">{label}</p>
  <div class="px-2 pt-2">
    <slot />
  </div>
</div>
