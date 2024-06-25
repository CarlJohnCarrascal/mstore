<template>
    <div>
        <form>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea v-model="transaction.Msg" class="form-control" placeholder="Transaction message..." rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Account</label>
                <select v-model="transaction.Account" class="form-control">
                    <option value="1">#1</option>
                    <option value="2">#2</option>
                    <option value="3">#3</option>
                    <option value="4">#4</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect2">Type</label>
                <select v-model="transaction.Type" class="form-control">
                    <option value="0">Cash In</option>
                    <option value="1">Cash Out</option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Account No.</label>
                <input v-model="transaction.AccountNumber" type="number" class="form-control"  placeholder="eg. 09123456789">
            </div>
            <div class="form-group">
                <label for="">Account Name</label>
                <input v-model="transaction.AccountName" type="text" class="form-control"  placeholder="eg. John Doe">
            </div>
            <div class="form-group">
                <label for="">Amount</label>
                <input v-model="transaction.Amount" type="number" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Fee</label>
                <input v-model="transaction.Fee" type="number" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Date Recieve/Sent</label>
                <input v-model="transaction.DateRecievedSent" type="datetime-local" class="form-control">
            </div>

            <!-- <div class="form-group">
                <label for="">Customer Name</label>
                <input  type="text" class="form-control" list="customerlist">
                <datalist id="customerlist">
                    <option value="Boston">
                    <option value="Cambridge">
                </datalist>
            </div> -->
            
            <div class="form-group mt-2">
                <label for="">Customer Name</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Customer name" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" data-bs-toggle="modal" data-bs-target="#SelectCustomerModal">
                            <i class='bx bx-user nav_icon fw-bolder fs-2 pt-1'></i>
                        </button>
                    </div>
                </div>
            </div>

        </form>

        <div class="modal fade ps-0" id="SelectCustomerModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header p-1">
                        <div class="d-flex ">
                            <a class="btn ms-0 ps-0 pt-1  pb-0" data-bs-dismiss="modal">
                                <i class='bx bx-chevron-left nav_icon fw-bolder fs-2'></i>
                            </a>
                            <h6 class="pt-2">Select Customer</h6>
                        </div>
                    </div>
                    <div class="modal-body">
                        Select Customer
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

let today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

onMounted(() => {
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
})

const transaction = ref({
    Msg: "",
    Account: 1,
    Type: 0,
    AccountName: "",
    AccountNumber: "",
    Amount: 0,
    Fee: 0,
    DateRecievedSent: today.toISOString().slice(0, -1),
    DateCreated: Date.now()
})

</script>

<style lang="scss" scoped></style>