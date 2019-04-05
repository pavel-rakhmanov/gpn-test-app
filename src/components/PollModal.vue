<template>
  <modal-base>
    <div slot="footer">
      <button @click="$emit('close')">
        Закрыть
      </button>
    </div>
  </modal-base>
</template>

<script>
  import ModalBase from '@/components/ModalBase'

  export default {
    components: {
      ModalBase,
    }
  }
</script>
