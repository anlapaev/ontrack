<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

// defineProps(['selected', 'options', 'placeholder'])

defineProps({
    selected: {
        type: Number
    },
    options: {
        type: Array,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex gap-2">
        <BaseButton>
            <XMarkIcon class="h-8" />
        </BaseButton>
        <select class="trancate w-full rounded bg-gray-100 px-2 py-1 text-2xl">
            <option selected disabled value="">{{ placeholder }}</option>
            <option
                v-for="{ value, label } in options"
                :key="value"
                :value="value"
                :selected="value === selected"
            >
                {{ label }}
            </option>
        </select>
    </div>
</template>
