<template>
    <div>
        <div class="row player-top">
            <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-2">
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
                        <div class="col-sm-12 col-md-8 col-lg-5 offset-lg-2">
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
                <div class="line-45">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 309" fill="none">
                        <path d="M3.13281 306.957L265.648 2.83984" stroke="#936EEA" stroke-width="6" />
                    </svg>
                </div>


                <div class="line-45 d-md-none d-lg-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271 316" fill="none">
                        <path d="M2.89062 313.16L268.516 2" stroke="#936EEA" stroke-width="6" />
                    </svg>
                </div>

                <span class="icon-plus icon-gray  ">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </span>
                <span class="icon-plus ">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </span>
                <span class="icon-plus icon-gray  d-md-none d-lg-block">
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


