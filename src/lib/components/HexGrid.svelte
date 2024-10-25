<script lang="ts">
  export let opacity: number = 0.1;
  export let color: 'primary' | 'secondary' = 'primary';
</script>

<div class="absolute inset-0 overflow-hidden pointer-events-none blur-[1px]">
  <svg 
    class="absolute w-full h-full opacity-[{opacity}]" 
    viewBox="0 0 100 100" 
    preserveAspectRatio="none"
  >
    <pattern 
      id="hexagons" 
      width="15" 
      height="25.98" 
      patternUnits="userSpaceOnUse" 
      patternTransform="scale(3)"
    >
      <path 
        d="M7.5 0l7.5 12.99l-7.5 12.99l-7.5-12.99z" 
        class:text-evil-primary={color === 'primary'}
        class:text-evil-secondary={color === 'secondary'}
        fill="none"
        stroke="currentColor"
        stroke-width="0.15"
        stroke-opacity="0.3"
      />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
  </svg>
</div>