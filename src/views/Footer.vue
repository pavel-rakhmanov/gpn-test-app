<template>
  <div class="footer">
    <div class="footer__opti-logo"></div>
    <div class="footer__gpn-logo"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/styles/_colors.scss';

  @mixin logo($asset-url) {
    background-image: url($asset-url);
    background-repeat: no-repeat;
    object-fit: contain;
    height: 39px;
  }

  .footer {
    background-color: $grey;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 93px;

    &__opti-logo {
      @include logo("../assets/Footer/opti-24-logo.svg");
      width: 93px;
    }
    &__gpn-logo {
      @include logo("../assets/Footer/gpn-logo.svg");
      width: 79px;
    }
  }
</style>
