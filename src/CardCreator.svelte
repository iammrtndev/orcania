<script lang="ts">
  import Input from './Basics/Input.svelte'
  import Textarea from './Basics/Textarea.svelte'
  import HeroCard from './HeroCard/HeroCard.svelte'
  import type { Classe } from './Selector/ClasseSelector/ClasseSelector'
  import ClasseSelector from './Selector/ClasseSelector/ClasseSelector.svelte'
  import type { Race } from './Selector/RaceSelector/RaceSelector'
  import RaceSelector from './Selector/RaceSelector/RaceSelector.svelte'
  import ArmorSVG from 'src/assets/armor.svg'
  import HealthSVG from 'src/assets/health.svg'
  import attackSVG from 'src/assets/attack.svg'
  import magicSVG from 'src/assets/magic.svg'

  const heroCard: HeroCard['$$prop_def'] = {
    name: 'Chuchotement',
    description: '_Effet_:\nTour 1/3/4 gagne +2 magie',
    clan: 'sylgarden',
    race: 'Arbre-monde',
    classe: 'Mage',
    image: 'Chuchotement.png',
    armor: 2,
    health: 12,
    attack: [2, 4],
    magic: 3,
  }

  let armor = heroCard.armor.toString()
  $: heroCard.armor = Number.parseInt(armor)
  let health = heroCard.health.toString()
  $: heroCard.health = Number.parseInt(health)
  let attackMin = heroCard.attack[0].toString()
  let attackMax = heroCard.attack[1].toString()
  $: heroCard.attack = [Number.parseInt(attackMin), Number.parseInt(attackMax)]
  let magic = heroCard.health.toString()
  $: heroCard.magic = Number.parseInt(magic)
  let race: Race = heroCard.race
  $: heroCard.race = race
  let classe: Classe = heroCard.classe
  $: heroCard.classe = classe

  function changeImage(e) {
    const file = e.target.files[0]
    if (file) heroCard.image = URL.createObjectURL(file)
  }
</script>

<div class="CardCreator">
  <aside>
    <div>
      <input id="image" accept="image/*" type="file" on:change={changeImage} />
    </div>
    <Input bind:value={heroCard.name} />
    <div id="stats">
      <Input bind:value={armor}>
        <img src={ArmorSVG} alt="armor" />
      </Input>
      <Input bind:value={health}>
        <img src={HealthSVG} alt="health" />
      </Input>
      <Input bind:value={magic}>
        <img src={magicSVG} alt="magic" />
      </Input>
      <div id="attack">
        <Input bind:value={attackMin}>
          <img src={attackSVG} alt="attack" />
        </Input>
        <Input bind:value={attackMax}>
          <img src={attackSVG} alt="attack" />
        </Input>
      </div>
    </div>
    <div id="attributs">
      <RaceSelector bind:value={race} />
      <ClasseSelector bind:value={classe} />
      <ClasseSelector bind:value={classe} />
      <ClasseSelector bind:value={classe} />
    </div>
    <Textarea bind:value={heroCard.description} />
  </aside>
  <section>
    <HeroCard
      name={heroCard.name}
      description={heroCard.description}
      image={heroCard.image}
      armor={heroCard.armor}
      health={heroCard.health}
      attack={heroCard.attack}
      magic={heroCard.magic}
      clan={heroCard.clan}
      race={heroCard.race}
      classe={heroCard.classe}
      isRare={false}
    />
    <HeroCard
      name={heroCard.name}
      description={heroCard.description}
      image={heroCard.image}
      armor={heroCard.armor}
      health={heroCard.health}
      attack={heroCard.attack}
      magic={heroCard.magic}
      clan={heroCard.clan}
      race={heroCard.race}
      classe={heroCard.classe}
      isRare={true}
      showDescription={true}
    />
  </section>
</div>

<style>
  .CardCreator {
    display: flex;
  }

  aside {
    padding: 0 2rem;
    height: 100vh;
    width: 400px;
  }

  aside > * {
    margin: 20px 0;
  }

  #image {
    color: #fff;
  }

  #stats {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto auto;
  }

  #attack {
    display: flex;
  }

  #attributs {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto auto;
    text-align: center;
  }

  :global(#attributs .Selector) {
    width: 100%;
  }

  :global(aside .ClasseSelector),
  :global(aside .RaceSelector) {
    width: 100px !important;
    height: 100px !important;
  }

  :global(aside .Textarea) {
    height: 200px;
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
  }
</style>
