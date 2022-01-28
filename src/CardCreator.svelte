<script lang="ts">
  import Input from './Basics/Input.svelte'
  import HeroCard from './HeroCard/HeroCard.svelte'
  import type { Classe } from './Selectors/ClasseSelector/ClasseSelector'
  import ClasseSelector from './Selectors/ClasseSelector/ClasseSelector.svelte'
  import type { Race } from './Selectors/RaceSelector/RaceSelector'
  import RaceSelector from './Selectors/RaceSelector/RaceSelector.svelte'

  const heroCard: HeroCard['$$prop_def'] = {
    name: 'Chuchotement',
    description: 'Chuchotement',
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
  $: heroCard.armor = Number.parseInt(armor) || 0
  let health = heroCard.health.toString()
  $: heroCard.health = Number.parseInt(health) || 0
  let attackMin = heroCard.attack[0].toString()
  let attackMax = heroCard.attack[1].toString()
  $: heroCard.attack = [Number.parseInt(attackMin), Number.parseInt(attackMax)]
  let race: Race = heroCard.race
  $: heroCard.race = race
  let classe: Classe = heroCard.classe
  $: heroCard.classe = classe
</script>

<div class="CardCreator">
  <aside>
    <Input bind:value={heroCard.name} />
    <Input bind:value={armor} />
    <Input bind:value={health} />
    <Input bind:value={attackMin} />
    <Input bind:value={attackMax} />
    <br />
    <RaceSelector bind:value={race} />
    <ClasseSelector bind:value={classe} />
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
  </section>
</div>

<style>
  .CardCreator {
    padding: 2rem;
    display: flex;
  }

  aside {
    width: 600px;
  }
</style>
