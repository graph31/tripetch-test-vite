<template>
    <div>
        <div class="row player-top">
            <div class="col-md-12 col-lg-12">
                <h1 class="text-left ps-3-sm">
                    PLAYERS
                </h1>
            </div>
        </div>
        <div class="position-relative">
            <div class="row containerDesktop">
                <div v-for="(items, index) in  content " class="col-sm-12 col-md-12 col-lg-12"
                    :class="{ 'tp-bg-secondary': index === 1, 'tp-bg-primary': index === 2 }">

                    <div class="row">
                        <div class="col-sm-12 col-md-8 col-lg-12">
                            <Content :title="items.title" :number="`0${index + 1}`">
                                {{ items.desc }}
                            </Content>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row containerMobile">
                <CarouselMobile mode="basketball" :content="content"></CarouselMobile>
            </div>
            <div class="section-basketball">
                <img class="line-45" src="../assets/svg/line-45.svg" alt="">
                <img class="line-45 d-md-none" src="../assets/svg/line-45-2.svg" alt="">

                <span class="icon-plus icon-gray  ">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </span>
                <span class="icon-plus ">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </span>
                <span class="icon-plus icon-gray  d-md-none">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </span>
                <img class="basketball" src="../assets/images/basketball.png" />

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Content from './common/Content.vue'
import CarouselMobile from './CarouselMobile.vue'


const content = ref([{
    title: 'CONNECTION',
    desc: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'
},
{
    title: 'COLLABORATION',
    desc: 'Work with recruiter to increase your chances of findingtalented athlete.'
},
{
    title: 'GROWTH',
    desc: 'Save your time, recruit proper athlets for your team.'
}])

</script>


