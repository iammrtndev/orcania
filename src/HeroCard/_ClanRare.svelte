<div class="ClanRare">
  <slot />
</div>

<style>
  .ClanRare {
    position: absolute;
    top: -2px;
    width: 100%;
    display: flex;
    justify-content: center;
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
