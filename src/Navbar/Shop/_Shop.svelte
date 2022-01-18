<script>
  import NavbarButton from '../_NavbarButton.svelte'
  import CoinsSVG from './coins.svg'
  import StackSVG from '../stack.svg'
</script>

<NavbarButton text="Boutique">
  <div id="Shop">
    <img src={CoinsSVG} alt="" id="coins" />
    <img src={StackSVG} alt="" id="stack" />
  </div>
</NavbarButton>

<style>
  #Shop {
    position: relative;
    top: 27%;
  }

  #coins {
    position: relative;
    width: 5.2vw;
    z-index: 1;
  }

  #stack {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 5.55vw;
  }
</style>
