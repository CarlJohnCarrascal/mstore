<template>
  <body id="body-pd" class="p-0">
    <header class="header" id="header">
      <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
      <!-- <div class="header_img"> 
        <img src="https://i.imgur.com/hczKIze.jpg" alt="">
      </div> -->
      <div class="header_img">
        <a class="btn btn-link" v-on:click="$router.push('/messages')">
              <i class='bx bx-message-square-detail nav_icon'></i></a>
      </div>
    </header>
    <div class="l-navbar" id="nav-bar">
      <nav class="nav">
        <div>
          <a href="#" class="nav_logo">
            <i class='bx bx-layer nav_logo-icon'></i>
            <span class="nav_logo-name">CajStore</span>
          </a>
          <div class="nav_list">
            <a href="#" v-on:click="$router.push('/')" class="nav_link active">
              <i class='bx bx-grid-alt nav_icon'></i>
              <span class="nav_name">Dashboard</span>
            </a>
            <a href="#" v-on:click="$router.push('/pos')" class="nav_link">
              <i class='bx bx-store nav_icon'></i>
              <span class="nav_name">POS</span>
            </a>
            <a href="#" v-on:click="$router.push('/transaction')" class="nav_link">
              <i class='bx bx-transfer nav_icon'></i>
              <span class="nav_name">Transactions</span>
            </a>
            <a href="#" v-on:click="$router.push('/debt')" class="nav_link">
              <i class='bx bx-money nav_icon'></i>
              <span class="nav_name">Debt Transactions</span>
            </a>
            <a href="#" v-on:click="$router.push('/manageproduct')" class="nav_link">
              <i class='bx bx-store-alt nav_icon'></i>
              <span class="nav_name">Manage Products</span>
            </a>
            <a href="#" v-on:click="$router.push('/customer')" class="nav_link">
              <i class='bx bx-group nav_icon'></i>
              <span class="nav_name">Customers</span>
            </a>
            <a href="#" class="nav_link">
              <i class='bx bx-user nav_icon'></i>
              <span class="nav_name">Users</span>
            </a>
            <!-- <a href="#" class="nav_link">
              <i class='bx bx-message-square-detail nav_icon'></i>
              <span class="nav_name">Messages</span> </a> -->
            <!-- <a href="#" class="nav_link">
              <i class='bx bx-bookmark nav_icon'></i>
              <span class="nav_name">Bookmark</span>
            </a>
            <a href="#" class="nav_link">
              <i class='bx bx-folder nav_icon'></i>
              <span class="nav_name">Files</span>
            </a>
            <a href="#" class="nav_link">
              <i class='bx bx-bar-chart-alt-2 nav_icon'></i>
              <span class="nav_name">Stats</span> </a> -->
          </div>
        </div>
        <a href="#" class="nav_link">
          <i class='bx bx-log-out nav_icon'></i>
          <span class="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
    <!--Container Main start-->
    <div class="height-100 bg-light">
      <router-view></router-view>
    </div>
    <!--Container Main end-->


  </body>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
