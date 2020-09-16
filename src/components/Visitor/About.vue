<template>
  <div class="container">
    <h1>About us</h1>
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <router-link to="/history" tag="li">
          <a class="nav-link" href="#">History</a>
        </router-link>
        <router-link to="/ordering-guide" tag="li">
          <a class="nav-link" href="#">OrderingGuide</a>
        </router-link>
        <router-link to="/contact" tag="li">
          <a class="nav-link" href="#">Contact</a>
        </router-link>
        <router-link to="/delivery" tag="li">
          <a class="nav-link" href="#">Delivery</a>
        </router-link>
      </ul>
    </nav>
    <!-- <transition name="fade"> -->
      <router-view />
    <!-- </transition> -->
  </div>
</template>
