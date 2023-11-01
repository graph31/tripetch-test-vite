<script setup lang="ts">

defineProps<{ number: string }>()

</script>

<template>
    <div class="group-number">
        <span class="number">
            {{ number }}
        </span>
        <div class="underline"> </div>
    </div>
</template>