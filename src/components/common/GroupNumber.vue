<script setup lang="ts">

defineProps<{ number: string }>()

</script>

<template>
    <div class="group-number">
        <span class="number">
            {{ number }}
        </span>
        <div class="mx-sm-auto underline"> </div>
    </div>
</template>