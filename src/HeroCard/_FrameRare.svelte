<script>
  import FrameRareSVG from './frame_rare.svg'
</script>

<img src={FrameRareSVG} alt="" id="shadow" />
<div id="border" />
<div id="frame" />
<div id="shine" />
<div id="glass" />

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

  #border {
    top: -5px;
    left: -5px;
    position: absolute;
    width: 210px;
    height: 310px;
    background-image: url('./frame_rare_border.svg');
    background-size: cover;
    background-position: center;
  }

  #frame {
    height: 100%;
    background: linear-gradient(0deg, #ad800c, #ad800c),
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
    mask: url('./frame_rare.svg');
    mask-image: url('./frame_rare.svg');
    -webkit-mask-image: url('./frame_rare.svg');
  }

  #shine {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
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
    mask: url('./frame_rare.svg');
    mask-image: url('./frame_rare.svg');
    -webkit-mask-image: url('./frame_rare.svg');
  }

  #glass {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: url('./frame_rare_glass.svg');
    background-size: cover;
  }
</style>
