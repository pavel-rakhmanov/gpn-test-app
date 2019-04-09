<template>
  <div class="header flex-row justify-space-between">
    <div class="header__opti-logo"></div>
    <div class="header__gpn-logo"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/styles/_colors.scss';
  @import '~@/styles/_mixins.scss';

  .header {
    background-color: $grey;
    height: 60px;
    padding: 0 93px;

    &__gpn-logo,
    &__opti-logo {
      height: 39px;
    }
    &__opti-logo {
      @include background-image("../assets/Header/opti-24-logo.svg");
      width: 93px;
    }
    &__gpn-logo {
      @include background-image("../assets/Header/gpn-logo.svg");
      width: 79px;
    }
  }
</style>
