<template>
<div class="nav-container">
            <nav>
                <div class="image_logo">

                    <img id="logo" alt="CEI logo" src="../assets/CEI.png">
                    
                </div>
                <ul>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn">
                            General information ▼
                        </button>
                            <div class="dropdown-content">
                                <a href="#">link1</a>
                                <a href="#">link2</a>
                                <a href="#">link3</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn">
                                Description of the activity ▼
                        </button>
                            <div class="dropdown-content">
                                <a href="#">link1</a>
                                <a href="#">link2</a>
                                <a href="#">link3</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Results</a></li>
                </ul>
            </nav>
        </div>

</template>

<script>
export default {
  name: 'Navbar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  background-color: white;
}

#logo {
  width: 143px;
  height: 87px;
}

nav {
  margin: auto;
  width: 80%;
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
  font-size: 16px;
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

@media only screen and (max-width: 600px) {
  #logo {
    width: 50px;
    height: auto;
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
    font-size: 12px;
  }
  nav .dropdown .dropbtn {
    font-size: 12px;
    padding: 8px 7px;
  }
}
</style>
