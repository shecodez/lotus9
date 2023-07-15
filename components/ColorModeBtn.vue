<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue-demi'

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    lotus: 'lotus',
  },
})

const { state, next } = useCycleList(['dark', 'light', 'lotus', 'contrast', 'auto'], { initialValue: mode })

watchEffect(() => mode.value = state.value as any)
</script>

<template>
  <button @click="next()" :title="`color mode: ${state}`" >
    <i v-if="state === 'dark'" i-carbon-moon inline-block align-middle />
    <i v-if="state === 'light'" i-carbon-sun inline-block align-middle />
    <i v-if="state === 'lotus'" i-ph:flower-lotus-light inline-block align-middle />
    <i v-if="state === 'contrast'" i-carbon-contrast inline-block align-middle />
    <i v-if="state === 'auto'" i-carbon-laptop inline-block align-middle />
  </button>
</template>

<style>
html.dark {
    color-scheme: dark
}

html.lotus {
  filter: sepia(0.9) hue-rotate(280deg) brightness(0.9);
}

html.contrast {
  filter: contrast(2);
}
</style>