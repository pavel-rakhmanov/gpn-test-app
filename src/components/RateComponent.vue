<template>
  <div>
    <p class="description">
      Для оценки используйте 10-балльную шкалу, где 10 – точно готовы рекомендовать, 1 – точно не готовы рекомендовать.
    </p>
    <div class="flex-row rate-line">
      <img
        class="dislike-fase"
        src="@/assets/Rate/dislike.png"
      />

      <div class="rate-wrapper flex-row justify-space-between">
        <template v-for="n in length">
          <div class="flex-column" :key="n">
            <b class="rate-button-value">
              {{ n }}
            </b>

            <button
              class="rate-button"
              :class="{
                'rate-button--selected': n <= rate,
              }"
              @click="setValue(n)"
            ></button>
          </div>
        </template>
      </div>

      <img
        class="like-fase"
        src="@/assets/Rate/like.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      rate: this.value
    }
  },
  computed: {
    length () {
      return this.to - this.from
    }
  },
  methods: {
    setValue (newValue) {
      this.rate = newValue
      this.$emit('input', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/_colors.scss';

  .rate {
    $button-size: 15px;
    $line-width: 3px;

    &-line {
      margin-bottom: 66px;
    }
    &-button {
      height: $button-size;
      width: $button-size;
      border-radius: 50%;
      padding: 0;
      border: solid $line-width $light-grey;
      background-color: white;
      position: relative;

      &-value {
        color: $text-color;
        margin-bottom: 7px;
      }

      &--selected {
        border-color: $blue;
        background-color: $blue;

        &::before {
          width: 200px;
          content: '';
          position: absolute;
          height: $line-width;
          transform: translate(-100%, -50%);
          background-color: $blue;
        }
      }
    }
    &-wrapper {
      width: 100%;
      position: relative;
      overflow: hidden;
      margin-top: -25px;

      &::before {
        content: '';
        position: absolute;
        height: $line-width;
        left: 1;
        width: calc(100% - 2px);
        top: 75%;
        background-color: $light-grey;
      }
    }
  }

  .description {
    margin: 10px 0 36px;
    color: $text-color;
  }

  .dislike-fase {
    width: 40px;
    height: 39px;
    object-fit: contain;
    margin-right: 35px;
  }

  .like-fase {
    width: 40px;
    height: 39px;
    object-fit: contain;
    margin-left: 35px;
  }
</style>
