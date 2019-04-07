<template>
  <modal-body :width="914">
    <template slot="header">
      Почему Вы не поставили оценку 10?
    </template>

    <template slot="body">
      <p>Выберите не более 3-х ключевых причин.</p>

      <ul>
        <li 
          v-for="reason in reasons"
          :key="reason.id"
        >
          <input
            type="checkbox"
            :id="reason.id"
            :checked="selectedReasons.includes(reason.id)"
            @input="selectReason(reason.id)"
          >
          <label :for="reason.id">
            {{ reason.label }}
          </label>
        </li>
      </ul>
    </template>

    <template slot="footer">
      <div class="flex-row justify-space-between">
        <button @click="estimate">
          Оценить
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

  const maxReasonsCount = 3;

  export default {
    props: {
      reasons: {
        type: Array,
        required: true,
        valdator: reasons => reasons.length > 0,
      },
    },
    data: () => ({
      selectedReasons: [],
    }),
    methods: {
      selectReason(id) {
        const reasonIndex = this.selectedReasons.indexOf(id);

        if(reasonIndex > -1) {
          this.selectedReasons.splice(reasonIndex, 1);
          return
        }
        else if(this.selectedReasons.length >= maxReasonsCount - 1) {
          this.selectedReasons = this.selectedReasons.slice(0, maxReasonsCount - 1);
        }

        this.selectedReasons.push(id);
      },
      estimate() {
        const data = {
          reasons: this.selectedReasons,
        };
        
        this.$emit('setPollData', data);
      },
      closePoll() {
        this.$emit('closePoll');
      }
    },
    components: {
      ModalBody,
    },
  }
</script>

<style lang="scss" scoped>
  p {
    margin-bottom: 27px;
  }

 ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 48px;
 }
</style>
