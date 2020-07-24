<template>

        <footer>
            <div class="center_footer_text">
                <h1 id="footer_text">COVID-19 Extraordinary Call for Proposals</h1>
            </div>
            <div class="center_social">
                <div class="social">

                   
                    <a href="https://t.me/stopcovid19pro"><img class="ico" src="../assets/telegram.png" alt=""></a>
                    <a href="https://www.facebook.com/Stop-Covid19-100246368451312/"><img class="ico" src="../assets/facebook.png" alt=""></a>


                </div>
            </div>
            <div class="center_image">
                <div class="block">
                    <img id="CEI_logo" src="../assets/CEI.png" alt="">
                    <img id="stop_logo" src="../assets/stop_covid.png" alt="">
                </div>
            </div>
        </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  margin-top: 150px;
  background-color: #A80315;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 0.5fr 3fr 2fr 1fr;
      grid-template-rows: 0.5fr 3fr 2fr 1fr;
}

footer .ico {
  height: 60px;
  margin: 20px;
}

footer .center_footer_text {
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  -ms-grid-column: 2;
  -ms-grid-column-span: 4;
  grid-column: 2/6;
}

footer #footer_text {
  color: white;
  font-size: 20px;
  font-weight: normal;
}

footer .center_social {
  display: -ms-grid;
  display: grid;
  -ms-flex-line-pack: center;
      align-content: center;
  -ms-grid-column: 2;
  -ms-grid-column-span: 4;
  grid-column: 2/6;
  -ms-grid-row: 3;
  -ms-grid-row-span: 1;
  grid-row: 3/4;
}

footer .social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: flex-start;
}

footer .center_image {
  display: -ms-grid;
  display: grid;
  -ms-flex-line-pack: center;
      align-content: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-grid-row: 2;
  -ms-grid-row-span: 2;
  grid-row: 2/4;
  -ms-grid-column: 8;
  -ms-grid-column-span: 4;
  grid-column: 8/12;
}

footer .block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

footer #CEI_logo {
  margin-right: 20px;
  height: 140px;
}

footer #stop_logo {
  margin-left: 20px;
  height: 140px;
}

@media only screen and (max-width: 600px) {
  footer {
    display: block;
    margin-top: 80px;
  }
  footer .ico {
    height: 40px;
  }
  footer .center_image {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  footer footer .social {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  footer #CEI_logo {
    margin-right: 20px;
    height: 40px;
  }
  footer #stop_logo {
    margin-left: 20px;
    height: 40px;
  }
  footer #footer_text {
    text-align: center;
    font-size: 10px;
  }
}

@media only screen and (max-width: 900px) {
  footer {
    display: block;
    margin-top: 80px;
  }
  footer .ico {
    height: 40px;
  }
  footer .social {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  footer .center_image {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  #CEI_logo {
    margin-right: 20px;
    height: 40px;
  }
  #stop_logo {
    margin-left: 20px;
    height: 40px;
  }
  footer #footer_text {
    text-align: center;
    font-size: 10px;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 900px) {
  footer #CEI_logo {
    height: 140px;
  }
}
</style>
