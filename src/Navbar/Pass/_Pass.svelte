<script>
  import NavbarButton from '../_NavbarButton.svelte'
  import PassPNG from './pass.png'
</script>

<NavbarButton text="Pass Combat">
  <div id="Pass">
    <img src={PassPNG} alt="" />
  </div>
</NavbarButton>

<style>
  #Pass {
    position: relative;
    top: 24%;
  }

  img {
    width: 6vw;
  }
</style>
