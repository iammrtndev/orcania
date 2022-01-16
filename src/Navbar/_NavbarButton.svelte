<script lang="ts">
  import Button from './button.svg'

  export let text: string
</script>

<div class="NavbarButton">
  <img src={Button} alt="" id="background" />
  <div id="image">
    <slot />
  </div>
  <span>{text}</span>
</div>

<style>
  .NavbarButton {
    position: relative;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  #background {
    position: absolute;
    transform: translateY(-8px);
  }

  #image {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: all 0.1s ease-in-out;
  }

  span {
    z-index: 1;
    font-size: 20px;
    color: #fff;
    padding-bottom: 12px;
  }

  .NavbarButton:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 8px #ad800c);
  }

  .NavbarButton:hover #image {
    transform: translateY(-4px);
  }
</style>
