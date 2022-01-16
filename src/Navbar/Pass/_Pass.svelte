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
    transform: translateY(16px);
  }
</style>
