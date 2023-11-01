<template>
    <div id="carouselContent" class="col-sm-12 carousel slide " data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselContent" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" class="mx-2" data-bs-target="#carouselContent" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselContent" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item ">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
                        <Content title="CONNECTION" number="01">
                            Connect with coaches directly, you can ping coaches to view profile.
                        </Content>
                    </div>
                </div>
            </div>
            <div class="carousel-item  active">
                <div class="row tp-bg-secondary">
                    <div class="col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">

                        <Content title="COLLABORATION" number="02">
                            Work with other student athletes to  increase visability. When you share and like
                            other
                            players
                            videos it will increase your visability as a player. This is the team work aspect to
                            Surface 1.
                        </Content>
                    </div>
                </div>
            </div>
            <div class="carousel-item ">
                <div class="row tp-bg-primary">
                    <div class="col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
                        <Content title="GROWTH" number="03">
                            Resources and tools for you to get better as a student Athelte.
                            Access to training classes, tutor sessions, etc
                        </Content>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import Content from './common/Content.vue'
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
        width: 12px;
        height: 12px;
        margin: 0;
        background-color: #5C3CAF;
    }
}
</style>
