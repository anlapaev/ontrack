<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { validateSelectOptions, isUndefinedOrNull, isNumberOrNull } from '../validators'

// defineProps(['selected', 'options', 'placeholder'])

const props = defineProps({
    selected: {
        type: Number
    },
    options: {
        type: Array,
        required: true,
        validator: validateSelectOptions
    },
    placeholder: {
        type: String,
        required: true
    }
})

const emit = defineEmits({
    select: isNumberOrNull
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>

<template>
    <div class="flex gap-2">
        <BaseButton @click="$emit('select', null)">
            <XMarkIcon class="h-8" />
        </BaseButton>
        <select
            class="trancate w-full rounded bg-gray-100 px-2 py-1 font-mono text-2xl"
            @change="$emit('select', +$event.target.value)"
        >
            <option :selected="isNotSelected" disabled value="">
                {{ placeholder }}
            </option>
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
