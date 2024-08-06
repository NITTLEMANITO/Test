<template>
  <dashboard :Test="Test" />
</template>

<script>
import Vue from 'vue'
import Test from '@Test/core'
import { Dashboard } from '@Test/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    Test: () => new Test(),
  },
}
</script>

<style src="@Test/core/dist/style.css"></style>
<style src="@Test/dashboard/dist/style.css"></style>
