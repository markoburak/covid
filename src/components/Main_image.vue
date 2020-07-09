<template>
        <section class="first">
            <div class="main_image">
                <h1 id="main_text">COVID-19 Extraordinary Call for Proposals</h1>
                <section class="center_text">
                    <h3 id="side_text">Project title: Stop COVID`19</h3>
                </section>
                <section class="side_image">
                    <img id="logo_main" src="../assets/stop_covid.png" alt="">
                </section>
            </div>
        </section>
</template>

<script>

export default {
  name: 'Main_image',
}
</script>

<style scoped>
.first {
  background-color: #8D0109;
}

.main_image {
  display: -ms-grid;
  display: grid;
  min-height: 90vh;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 0.5fr 3fr 1fr 3fr;
      grid-template-rows: 0.5fr 3fr 1fr 3fr;
  height: 850px;
}

#main_text {
  font-size: 80px;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  -ms-grid-column: 3;
  -ms-grid-column-span: 8;
  grid-column: 3/11;
  font-family: Georgia;
  color: white;
  font-weight: bold;
  text-align: center;
  text-shadow: 20px 10px 14px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.135em;
}

.center_text {
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-grid-column: 5;
  -ms-grid-column-span: 4;
  grid-column: 5/9;
  -ms-grid-row: 3;
  -ms-grid-row-span: 1;
  grid-row: 3/4;
  -ms-flex-line-pack: center;
      align-content: center;
}

.center_text #side_text {
  font-size: 30px;
  font-family: Lato;
  font-weight: 100;
  color: white;
  text-shadow: 20px 10px 14px #000000;
}

.side_image {
  -ms-grid-row: 4;
  -ms-grid-row-span: 1;
  grid-row: 4/5;
  -ms-grid-column: 6;
  -ms-grid-column-span: 2;
  grid-column: 6/8;
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
}

.side_image #logo_main {
  -webkit-box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.6);
          box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.6);
  width: 220px;
}

.info {
  background-color: white;
}

@media only screen and (max-width: 600px) {
  #main_text {
    font-size: 23px;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    -ms-grid-column: 3;
    -ms-grid-column-span: 8;
    grid-column: 3/11;
    font-family: Georgia;
    color: white;
    font-weight: bold;
    text-align: center;
    text-shadow: 20px 10px 14px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.135em;
  }
  .main_image {
    display: -ms-grid;
    display: grid;
    min-height: 90vh;
    -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
        grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
    -ms-grid-rows: 0.08fr 0.2fr 0.05fr 0.4fr;
        grid-template-rows: 0.08fr 0.2fr 0.05fr 0.4fr;
  }
  .first {
    height: 622px;
  }
  .center_text {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-grid-column: 4;
    -ms-grid-column-span: 6;
    grid-column: 4/10;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
  }
  .center_text #side_text {
    font-size: 10px;
    font-family: Lato;
    font-weight: 100;
    color: white;
    text-shadow: 20px 10px 14px #000000;
  }
}
</style>
