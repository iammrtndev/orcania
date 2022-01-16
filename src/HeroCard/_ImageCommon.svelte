<script lang="ts">
  export let image: string
</script>

<div id="image" style={`background-image: url(${image})`} />

<style>
  #image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    border-radius: 30px;
  }
</style>
