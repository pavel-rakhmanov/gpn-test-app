<template>
  <modal-body :width="914">
    <template slot="header">
      Багодарим за оценку!
    </template>

    <template slot="body">

    </template>

    <template slot="footer">
      <div class="flex-row justify-space-between">
        <button @click="$emit('sendPoll')">
          Отправить
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
    components: {
      ModalBody,
    },
  }
</script>
