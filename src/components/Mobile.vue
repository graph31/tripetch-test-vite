<template>
    <div>
        <div class="GraphicMobile" style="width: 218px; height: 281px; position: relative">
            <img style="width: 178.89px; height: 197.23px; left: 16.36px; top: 12.91px; position: absolute; "
                src="../assets/svg/line-45.svg" alt="">

            <div class="Footballer"
                style="width: 200px; height: 281px; left: 18px; top: 0px; position: absolute; flex-direction: column; justify-content: center; align-items: center; display: inline-flex">
                <img class="Footballer" style="width: 200px; height: 281px" src="../assets/images/football.png" />
            </div>

            <span class="icon-plus" style="left: 0px; top: 11px; position: absolute; opacity: 0.30;">
                <font-awesome-icon icon="fa-solid fa-plus" />
            </span>
            <!-- <img class="Rectangle34"
                style="width: 15px; height: 15px; left: 0px; top: 11px; position: absolute; opacity: 0.30;"
                src="../assets/svg/plus-500.svg" /> -->
            <img class="Rectangle34Copy" style="width: 15px; height: 15px; left: 22px; top: 20px; position: absolute;"
                src="../assets/svg/plus.svg" />
        </div>
        <div class="row">
            <div class="col-lg-6  offset-md-6">
                <h1 class="text-left ps-3-sm">
                    ATHLETS
                </h1>
                <div class="mt-5 d-flex align-items-center">
                    <GroupNumber number="01" />
                    <h3 class="ml-3">
                        CONNECTION
                    </h3>
                </div>
                <div class="description m--bottom m--top">
                    Connect with coaches directly, you can ping coaches to view profile.
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import GroupNumber from './common/GroupNumber.vue'

</script>

<style scoped></style>