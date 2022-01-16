<script lang="ts">
  import { Clan, ColorByClan } from './HeroCard'

  export let clan: Clan
</script>

<div id="clan">
  <div id="wrapper">
    <svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_156_98)">
        <path
          d="M2.00006 2.43042C2.00006 1.32585 2.89549 0.43042 4.00006 0.43042H40.0001C41.1046 0.43042 42.0001 1.32585 42.0001 2.43042V26.0267C42.0001 26.6954 41.6659 27.3199 41.1095 27.6908L23.1095 39.6908C22.4377 40.1387 21.5625 40.1387 20.8907 39.6908L2.89066 27.6908C2.33426 27.3199 2.00006 26.6954 2.00006 26.0267V2.43042Z"
          fill={ColorByClan[clan]}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_156_98"
          x="6.10352e-05"
          y="0.43042"
          width="44"
          height="43.5963"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_156_98"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_156_98"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <div id="shine" />
    <img src={clan + '.svg'} alt={clan} />
  </div>
</div>

<style>
  #clan {
    position: absolute;
    top: -2px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #wrapper {
    position: relative;
    width: 44px;
    height: 45px;
  }

  #clan img {
    position: absolute;
    top: 6px;
    left: 8px;
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
    mask: url('./clan.svg');
    mask-image: url('./clan.svg');
    -webkit-mask-image: url('./clan.svg');
    opacity: 0.5;
  }
</style>
