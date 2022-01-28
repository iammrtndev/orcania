<script lang="ts">
</script>

<button class="Button">
  <slot />
</button>

<style>
  button {
    border: none;
    position: relative;
    font-family: "MedievalSharp", cursive;
    font-size: 24px;
    background: #271314;
    color: #fff;
    padding: 20px 40px;
    margin: 2px;
  }

  button::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    padding: 4px;
    top: -4px;
    left: -4px;
    background: linear-gradient(0deg, #ad800c, #ad800c),
      radial-gradient(
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
    background-blend-mode: color, overlay, normal;
  }

  button:hover {
    cursor: pointer;
  }

  button:hover::after {
    box-shadow: 0 0 8px #ad800c;
  }

  button:active::after {
    filter: brightness(1.2);
  }
</style>
