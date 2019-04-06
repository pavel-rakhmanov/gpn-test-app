<template>
  <modal-body :width="914">
    <template slot="header">
      Почему Вы не поставили оценку 10?
    </template>

    <template slot="body">

    </template>

    <template slot="footer">
      <div class="flex-row justify-space-between">
        <button @click="$emit('nextStep')">
          Сл. шаг
        </button>
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
    props: {
      reasons: {
        type: Array,
        required: true,
        valdator: reasons => reasons.length > 0,
      },
    },
    components: {
      ModalBody,
    },
  }
</script>
