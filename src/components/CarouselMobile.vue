<template>
    <div :id="`carousel-content-${props.mode}`" class="col-sm-12 carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" :data-bs-target="`#carousel-content-${props.mode}`" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" class="mx-2" :data-bs-target="`#carousel-content-${props.mode}`" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" :data-bs-target="`#carousel-content-${props.mode}`" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="( item, index ) in  props.content    " class="carousel-item" :class="{ 'active': index === 0 }">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
                        <Content :title="item.title" :number="`0${index + 1}`">
                            {{ item.desc }}
                        </Content>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts" generic="T extends { title: string, desc: string }">

import Content from './common/Content.vue'

const props = defineProps({
    mode: String,
    content: {
        default() {
            return [] as T[];
        },
    },
})
</script>

<style lang="scss" scoped>
.carousel {
    padding: 0px;
}

.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 15;
    width: 60%;
    padding-left: 0;
    margin-left: -30%;
    text-align: center;
    list-style: none;

    button {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 1px;
        text-indent: -999px;
        cursor: pointer;

        background-color: #D8D8D8;
        border: 1px solid #D8D8D8;
        border-radius: 10px;
    }

    .active {
        width: 10px;
        height: 10px;
        margin: 0;
        background-color: #5C3CAF;
    }
}
</style>
