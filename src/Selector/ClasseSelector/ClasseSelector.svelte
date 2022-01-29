<script lang="ts">
  import { Classe, classes } from './ClasseSelector'

  export let value: Classe
  let img: HTMLImageElement

  $: if (img) img.src = `ClasseSelector/${value}.svg`
</script>

<div class="ClasseSelector">
  {#if value.length}
    <img bind:this={img} alt="" />
  {/if}
  <select
    bind:value
    on:change={() => (img.src = `ClasseSelector/${value}.svg`)}
  >
    <option value="" />
    {#each classes as race}
      <option value={race} selected>{race}</option>
    {/each}
  </select>
</div>

<style>
  .ClasseSelector {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
  }

  select {
    color: transparent;
    appearance: none;
    background: #eee;
    box-shadow: inset 0px -2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  option {
    color: #000;
  }
</style>
