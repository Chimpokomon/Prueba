<template>
  <header class="customHeader">
    <img src="./util/UTN_logo.jpg" alt="">
    <h1>Tp Nro-1 Nicolas Morales</h1>
  </header>
  <main class="customMain">
    <div class="links">
      <LinksList v-on:click="handleClick" />
    </div>
    <div class="content">
      <MainContent :priceList="this.priceList" />
    </div>
  </main>
  <footer class="customFooter">
    <h2>TyG 2022</h2>
  </footer>

</template>

<script>
import MainContent from './components/content.vue'
import LinksList from './components/links.vue'

export default {
  name: 'App',
  components: {
    MainContent,
    LinksList
  },
  data: function () {
    return {
      priceList: [],
    }
  },
  methods: {
    handleClick(info) {
      this.priceList = info;
    }
  }
}

</script>

<style>
@import './app.css'
</style>
