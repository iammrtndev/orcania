<script lang="ts">
  import { Race, races } from './RaceSelector'

  export let value: Race
  let img: HTMLImageElement

  $: img != null ? (img.src = `RaceSelector/${value}.svg`) : null
</script>

<div class="RaceSelector">
  <img bind:this={img} alt="" />
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
