<template>
  <modal-base>
    <step1 
      v-if="pollStep === 1"
      :label="pollSource.label"
      @sendPoll="sendPoll()"
      @finish="finish()"
    />
    <step2 
      v-else-if="pollStep === 2"
      :reasons="pollSource.reasons"
      @nextStep="nextStep()"
      @close="close()"
    />
    <step3 
      v-else-if="pollStep === 3"
      @sendPoll="sendPoll()"
      @close="close()"
    />
    <step4 
      v-else-if="pollStep === 4"
      @close="close()"
      @finish="finish()"
    />
  </modal-base>
</template>

<script>
  import Api from '@/api'

  import { ModalBase } from '@/components/Modal'
  import {
    Step1,
    Step2,
    Step3,
    Step4,
  } from '@/components/PollModal/steps'

  export default {
    data: () => ({
      pollSource: {
        label: '',
        reasons: [],
      },
      pollData: {
        finish: false,
        rate: undefined,
        reasons: [],
        message: '',
      },
      pollStep: 1,
    }),
    methods: {
      nextStep() {
        this.pollStep += 1;
      },
      close() {
        this.$emit('close');
        this.sendPoll();
      },
      sendPoll() {
        const { pollData, pollStep } = this;

        if(pollStep === 1) {
          if(pollData.rate === 10) {
            Api.postPoll();
            this.finish();
            return;
          }
          else {
            this.nextStep();
            return;
          }
        }
        else if(pollStep === 3) {
          pollData.finish = true;
        }

        Api.postPoll();
        this.nextStep();
      },
      finish() {
        this.$emit('finish');
      },
    },
    async created() {
      const response = await Api.getPoll();
      const { data: { label, reasons} } = response;

      this.pollSource = {
        label,
        reasons,
      };
    },
    components: {
      ModalBase,
      Step1,
      Step2,
      Step3,
      Step4,
    },
  }
</script>
