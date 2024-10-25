<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let color: string = 'primary';
  export let delay: number = 0;
  
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  $: classes = [
    'absolute',
    'rounded-full',
    'animate-pulse',
    'opacity-20',
    sizeClasses[size],
    color === 'primary' ? 'bg-evil-primary' : 'bg-evil-secondary'
  ].join(' ');
</script>

<div 
  class={classes}
  style="animation-delay: {delay}ms"
/>