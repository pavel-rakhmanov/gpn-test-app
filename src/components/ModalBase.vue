<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
          </slot>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/styles/_colors.scss';

  .modal {
    color: $text-color;

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
    &-container {
      margin: auto;
      background-color: $modal-background;
      padding: 44px 47px 40px;
      width: max-content;
    }
    &-header {
      font-size: 32px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
    }
    &-body {
      margin: 27px 0;
    }
  }
</style>