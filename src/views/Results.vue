<template>
  <div id="results">
    <Navbar/>
    <Results_Info/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/results/Navbar.vue'
import Results_Info from '../components/results/Results_Info.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Results',
  components: {
    Navbar,
    Results_Info,
    Footer,
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    
    font-family: 'Montserrat',
    sans-serif;
}
a {
        text-decoration: none;
        color: black;
    }

</style>
