<script lang="ts">
  export let name: string
  export let description: string
  export let showDescription = true
</script>

<div class="Info">
  <div id="name">{name}</div>
  <div id="description" class:show={showDescription}>{description}</div>
</div>

<style>
  .Info {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    color: #fff;
    align-items: flex-end;
  }

  #name {
    width: 100%;
    font-size: 12px;
    margin-bottom: 0.5em;
    text-align: center;
    padding: 10px 0;
    background: linear-gradient(
      0deg,
      #000000 0%,
      rgba(0, 0, 0, 0.4) 75%,
      rgba(0, 0, 0, 0) 96%
    );
  }

  #description {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    display: none;
  }
</style>
