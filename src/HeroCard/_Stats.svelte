<script lang="ts">
  export let armor: number
  export let health: number
  export let attack: number[]
  export let magic: number
</script>

<div id="sustain">
  <div id="armor">
    {armor}
  </div>
  <div id="health">
    {health}
  </div>
</div>

<div id="attack">
  {`${attack[0]}/${attack[1]}`}
</div>

<div id="magic">
  {magic}
</div>

<style>
  #sustain,
  #attack,
  #magic {
    position: absolute;
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-shadow: 1px 1px 0 #000;
    background-repeat: no-repeat;
    background-position: center;
  }

  #sustain {
    position: absolute;
    height: 60px;
    top: 10px;
    right: 0;
  }

  #sustain div {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1px 0;
  }

  #armor {
    background-image: url('../assets/armor.svg');
  }

  #health {
    background-image: url('../assets/health.svg');
  }

  #attack {
    background-image: url('../assets/attack.svg');
    width: 48px;
    height: 48px;
    justify-content: center;
    right: 0;
    bottom: 0;
  }

  #magic {
    background-image: url('../assets/magic.svg');
    width: 48px;
    height: 48px;
    justify-content: center;
    left: 0;
    bottom: 0;
  }
</style>
