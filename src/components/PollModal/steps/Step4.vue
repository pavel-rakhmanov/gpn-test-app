<template>
  <modal-body :width="601">
    <template slot="header">
      <div class="title">
        Спасибо!
      </div>
    </template>

    <template slot="footer">
      <div class="flex-row justify-center">
        <a @click="hidePoll">
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
    methods: {
      hidePoll() {
        this.$emit('hidePoll');
      },
    },
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    margin-bottom: 13px;
  }
</style>

