<script lang="ts">
  import Attributs from './_Attributs.svelte'
  import ClanRare from './_ClanRare.svelte'
  import ClanCommon from './_ClanCommon.svelte'
  import FrameCommon from './_FrameCommon.svelte'
  import FrameRare from './_FrameRare.svelte'
  import ImageCommon from './_ImageCommon.svelte'
  import ImageRare from './_ImageRare.svelte'
  import Stats from './_Stats.svelte'
  import Info from './_Info.svelte'
  import RaceSelector from 'src/Selectors/RaceSelector/RaceSelector.svelte'
  import ClassSelector from 'src/Selectors/ClasseSelector/ClasseSelector.svelte'
  import type { Classe } from 'src/Selectors/ClasseSelector/ClasseSelector'
  import ClanSelector from 'src/Selectors/ClanSelector/ClanSelector.svelte'
  import { Clan, ColorByClan } from 'src/Selectors/ClanSelector/ClanSelector'
  import type { Race } from 'src/Selectors/RaceSelector/RaceSelector'

  export let name: string
  export let description: string
  export let image: string
  export let clan: Clan
  export let race: Race
  export let classe: Classe
  export let armor: number
  export let health: number
  export let attack: number[]
  export let magic: number
  export let isRare = false

  let heroCard: HTMLDivElement

  function lookAtCursor(e) {
    const { clientX, clientY, currentTarget } = e
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget

    const horizontal = (clientX - offsetLeft) / clientWidth
    const vertical = (clientY - offsetTop) / clientHeight
    const rotateX = (15 / 2 - horizontal * 15).toFixed(2)
    const rotateY = (vertical * 15 - 15 / 2).toFixed(2)

    heroCard.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`
  }
</script>

<div
  id="hero-card"
  bind:this={heroCard}
  on:mousemove={lookAtCursor}
  on:pointermove={lookAtCursor}
>
  {#if isRare}
    <ImageRare {image} />
    <FrameRare />
    <ClanRare>
      <ClanSelector />
    </ClanRare>
  {:else}
    <ImageCommon {image} />
    <FrameCommon color={ColorByClan[clan]} />
    <ClanCommon>
      <ClanSelector />
    </ClanCommon>
  {/if}
  <Attributs>
    <RaceSelector bind:value={race} />
    <div id="margin" />
    <ClassSelector bind:value={classe} />
  </Attributs>
  <Stats {armor} {health} {attack} {magic} />
  <Info {name} {description} />
</div>

<style>
  #hero-card {
    position: relative;
    width: 200px;
    height: 300px;
  }

  #margin {
    margin: 2px 0;
  }
</style>
