<template>
<div id="nav-container" class="nav-container">
            <nav id="navbar">
                <div class="image_logo">
                    <router-link to="/covid"><img id="logo" alt="CEI logo" src="../assets/CEI.png"></router-link>
                    <router-link to="/covid"><img id="logo2" alt="stop logo" src="../assets/stop_covid.png"></router-link>
                    
                </div>

                <ul id="myLinks">
                    <li>
                       <router-link to="/"><b>Home</b></router-link>
                    </li>
                    <li>
                         <router-link to="/applicant">General information</router-link>
                    </li>
                    <li>
                        <router-link to="/description">Description of the activity</router-link>
                    </li>
                    <li>
                        <router-link to="/results">Results</router-link>
                    </li>
                     <li>

                        <a href="https://forms.gle/evnzg29MNrym3oyY8" id="survey" class="survey">
                            Complete the questionnaire
                        </a>

                    </li>
                </ul>

                <a id="hamburger" href="javascript:void(0);" class="icon" v-on:click="myFunction">
                    <i class="fa fa-bars"></i>
                </a>
            </nav>
        </div>
</template>

<script>
export default {
  name: 'Navbar',
    methods: {
    myFunction: function() {
      var navbar = document.getElementById("navbar");
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            navbar.style.display = "block";

            x.style.display = "block";
        }
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


nav-container {
  background-color: white;
}
.survey {
    background: #A80315;
    padding: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    border: none;
    text-align: center;
    text-decoration: none;
    color: white;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
}
#hamburger {
  display: none;
}

#logo {
  width: 143px;
  height: 87px;
}

#logo2 {
  height: 87px;
}

nav {
  margin: auto;
  width: 100%;
  min-height: 10vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

nav li {
  font-size: 18px;
}

nav ul {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  list-style: none;
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

nav .image_logo {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

nav .dropdown {
  float: left;
  overflow: hidden;
}

nav .dropdown .dropbtn {
  font-size: 22px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

nav .dropdown:hover .dropbtn {
  color: white;
  background-color: #BF1A2C;
}

nav .dropdown-content {
  font-size: 18px;
  display: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  background-color: #212539;
  min-width: 160px;
  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

nav .dropdown-content a {
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
}

nav .dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

nav .dropdown:hover .dropdown-content {
  display: block;
}

@media only screen and (max-width: 1200px) {
  .image_logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  #logo {
    width: 60px;
    height: 35px;
  }
  #logo2 {
    height: 35px;
  }
  nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 90%;
  }
  nav .image_logo {
    -webkit-box-flex: 0.2;
    -ms-flex: 0.2;
    flex: 0.2;
  }
  nav li {
    font-size: 16px;
    padding: 20px;
  }
  nav li:active {
    background-color: #212539;
    color: white;
  }
  nav li:active a {
    color: white;
  }
  #myLinks {
    display: none;
  }
  #myLinks {
    display: none;
  }
  #hamburger {
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
  }
  #hamburger.icon {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
  #hamburger:hover {
    background-color: #ddd;
  }
  nav a:hover {
    background-color: #ddd;
    color: black;
  }
}

</style>
