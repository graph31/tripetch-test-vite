<template>
    <div class="row tp-mt-md mt-sm-3">
        <div class="col-md-8 offset-md-4  col-lg-6  offset-lg-6">
            <h1 class="text-left ps-3-sm">
                ATHLETS
            </h1>
        </div>
    </div>
    <div class="position-relative">
        <div class="row containerDesktop">
            <div class="col-sm-12  col-lg-12  ">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
                        <Content title="CONNECTION" number="01">
                            Connect with coaches directly, you can ping coaches to view profile.
                        </Content>
                    </div>
                </div>
            </div>
            <div class="col-sm-12  col-lg-12 tp-bg-secondary">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
                        <Content title="COLLABORATION" number="02">
                            Work with other student athletes to  increase visability. When you share and like other
                            players
                            videos it will increase your visability as a player. This is the team work aspect to
                            Surface 1.
                        </Content>
                    </div>
                </div>
            </div>
            <div class="col-sm-12  col-lg-12 tp-bg-primary">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
                        <Content title="GROWTH" number="03">
                            Resources and tools for you to get better as a student Athelte.
                            Access to training classes, tutor sessions, etc
                        </Content>
                    </div>
                </div>

            </div>

        </div>
        <div class="row containerMobile">
            <CarouselMobile></CarouselMobile>
        </div>
        <div class="section-footballer mx-sm-5 mx-lg-5">
            <img class="d-lg-none line-45" src="../assets/svg/line-45.svg" alt="">
            <span class="icon-plus icon-gray  d-lg-none">
                <font-awesome-icon icon="fa-solid fa-plus" />
            </span>
            <span class="icon-plus d-lg-none">
                <font-awesome-icon icon="fa-solid fa-plus" />
            </span>
            <div class="footballer">
                <img class="footballer" src="../assets/images/football.png" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import Content from './common/Content.vue'
import CarouselMobile from './CarouselMobile.vue'
</script>


