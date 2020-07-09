<template>
  <div id="app">
    <Navbar/>
    <Main_image/>
    <Info/>
    <Cards/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Main_image from './components/Main_image.vue'
import Info from './components/Info.vue'
import Cards from './components/Cards.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Main_image,
    Info,
    Cards,
    Footer
  }
}
</script>

<style>
#app {

}
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
