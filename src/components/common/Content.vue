<template>
    <section class="px-sm-4">
        <div class="d-flex align-items-center tp-content-bottom">
            <GroupNumber :number="props.number" />
            <h3 class="ml-3">
                {{ props.title }}
            </h3>
        </div>

        <div class="description ">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
import GroupNumber from '../common/GroupNumber.vue'

const props = defineProps({
    title: String,
    number: String
})


</script>