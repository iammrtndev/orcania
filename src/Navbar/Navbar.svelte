<script>
  import Collection from './Collection/_Collection.svelte'
  import Decks from './Decks/_Decks.svelte'
  import Play from './Play/_Play.svelte'
  import Shop from './Shop/_Shop.svelte'
  import Pass from './Pass/_Pass.svelte'
</script>

<nav id="navbar">
  <div id="buttons">
    <Collection />
    <Decks />
    <Play />
    <Shop />
    <Pass />
  </div>
</nav>

<style>
  #navbar {
    user-select: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background: url('./background.svg') no-repeat center 80px;
  }

  #buttons {
    display: flex;
    justify-content: center;
  }

  :global(#buttons > div) {
    margin: 0 28px;
  }
</style>
