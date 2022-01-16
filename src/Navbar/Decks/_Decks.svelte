<script>
  import NavbarButton from '../_NavbarButton.svelte'
  import CardsSVG from './cards.svg'
  import CardSVG from '../card.svg'
</script>

<NavbarButton text="Decks">
  <div id="Decks">
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardsSVG} alt="" id="cards" />
  </div>
</NavbarButton>

<style>
  #Decks {
    position: relative;
  }

  #cards {
    position: relative;
    z-index: 1;
  }

  .card {
    transform: translateX(25%);
    position: absolute;
    left: 0;
  }

  .card:nth-child(1) {
    top: 75px;
  }
  .card:nth-child(2) {
    top: 73px;
  }
  .card:nth-child(3) {
    top: 71px;
  }
  .card:nth-child(4) {
    top: 69px;
  }
  .card:nth-child(5) {
    top: 67px;
  }
  .card:nth-child(6) {
    top: 65px;
  }
  .card:nth-child(7) {
    top: 63px;
  }
  .card:nth-child(8) {
    top: 61px;
  }
  .card:nth-child(9) {
    top: 59px;
  }
  .card:nth-child(10) {
    top: 57px;
  }
</style>
