<template>
  <div class="modal modal-mask">
    <div class="modal-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .modal {
    &-mask {
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: table;
      transition: opacity .3s ease;
    }
    &-wrapper {
      display: table-cell;
      vertical-align: middle;
    }
  }
</style>