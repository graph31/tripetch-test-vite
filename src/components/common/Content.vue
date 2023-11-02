<template>
    <section id="Footballer" class="px-sm-4">
        <div class="d-flex align-items-center tp-content-bottom ">
            <GroupNumber :number="number" />
            <h3 class="ml-3">
                {{ title }}
            </h3>
        </div>

        <div class="description ">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
import GroupNumber from '../common/GroupNumber.vue'
defineProps<{ title: string; number: string }>()
</script>

<style scoped></style>