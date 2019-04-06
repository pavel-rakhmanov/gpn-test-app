<template>
  <div 
    class="modal-container"
    :style="modalWidth"
  >

    <div class="modal-header">
      <slot name="header"></slot>
    </div>

    <div class="modal-body">
      <slot name="body"></slot>
    </div>

    <div class="modal-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: '90vw'
    }
  },
  computed: {
    modalWidth() {
      let { width } = this;

      if(typeof width === 'string') {
        const isContainUnits = ['vw', 'px', '%'].some(unut => width.indexOf(unut) > -1);
        if(!isContainUnits) {
          width = `${ width }px`;
        }
      }
      else if (typeof width === 'number') {
        width = `${ width }px`;
      }
      return {
        'width' : width,
        'max-width': width,
      };
    }
  }
}
</script>

<style lang="scss">
  @import '~@/styles/_colors.scss';

  .modal {
    &-container {
      box-sizing: border-box;
      color: $text-color;
      margin: auto;
      background-color: $modal-background;
      padding: 44px 47px 40px;
      width: max-content;
      max-width: 90vw;
    }
    &-header {
      height: 42px;
      font-size: 32px;
    }
    &-body {
      margin: 27px 0;
    }
  }
</style>