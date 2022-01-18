<script>
  import Collection from './Collection/_Collection.svelte'
  import Decks from './Decks/_Decks.svelte'
  import Play from './Play/_Play.svelte'
  import Shop from './Shop/_Shop.svelte'
  import Pass from './Pass/_Pass.svelte'
</script>

<nav id="navbar">
  <div id="background" />
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
    height: 8.33vw;
  }

  #background {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-bottom: 2.77vw solid #202020;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    width: 88.88%;
  }

  #buttons {
    width: 88.88%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
</style>
