<script lang="ts">
  import Bulb from './Bulb.svelte';
  
  export let position: 'left' | 'right' = 'left';
</script>

<div class={`absolute top-40 ${position}-0 w-40 h-96 grid grid-cols-4 gap-8 -z-10 opacity-50`}>
  {#each Array(16) as _, i}
    <Bulb 
      size={i % 3 === 0 ? 'lg' : i % 2 === 0 ? 'md' : 'sm'}
      color={i % 2 === 0 ? 'primary' : 'secondary'}
      delay={i * 300}
    />
  {/each}
</div>