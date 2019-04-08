<template>
  <div id="app" class="app">
    <app-header />
    <div class="app__content">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/views/Header'
import AppFooter from '@/views/Footer'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__content {
      flex: 1 0 auto;
    }
  }
</style>
