<script>
  import CardsSVG from './cards.svg'
  import BackgroundSVG from './background.svg'
</script>

<div id="Play">
  <img src={BackgroundSVG} alt="" id="background" />
  <img src={CardsSVG} alt="" class="cards left" />
  <img src={CardsSVG} alt="" class="cards right" />
</div>

<style>
  #Play {
    position: relative;
    width: 24vw;
    height: 8.33vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #background {
    width: 16.66vw;
    position: absolute;
    bottom: 0;
  }

  .cards {
    position: absolute;
    transition: all 0.1s ease-in-out;
    width: 9.65vw;
    z-index: 1;
    bottom: 0;
  }

  .left {
    left: 4%;
  }

  .right {
    right: 4%;
    transform: scaleX(-1);
  }

  #Play:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 8px #ad800c);
  }

  #Play:hover .left {
    transform: translateY(-4px);
  }

  #Play:hover .right {
    transform: scaleX(-1) translateY(-4px);
  }
</style>
