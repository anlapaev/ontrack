<script setup>
import { NAV_ITEMS } from '@/constans'
import { isPageValid } from '@/validators'
import NavItem from '@/components/NavItem.vue'

defineProps({
    currentPage: {
        type: String,
        required: true,
        validator: isPageValid
    }
})

const emit = defineEmits({
    navigate: isPageValid
})
</script>

<template>
    <nav class="sticky bottom-0 z-10 bg-white">
        <ul class="flex items-center justify-around border-t">
            <NavItem
                v-for="(icon, page) in NAV_ITEMS"
                :key="page"
                :href="`#${page}`"
                :class="{ 'pointer-events-none bg-gray-200': currentPage === page }"
                v-on:click="emit('navigate', page)"
            >
                <component :is="icon" class="h-6 w-6" /> {{ page }}
            </NavItem>
        </ul>
    </nav>
</template>
