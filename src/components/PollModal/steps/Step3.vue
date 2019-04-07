<template>
  <modal-body :width="914">
    <template slot="header">
      Багодарим за оценку!
    </template>

    <template slot="body">
      <p>
        Мы будем признательны, если Вы оставите отзыв или предложение по
        улучшению работы «Газпромнефть-Корпоративные продажи».
      </p>

      <textarea
        class="normal-text"
        placeholder="Ваш ответ…"
        autofocus
        v-model="message"
      ></textarea>

    </template>

    <template slot="footer">
      <div class="flex-row justify-space-between">
        <button @click="estimate">
          Отправить
        </button>
        <a @click="closePoll">
          Закрыть
        </a>
      </div>
    </template>
  </modal-body>
</template>

<script>
  import { ModalBody } from '@/components/Modal'

  export default {
    data: () => ({
      message: '',
    }),
    methods: {
      estimate() {
        const data = {
          message: this.message,
        };
        
        this.$emit('setPollData', data);
      },
      closePoll() {
        this.$emit('closePoll');
      },
    },
    components: {
      ModalBody,
    },
  }
</script>

<style lang="scss" scoped>
  @import '~@/styles/_colors.scss';

  p {
    margin-bottom: 25px;
  }

  textarea {
    width: 819px;
    height: 139px;
    color: $grey-text;
    font-style: italic;
    border-radius: 3px;
    border: solid 1px #dddddd;
    padding: 14px 18px;
    background-color: $modal-background;
    box-sizing: border-box;
    resize: none;
  }
</style>
