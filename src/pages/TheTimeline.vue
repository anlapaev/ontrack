<script setup>
import { generateTimelineItems } from '@/functions'
import TimelineItem from '@/components/TimelineItem.vue'
const timelineItems = generateTimelineItems()
</script>

<template>
    <div class="mt-7">
        <ul>
            <TimelineItem
                v-for="timelineItem in timelineItems"
                :key="timelineItem.hour"
                :timeline-Item="timelineItem"
            />
        </ul>
    </div>
</template>
