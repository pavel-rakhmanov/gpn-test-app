<template>
  <div class="footer flex-row justify-space-between">
    <div class="footer__opti-logo"></div>
    <div class="footer__gpn-logo"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/styles/_colors.scss';
  @import '~@/styles/_mixins.scss';

  .footer {
    background-color: $grey;
    height: 60px;
    padding: 0 93px;

    &__gpn-logo,
    &__opti-logo {
      height: 39px;
    }
    &__opti-logo {
      @include background-image("../assets/Footer/opti-24-logo.svg");
      width: 93px;
    }
    &__gpn-logo {
      @include background-image("../assets/Footer/gpn-logo.svg");
      width: 79px;
    }
  }
</style>
