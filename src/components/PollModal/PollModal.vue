<template>
  <modal-base>
    <step1 
      v-if="pollStep === 1"
      :label="pollSource.label"
      @setPollData="setPollData"
      @hidePoll="hidePoll"
    />
    <step2 
      v-else-if="pollStep === 2"
      :reasons="pollSource.reasons"
      @setPollData="setPollData"
      @closePoll="closePoll"
    />
    <step3 
      v-else-if="pollStep === 3"
      @setPollData="setPollData"
      @closePoll="closePoll"
    />
    <step4 
      v-else-if="pollStep === 4"
      @hidePoll="hidePoll"
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
        rate: undefined,
        reasons: [],
        message: '',
      },
      pollStep: 1,
    }),
    methods: {
      hidePoll() {
        this.$emit('finish');
      },
      closePoll() {
        this.hidePoll();
        this.sendPoll();
      },
      setPollData(dataObj) {
        Object.keys(dataObj).forEach(key => {
          this.pollData[key] = dataObj[key];
        });

        if(dataObj.rate && dataObj.rate === 10) {
          this.pollStep = 3;
        }
        else {
          this.pollStep += 1;
        }

        if(this.pollStep === 4) {
          this.sendPoll();
        }
      },
      sendPoll() {
        const { rate, reasons, message } = this.pollData;
        const finish = this.pollStep === 4;

        Api.postPoll(finish, rate, reasons, message);
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
