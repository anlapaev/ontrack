<script setup>
import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'
import { isPageValid } from '@/validators'

import { PAGE_TIMELINE, PAGE_PROGRESS } from '@/constans'

const emit = defineEmits({
    navigate: isPageValid
})
</script>

<template>
    <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-4">
        <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />
        <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
    </header>
</template>
