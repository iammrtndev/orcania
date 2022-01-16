<script>
  import Cards from './cards.svg'
</script>

<div id="Play">
  <img src={Cards} alt="" class="cards left" />
  <span>VS</span>
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

  span {
    font-size: 48px;
    background: linear-gradient(0deg, #ad800c, #ad800c),
      radial-gradient(
        80.04% 80.04% at 0% -8.66%,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(
        74.17deg,
        #576265 13.43%,
        #9ea1a1 26.76%,
        #848b8a 47.44%,
        #576265 53.73%,
        #576265 77.78%,
        #757a7b 86.51%,
        #576265 95.7%
      );
    background-blend-mode: color, overlay, normal;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .cards {
    transition: all 0.1s ease-in-out;
    -webkit-user-drag: none;
  }

  .right {
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
