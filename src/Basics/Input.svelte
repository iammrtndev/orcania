<script lang="ts">
  export let value = ''
  export let placeholder = ''
</script>

<div class="Input">
  <label for="input">
    <slot />
  </label>
  <input
    bind:value
    type="text"
    id="input"
    {placeholder}
    class:hasIcon={$$slots.default}
  />
</div>

<style>
  .Input {
    position: relative;
    display: flex;
    background: #271314;
    margin: 2px;
  }

  .Input::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    padding: 4px;
    top: -4px;
    left: -4px;
    background: radial-gradient(
        62.78% 80.04% at 0% -8.51%,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(
        270deg,
        #729aa5 -0.13%,
        #bfc6c5 19.72%,
        #848b8a 45.19%,
        #96a5a9 52.31%,
        #9cadb1 79.56%,
        #a5abad 89.46%,
        #6e8186 99.87%
      );
    background-blend-mode: overlay, normal;
  }

  input {
    border: none;
    font-family: 'MedievalSharp', cursive;
    font-size: 24px;
    background: none;
    color: #fff;
    padding: 20px;
    width: 100%;
  }

  .hasIcon {
    padding-left: 60px;
  }

  label {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
