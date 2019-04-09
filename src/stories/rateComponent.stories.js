/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import RateComponent from '@/components/RateComponent.vue'

const stories = storiesOf('RateComponent', module)
stories.addDecorator(withKnobs)

stories.add('default', () => ({
  components: { RateComponent },
  template: '<rate-component :value="5" @input="action" />',
  methods: {
    action: action('input')
  }
}))

stories.add('without value', () => ({
  components: { RateComponent },
  template: '<rate-component @input="action"/>',
  methods: {
    action: action('input')
  }
}))

stories.add('with custom range', () => ({
  components: { RateComponent },
  template: '<rate-component :value="5" @input="action" :from="0" to="5" />',
  methods: {
    action: action('input')
  }
}))
