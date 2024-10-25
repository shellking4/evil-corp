<script lang="ts">
  export let position: 'top' | 'bottom' = 'top';
  export let variant: 'primary' | 'secondary' = 'primary';
</script>

<div 
  class="absolute w-full h-[600px] opacity-10 overflow-hidden pointer-events-none blur-[2px]"
  class:top-0={position === 'top'}
  class:bottom-0={position === 'bottom'}
>
  <svg 
    viewBox="0 0 100 100" 
    class="absolute w-full h-full transform scale-[2.5] opacity-20"
    class:rotate-180={position === 'bottom'}
  >
    <defs>
      <linearGradient id="grad-{position}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop 
          offset="0%" 
          style="stop-color:{variant === 'primary' ? '#ff3e00' : '#40E0D0'}; stop-opacity:0.15" 
        />
        <stop 
          offset="100%" 
          style="stop-color:{variant === 'primary' ? '#ff3e00' : '#40E0D0'}; stop-opacity:0" 
        />
      </linearGradient>
    </defs>
    
    <pattern id="pattern-{position}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" class="fill-current" fill="url(#grad-{position})" />
      <path d="M0 10l10-10l10 10l-10 10z" class="fill-current" fill="url(#grad-{position})" />
    </pattern>
    
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-{position})" />
  </svg>
</div>