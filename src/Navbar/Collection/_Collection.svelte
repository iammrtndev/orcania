<script>
  import NavbarButton from '../_NavbarButton.svelte'
  import CollectionPNG from './collection.png'
</script>

<NavbarButton text="Collection">
  <div id="Collection">
    <img src={CollectionPNG} alt="" />
  </div>
</NavbarButton>

<style>
  img {
    width: 9.6vw;
    transform: translateY(18%);
  }
</style>
