<template>
  <modal-body :width="914">
    <template slot="header">
      <div class="title">
        Нам важно Ваше мнение!
      </div>
    </template>

    <template slot="body">
      <b>{{ label }}</b>
    </template>

    <template slot="footer">
      <div class="flex-row justify-space-between">
        <button @click="$emit('sendPoll')">
          Отправить
        </button>
        <a @click="$emit('finish')">
          Больше не спрашивать
        </a>
      </div>
    </template>
  </modal-body>
</template>

<script>
  import { ModalBody } from '@/components/Modal'

  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
    },
    components: {
      ModalBody,
    },
  }
</script>

<style lang="scss" scoped>
  .title {
    width: 819px;
  }
</style>
