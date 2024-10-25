<script lang="ts">
  let isScrolled = false;
  
  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav class:scrolled={isScrolled} class="fixed w-full z-50 transition-all duration-300 py-4 px-6">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg bg-evil-primary/20 border border-evil-primary/30 flex items-center justify-center">
        <div class="w-4 h-4 bg-evil-primary rounded-sm animate-pulse" />
      </div>
      <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-evil-primary to-evil-secondary">
        EvilCorp
      </span>
    </div>
    
    <div class="hidden md:flex items-center gap-8">
      {#each ['Products', 'Solutions', 'About', 'Contact'] as item}
        <a href="#{item.toLowerCase()}" class="text-gray-300 hover:text-evil-secondary transition-colors">
          {item}
        </a>
      {/each}
    </div>
    
    <button class="nav-glass px-4 py-2 rounded-full text-sm hover:bg-evil-primary/20 transition-all duration-300">
      Portal Access
    </button>
  </div>
</nav>

<style lang="postcss">
  .scrolled {
    @apply bg-black/5 backdrop-blur-lg border-b border-white/10;
  }

  .nav-glass {
    @apply bg-white/5 backdrop-blur-lg border border-white/10;
  }
</style>