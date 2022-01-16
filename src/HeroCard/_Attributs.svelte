<script lang="ts">
  import type { Attribut } from './HeroCard'

  export let attributs: Attribut[]
</script>

<div id="attributs">
  {#each attributs as attribut}
    <div>
      <img src={attribut + '.svg'} alt={attribut} />
    </div>
  {/each}
</div>

<style>
  #attributs {
    position: absolute;
    width: 48px;
    height: 60px;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #attributs div {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #eeeeee;
    box-shadow: inset 0px -2px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1px 0;
  }
</style>
