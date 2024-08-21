<script setup>
import { ref, onMounted } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '@/constans'
import { normalizePageHash, generateTimelineItems } from '@/functions'
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

const currentPage = ref(normalizePageHash())
const timelineItems = generateTimelineItems()

onMounted(() => {
    window.addEventListener('hashchange', () => {
        currentPage.value = normalizePageHash()
    })
})

function goTo(page) {
    currentPage.value = page
}
</script>

<template>
    <TheHeader @navigate="goTo($event)" />
    <main class="flex flex-grow flex-col">
        <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
        <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
        <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    </main>
    <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
