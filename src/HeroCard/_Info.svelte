<script lang="ts">
  export let name: string
  export let description: string
  export let showDescription: boolean

  let descriptionFormated = ''
  $: descriptionFormated = description
    .replace(/\n/g, '<br>')
    .replace(/(_(.*?)_)/g, '<span class="underline">$2</span>')
    .replace(/(-(.*?)-)/g, '<div class="center">$2</div>')
    .replace(/(\+|-)?(\d* )?magie/g, '<span class="blue">$1$2 magie</span>')
</script>

<div class="Info" class:show={showDescription}>
  <div id="name">{name}</div>
  <div id="description">
    {@html descriptionFormated}
  </div>
</div>

<style>
  .Info {
    position: absolute;
    z-index: -1;
    top: -8px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: flex-end;
    font-size: 12px;
  }

  #name {
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.4) 75%,
      rgba(0, 0, 0, 0) 96%
    );
  }

  :global(.show #name) {
    padding-bottom: 4px;
  }

  #description {
    position: relative;
    line-height: 1.5;
    padding: 0;
    height: 0px;
    font-size: 0px;
    background: rgba(0, 0, 0, 0.9);
    transition: padding 0.3s ease, height 0.3s ease, font-size 0.1s ease;
  }

  :global(.show #description) {
    font-size: 12px;
    padding: 0 0 68px 16px;
    height: auto;
    display: block;
  }

  :global(.underline) {
    text-decoration: underline;
  }

  :global(.center) {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
  }

  :global(.blue) {
    color: #34a2fe;
  }
</style>
