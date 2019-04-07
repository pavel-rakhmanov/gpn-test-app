<template>
  <div v-if="shouldDisplayPool" class="poll flex-row justify-space-between">
    <div class="poll__text">
      Мы хотим стать лучше! Пожалуйста, пройдите опрос и оцените качество сервиса.
      <a @click="openPollModal()">
        Пройти опрос
      </a>
    </div>
    <a @click="closePollAlert()">
      <img 
        src="@/assets/PollAlert/close.svg" 
        class="poll__close-btn"
      />
    </a>
    <poll-modal 
      v-if="isPollModalOpen"
      @close="closePollModal()"
      @finish="closePollAlert()"
    />
  </div>
</template>

<script>
  const pollKeyInLocalStorage = 'qwerty' 

  export default {
    data: () => ({
      get shouldDisplayPool() {
        const localStorageValue = JSON.parse(
          localStorage.getItem(pollKeyInLocalStorage)
        );

        return localStorageValue === null ? true : localStorageValue;
      },
      set shouldDisplayPool(value) {
        localStorage.setItem(pollKeyInLocalStorage, value);
      },
      isPollModalOpen: false,
    }),
    methods: {
      openPollModal() {
        this.isPollModalOpen = true;
      },
      closePollModal() {
        this.isPollModalOpen = false;
      },
      closePollAlert() {
        this.shouldDisplayPool = false;
      }
    },
    components: {
      PollModal: () => import('@/components/PollModal'),
    },
  }
</script>

<style lang="scss" scoped>
  @import '~@/styles/_colors.scss';

  .poll {
    background-color: $green;
    padding: 0 93px;
    height: 30px;
    cursor: default;

    &__text {
      &, & * {
        font-size: 14px;
        color: white;
      }

      a {
        text-decoration: underline;
      }
    }
    &__close-btn {
      width: 12px;
      height: 13px;
      object-fit: contain;
    }
  }
</style>
