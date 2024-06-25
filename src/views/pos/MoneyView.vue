<template>
    <div class="container text-start">
        <div class="d-flex justify-content-between">
            <div class="d-flex">
                <a class="btn ms-0 ps-0 pt-0" v-on:click="$router.go(-1)">
                    <i class='bx bx-chevron-left nav_icon fw-bolder fs-2'></i>
                </a>
                <h6 class="pt-1">Cash Transactions</h6>
            </div>
            <div>
                <a class="btn btn-sm p-0 me-1">
                    <i class='bx bx-filter nav_icon fw-bolder fs-2 pt-1'></i>
                </a>
                <a class="btn btn-sm p-0" data-bs-toggle="modal" data-bs-target="#AddCashTransactionModal">
                    <i class='bx bx-plus nav_icon fw-bolder fs-2 pt-1'></i>
                </a>
            </div>
        </div>
        <div class="row container1 bg-secondary1">
            <div v-for="item in items" :key="item">
                <CashTransactionItem :item="item" />
            </div>
        </div>
        
        <div class="modal fade ps-0" id="AddCashTransactionModal" style="width: 100%;">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header p-1">
                        <div class="d-flex ">
                            <a class="btn ms-0 ps-0 pt-1  pb-0" data-bs-dismiss="modal">
                                <i class='bx bx-chevron-left nav_icon fw-bolder fs-2'></i>
                            </a>
                            <h6 class="pt-2">Add Transaction</h6>
                        </div>
                    </div>
                    <div class="modal-body">
                        <AddCashTransaction />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CashTransactionItem from '../../components/pos/money/CashTransactionItem.vue'
import AddCashTransaction from '../../components/pos/money/AddCashTransaction.vue'

const items = [
    {
        id: 1000,
        type: 'in',
        ref: '12309331209',
        recipient: '09348123128',
        recipientName: 'C***l J.',
        amount: 1200.00,
        fee: 30.00,
        status: 'Available',
        claimant: ''
    },
    {
        id: 1001,
        type: 'out',
        ref: '',
        recipient: '09123445678',
        recipientName: 'John Doe',
        amount: 5200.00,
        fee: 100.00,
        status: 'Processing',
        sender: 'Mary Doe'
    },
    {
        id: 1002,
        type: 'in',
        ref: '3244123123',
        recipient: '0912347123109',
        recipientName: 'D***a F**e J.',
        amount: 200.00,
        fee: 10.00,
        status: 'claimed',
        claimant: 'Mary DOe'
    }
]
</script>

<style scoped></style>