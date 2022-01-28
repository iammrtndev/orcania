<script lang="ts">
  import { Classe, classes } from './ClasseSelector'

  export let value: Classe
  let img: HTMLImageElement

  $: img != null ? (img.src = `ClasseSelector/${value}.svg`) : null
</script>

<div class="ClasseSelector">
  <img bind:this={img} alt="" />
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
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  select {
    color: transparent;
    appearance: none;
    background: #eee;
    box-shadow: inset 0px -2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }

  select::-ms-expand {
    display: none;
  }

  option {
    color: #000;
  }
</style>
