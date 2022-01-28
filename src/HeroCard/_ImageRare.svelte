<script lang="ts">
  export let image: string
</script>

<div id="image" style={`background-image: url(${image})`} />
<div id="overlay" style={`mask-image: url(${image})`} />

<style>
  #image {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    background-size: cover;
    border-radius: 30px;
  }

  #overlay {
    position: absolute;
    z-index: -10;
    top: 0;
    width: 200px;
    height: 300px;
    background: linear-gradient(
        110.86deg,
        #ffffff 0%,
        #000000 23.96%,
        #ffffff 50.06%,
        #000000 75.08%,
        #ffffff 102.24%
      ),
      linear-gradient(
        110.86deg,
        #ffffff 0%,
        #000000 25.56%,
        #ffffff 51.12%,
        #000000 76.68%,
        #ffffff 102.24%
      ),
      radial-gradient(176.92% 100% at 0% 0%, #e3b104 0%, #6c8191 100%);
    background-blend-mode: screen, difference, normal;
    background-size: 200% 200%;
    mix-blend-mode: lighten;
    animation: shine 8s ease-in-out infinite;
    opacity: 0.2;
  }
</style>
