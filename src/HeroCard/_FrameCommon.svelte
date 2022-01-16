<script lang="ts">
  import FrameCommonSVG from './frame_common.svg'
  import { Clan, ColorByClan } from './HeroCard'

  export let clan: Clan
</script>

<img src={FrameCommonSVG} alt="" id="shadow" />
<div id="frame" style={`--color: ${ColorByClan[clan]}`} />

<style>
  #shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    border-radius: 30px;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.6));
  }

  #frame {
    height: 100%;
    background: linear-gradient(0deg, var(--color), var(--color)),
      radial-gradient(62.78% 80.04% at 0% -8.51%, #ffffff 0%, #ffffff00 100%),
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
    mask: url('./frame_common.svg');
    mask-image: url('./frame_common.svg');
    -webkit-mask-image: url('./frame_common.svg');
  }
</style>
