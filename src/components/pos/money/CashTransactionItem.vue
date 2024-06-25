<template>
    <div class="list-item d-none" data-id="9" data-item-sortable-id="0" draggable="true" role="option"
        aria-grabbed="false">
        <div><a href="#" data-abc="true"><span class="w-40 avatar gd-info"><img
                        src="https://img.icons8.com/bubbles/24/000000/user.png" alt="."></span></a></div>
        <div class="flex"> <a href="#" class="item-author text-color" data-abc="true">Sam qpire</a>
            <div class="item-except text-muted text-sm h-1x">advisable for me to think about business content?</div>
        </div>
        <div class="no-wrap">
            <div class="item-date text-muted text-sm d-none d-md-block">12 days ago</div>
        </div>
        <div>
            <div class="item-action dropdown"> <a href="#" data-toggle="dropdown" class="text-muted" data-abc="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-more-vertical">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg> </a>
                <div class="dropdown-menu dropdown-menu-right bg-black" role="menu"> <a class="dropdown-item" href="#"
                        data-abc="true">See detail </a><a class="dropdown-item download" data-abc="true">Download </a><a
                        class="dropdown-item edit" data-abc="true">Edit</a>
                    <div class="dropdown-divider"></div> <a class="dropdown-item trash" data-abc="true">Delete item</a>
                </div>
            </div>
        </div>
    </div>
    <div class="item row m-1 mb-2 d-nones">
        <div class="col" style="max-width: 40px;">
            <i v-if="props.item.type == 'in'" class='bx bx-down-arrow-alt text-success nav_icon fw-bolder fs-2'></i>
            <i v-if="props.item.type == 'out'" class='bx bx-up-arrow-alt text-danger nav_icon fw-bolder fs-2'></i>
        </div>
        <div class="col">
            <div>
                <span v-if="props.item.type == 'in'">{{ 'Recieve money with ref. ' + props.item.ref + ' from ' +
                    props.item.recipient + ' ' + props.item.recipientName }}</span>
                <span v-if="props.item.type == 'out'">{{ 'Sent money to ' + props.item.recipient + ', ' +
                    props.item.recipientName }}</span>
            </div>
            <div>
                <span class=fw-bold>{{ props.item.amount.toFixed(2) }}</span>
                <span v-if="props.item.type == 'out'"> Proccesing</span>
                <span v-if="props.item.type == 'in' && props.item.status == 'claimed'"> claimed by {{
                    props.item.claimant }}</span>
            </div>
        </div>
        <div class="col bg-danger1 text-end" style="max-width: 80px;">
            <button v-on:click="reload(props.item)" class="btn border-secondary" data-bs-toggle="modal" data-bs-target="#CashTransactionModal">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-more-vertical">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg> -->
                view
            </button>
        </div>
        <div class="modal fade ps-0" id="CashTransactionModal" style="width: 100%;">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="d-flex">
                            <a class="btn ms-0 ps-0 pt-0" data-bs-dismiss="modal">
                                <i class='bx bx-chevron-left nav_icon fw-bolder fs-2'></i>
                            </a>
                            <h6 class="pt-1">Transactions Details</h6>
                        </div>
                    </div>
                    <div class="modal-body">
                        <CashTransactionDetails :item="cash" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CashTransactionDetails from './CashTransactionDetails.vue'

import { defineProps, ref } from 'vue';
const props = defineProps({ item: Array })
const cash = ref([])

function reload(c) {
    cash.value = c
}

</script>

<style scoped>
.list-item {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
}

.item {
    border-bottom: solid 1px rgba(48, 48, 48, 0.144);
}
</style>