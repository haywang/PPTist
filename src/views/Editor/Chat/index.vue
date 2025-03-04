<template>
  <div class="chat-container">
    <NavigationBar/>
    <MainContent/>
    <ContentCard :images="images" title="My Title"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from './NavigationBar.vue'
import MainContent from './MainContent.vue'
import ContentCard from './ContentCard.vue'

const someData = ref('Initial data for ComponentA')
const anotherData = ref('Initial data for ComponentB')

// const handleEvent = (eventData) => {
//   console.log('Event from ComponentA:', eventData)
// }

const handleAnotherEvent = () => {
  console.log('Event from ComponentC')
}

const images = {
  main: 'link1',
  secondary: ['link2', 'link3']
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
