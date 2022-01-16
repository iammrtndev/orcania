<script>
  import Cards from './cards.svg'
</script>

<div id="Play">
  <img src={Cards} alt="" class="cards left" />
  <img src={Cards} alt="" class="cards right" />
</div>

<style>
  #Play {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('./background.svg') no-repeat center 0;
  }

  .cards {
    transition: all 0.1s ease-in-out;
    -webkit-user-drag: none;
  }

  .left {
    margin-right: 20px;
  }

  .right {
    margin-left: 20px;
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
