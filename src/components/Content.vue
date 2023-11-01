<script setup lang="ts">
import GroupNumber from './common/GroupNumber.vue'
</script>
<template>
    <div class="row">
        <div class="col-lg-6  offset-md-6">
            <h1 class="text-left">
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
            <!-- <div class="Text1" style="width: 717px; height: 101px; position: relative">
                <div class="ConnectWithCoaches"
                    style="width: 717px; left: 0px; top: 73px; position: absolute; color: black; font-size: 20px; font-family: Roboto; font-weight: 400; line-height: 28px; word-wrap: break-word">
                    Connect with coaches directly, you can ping coaches to view profile.</div>
                <div class="Connection"
                    style="left: 32px; top: 0px; position: absolute; color: #C2C2C2; font-size: 36px; font-family: Roboto; font-weight: 400; letter-spacing: 1.50px; word-wrap: break-word">
                    CONNECTION</div>
                <div class="Underline"
                    style="width: 19px; height: 5px; left: 1px; top: 30px; position: absolute; background: #603EBE; border-radius: 2.50px">
                </div>
                <div style="left: 0px; top: 5px; position: absolute"><span
                        style="color: black; font-size: 18px; font-family: Roboto; font-weight: 400; letter-spacing: 1.50px; word-wrap: break-word">0</span><span
                        style="color: black; font-size: 18px; font-family: Roboto; font-weight: 400; word-wrap: break-word">1</span>
                </div>
            </div> -->
        </div>

    </div>
</template>

<style lang="scss" scoped>
.ml-3 {
    margin-left: 0.625rem;
}

.m--bottom {
    margin-bottom: 56px !important;
}

.m--top {
    margin-top: 31px !important;
}
</style>
