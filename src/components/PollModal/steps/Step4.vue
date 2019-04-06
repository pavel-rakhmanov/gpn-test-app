<template>
  <modal-body :width="914">
    <template slot="header">
      <div class="title">
        Спасибо!
      </div>
    </template>

    <template slot="footer">
      <div class="flex-row justify-center">
        <!-- // TODO: change to the 'finish' in the end! -->
        <a @click="$emit('close')">
          Закрыть
        </a>
      </div>
    </template>
  </modal-body>
</template>

<script>
  import { ModalBody } from '@/components/Modal'

  export default {
    components: {
      ModalBody,
    },
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    margin-bottom: 13px;
    width: 482px;
  }
</style>

