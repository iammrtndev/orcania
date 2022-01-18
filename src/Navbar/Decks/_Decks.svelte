<script>
  import NavbarButton from '../_NavbarButton.svelte'
  import CardsSVG from './cards.svg'
  import StackSVG from '../stack.svg'
</script>

<NavbarButton text="Decks">
  <div id="Decks">
    <img src={StackSVG} alt="" id="stack" />
    <img src={CardsSVG} alt="" id="cards" />
  </div>
</NavbarButton>

<style>
  #Decks {
    position: relative;
    top: 10%;
  }

  #stack {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 5.55vw;
  }

  #cards {
    width: 7.22vw;
    position: relative;
    z-index: 1;
  }
</style>
