<script lang="ts">
  import Background from './Background/Background.svelte'
  import HeroCard from './HeroCard/HeroCard.svelte'
  import Navbar from './Navbar/Navbar.svelte'
</script>

<Background />
<div id="center">
  <HeroCard
    image="hero.jpg"
    clan="sylgarden"
    isRare={true}
    armor={2}
    attack={[2, 4]}
    health={12}
    magic={3}
    attributs={['forest', 'sorcerer']}
  />
</div>

<style>
  #center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
</style>
