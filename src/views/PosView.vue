<template>
    <div class="container" >
        
    <div class="text-start">
        <h1>Point of Sale</h1>
        <h5 class="fw-bold mt-3">Services</h5>
    </div>
    <div class="m-2 ms-0 w-100 d-flex justify-content-start flex-wrap">
        <a class="card m-2 service-item user-select-none" role="button" v-on:click="$router.push('/pos/cashinout')">
            <span class="fw-bold text-light">Cash In/Out</span>
        </a>
        <a class="card m-2 service-item user-select-none" role="button">
            <span class="fw-bold text-light">Product</span>
        </a>
        <div class="card m-2 service-item user-select-none" role="button">
            <span class="fw-bold text-light">Printing</span>
        </div>
        <div class="card m-2 service-item user-select-none" role="button">
            <span class="fw-bold text-light">Tshirt Printing</span>
        </div>
        <div class="card m-2 service-item user-select-none" role="button">
            <span class="fw-bold text-light">Debt</span>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.service-item {
    background-color: #222a5744;
    color: rgb(232, 255, 247);
    line-height: 90px;
}

.card {
    min-width: 150px;
    max-width: 150px;
    text-align: center;
    min-height: 100px;
    max-height: 100px;
    background-color:rgba(117, 117, 117, 0.637)
}
.card span {
    stroke: aqua;
    stroke-width: 2px;
    -webkit-text-stroke: dash;
    -webkit-text-stroke-color: rgba(91, 73, 255, 0.521);
    -webkit-text-stroke-width: .5px;
}

</style>