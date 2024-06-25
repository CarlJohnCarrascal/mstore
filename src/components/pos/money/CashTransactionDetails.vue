<template>
    <div class="container text-start">
        <!-- <div class="d-flex justify-content-between">
            <div class="d-flex">
                <a class="btn ms-0 ps-0 pt-0" v-on:click="$router.go(-1)">
                    <i class='bx bx-chevron-left nav_icon fw-bolder fs-2'></i>
                </a>
                <h6 class="pt-1">Cash Transactions Details</h6>
            </div>
        </div> -->
        <div class="row container1 bg-secondary1">
            {{ props.item }}
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ item: Array })

</script>

<style lang="scss" scoped>

</style>