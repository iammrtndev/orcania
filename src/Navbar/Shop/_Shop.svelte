<script>
  import NavbarButton from '../_NavbarButton.svelte'
  import CoinsSVG from './coins.svg'
  import CardSVG from '../card.svg'
</script>

<NavbarButton text="Boutique">
  <div id="Shop">
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
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CardSVG} alt="" class="card" />
    <img src={CoinsSVG} alt="" id="coins" />
  </div>
</NavbarButton>

<style>
  #Shop {
    position: relative;
  }

  #coins {
    transform: translateY(36px);
    position: relative;
    z-index: 1;
  }

  .card {
    position: absolute;
    left: 0;
  }

  .card:nth-child(15) {
    top: 47px;
  }
  .card:nth-child(14) {
    top: 49px;
  }
  .card:nth-child(13) {
    top: 51px;
  }
  .card:nth-child(12) {
    top: 53px;
  }
  .card:nth-child(11) {
    top: 55px;
  }
  .card:nth-child(10) {
    top: 57px;
  }
  .card:nth-child(9) {
    top: 59px;
  }
  .card:nth-child(8) {
    top: 61px;
  }
  .card:nth-child(7) {
    top: 63px;
  }
  .card:nth-child(6) {
    top: 65px;
  }
  .card:nth-child(5) {
    top: 67px;
  }
  .card:nth-child(4) {
    top: 69px;
  }
  .card:nth-child(3) {
    top: 71px;
  }
  .card:nth-child(2) {
    top: 73px;
  }
  .card:nth-child(1) {
    top: 75px;
  }
</style>
