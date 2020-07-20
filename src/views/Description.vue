<template>
  <div id="description">
    <Navbar/>
    <Three_content/>
    <Table/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/description/Navbar.vue'
import Three_content from '../components/description/Three_content.vue'
import Table from '../components/description/Table.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Description',
  components: {
    Navbar,
    Three_content,
    Table,
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
