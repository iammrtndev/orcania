<script lang="ts">
  import { Race, races } from './RaceSelector'

  export let value: Race
  let img: HTMLImageElement

  $: if (img) img.src = `RaceSelector/${value}.svg`
</script>

<div class="RaceSelector">
  {#if value.length}
    <img bind:this={img} alt="" />
  {/if}
  <select bind:value on:change={() => (img.src = `RaceSelector/${value}.svg`)}>
    <option value="" />
    {#each races as race}
      <option value={race} selected>{race}</option>
    {/each}
  </select>
</div>

<style>
  .RaceSelector {
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
