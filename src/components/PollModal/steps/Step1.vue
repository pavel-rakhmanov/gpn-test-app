<template>
  <modal-body :width="914">
    <template slot="header">
      <div class="title">
        Нам важно Ваше мнение!
      </div>
    </template>

    <template slot="body">
      <b>{{ label }}</b>

      <rate-component
        v-model="rate"
      />
    </template>

    <template slot="footer">
      <div class="flex-row justify-space-between">
        <button @click="estimate()">
          Отправить
        </button>
        <a @click="hidePoll()">
          Больше не спрашивать
        </a>
      </div>
    </template>
  </modal-body>
</template>

<script>
  import { ModalBody } from '@/components/Modal'
  import RateComponent from '@/components/RateComponent'

  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      rate: 10,
    }),
    methods: {
      estimate() {
        const data = {
          rate: parseInt(this.rate),
        };
        
        this.$emit('setPollData', data);
      },
      hidePoll() {
        this.$emit('hidePoll');
      },
    },
    components: {
      ModalBody,
      RateComponent,
    },
  }
</script>
