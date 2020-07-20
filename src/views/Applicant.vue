<template>
  <div id="applicant">
    <Navbar/>
    <Title/>
    <Universities/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/applicant/Navbar.vue'
import Title from '../components/applicant/Title.vue'
import Universities from '../components/applicant/Universities.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Applicant',
  components: {
    Navbar,
    Title,
    Universities,
    Footer
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
