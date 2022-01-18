<script lang="ts">
  import Button from './button.svg'

  export let text: string
</script>

<div class="NavbarButton">
  <img src={Button} alt="" id="background" />
  <div id="image">
    <slot />
  </div>
  <div id="text">{text}</div>
</div>

<style>
  .NavbarButton {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 8.33vw;
  }

  #background {
    width: 10.41vw;
    position: absolute;
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

  #text {
    position: relative;
    bottom: 4%;
    z-index: 1;
    font-size: 1.37vw;
    color: #fff;
    white-space: nowrap;
  }

  .NavbarButton:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 8px #ad800c);
  }

  .NavbarButton:hover #image {
    transform: translateY(-4%);
  }
</style>
