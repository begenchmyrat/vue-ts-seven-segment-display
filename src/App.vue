<template>
  <SevenSegmentDisplay :value="input" start-from-end auto-grow />
  <input v-model="input">
</template>
<script setup lang="ts">
import { ref } from 'vue'

import SevenSegmentDisplay from './components/SevenSegmentDisplay.vue'

const input = ref("")
</script>
