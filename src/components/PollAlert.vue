<template>
  <div v-if="shouldDisplayPool" class="poll">
    <div class="poll__text">
      Мы хотим стать лучше! Пожалуйста, пройдите опрос и оцените качество сервиса.
      <a @click="openPollModal()">
        Пройти опрос
      </a>
    </div>
    <div @click="closePollAlert()">
      <img 
        src="@/assets/PollAlert/close.svg" 
        class="poll__close-btn"
      />
    </div>
  </div>
</template>

<script>
  const pollKeyInLocalStorage = 'qwerty' 

  export default {
    data: () => ({
      get shouldDisplayPool() {
        return JSON.parse(localStorage.getItem(pollKeyInLocalStorage));
      },
      set shouldDisplayPool(value) {
        localStorage.setItem(pollKey, value);
      },
      isPollModalOpen: false,
    }),
    methods: {
      openPollModal() {
        this.isPollModalOpen = true;
      },
      closePollAlert() {
        this.shouldDisplayPool = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/styles/_colors.scss';

  .poll {
    background-color: $green;
    padding: 6px 93px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: default;

    &__text {
      font-size: 14px;
      color: white;

      a {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    &__close-btn {
      cursor: pointer;
      width: 12px;
      height: 13px;
      object-fit: contain;
    }
  }
</style>
