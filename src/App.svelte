<script lang="ts">
  import { inview } from 'svelte-inview';
  import Navbar from './lib/components/Navbar.svelte';
  import DecorativeGrid from './lib/components/DecorativeGrid.svelte';
  import GeometricPattern from './lib/components/GeometricPattern.svelte';
  import HexGrid from './lib/components/HexGrid.svelte';
  
  let heroVisible = false;
  let featuresVisible = false;
  let ctaVisible = false;
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
  <!-- Hero Section -->
  <section 
    use:inview={{unobserveOnEnter: true}}
    on:enter={() => heroVisible = true}
    class="relative min-h-screen flex items-center justify-center px-4 pt-20"
  >
    <GeometricPattern position="top" variant="primary" />
    <DecorativeGrid position="left" />
    <DecorativeGrid position="right" />
    <HexGrid opacity={0.03} color="secondary" />
    
    <div class:visible={heroVisible} class="reveal text-center">
      <div class="relative inline-block">
        <h1 class="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-evil-primary to-evil-secondary">
          EvilCorp
        </h1>
        <div class="absolute -top-8 -right-8 glass p-2 rounded-lg transform rotate-12">
          <span class="text-xs text-evil-secondary">EST. 1970</span>
        </div>
      </div>
      <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
        Revolutionizing the future through questionably ethical innovation
      </p>
      <div class="flex gap-4 justify-center">
        <button class="glass px-8 py-3 rounded-full text-lg hover:bg-evil-primary/20 transition-all duration-300 group">
          Join the Dark Side
          <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section 
    use:inview={{unobserveOnEnter: true}}
    on:enter={() => featuresVisible = true}
    class="relative py-20 px-4"
  >
    <HexGrid opacity={0.02} color="primary" />
    <div class:visible={featuresVisible} class="reveal max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each [
        { title: 'World Domination', desc: 'Our proprietary algorithms ensure maximum market control', icon: '🌍' },
        { title: 'Evil Innovation', desc: 'Pushing boundaries of what should not be done', icon: '⚡' },
        { title: 'Dark Analytics', desc: 'Insights that probably violate privacy laws', icon: '📊' }
      ] as feature}
        <div class="glass p-8 rounded-xl group hover:bg-evil-primary/5 transition-all duration-300">
          <div class="text-4xl mb-4">{feature.icon}</div>
          <h3 class="text-2xl font-bold mb-4 text-evil-secondary">{feature.title}</h3>
          <p class="text-gray-300">{feature.desc}</p>
          <div class="mt-6 flex items-center text-evil-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-sm">Learn more</span>
            <span class="ml-2">→</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- CTA Section -->
  <section 
    use:inview={{unobserveOnEnter: true}}
    on:enter={() => ctaVisible = true}
    class="py-20 px-4"
  >
    <GeometricPattern position="bottom" variant="secondary" />
    <div class:visible={ctaVisible} class="reveal glass max-w-4xl mx-auto p-12 rounded-2xl text-center relative overflow-hidden">
      <HexGrid opacity={0.05} color="secondary" />
      <div class="absolute inset-0 bg-gradient-to-r from-evil-primary/5 to-evil-secondary/5" />
      <div class="relative z-10">
        <h2 class="text-4xl font-bold mb-6">Ready to Embrace the Darkness?</h2>
        <p class="text-xl mb-8 text-gray-300">Join thousands of morally flexible individuals in our quest for global influence</p>
        <div class="flex gap-4 justify-center">
          <button class="bg-evil-primary px-8 py-3 rounded-full text-lg hover:bg-evil-primary/80 transition-all duration-300 group">
            Get Started
            <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button class="glass px-8 py-3 rounded-full text-lg hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>