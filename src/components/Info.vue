<template>
        <div class="info">
            <div class="center_concern">
                <h1 id="concern">Concerning the implementation period from 01.07.2020 to 31.12.2020
                </h1>
            </div>
            <div class="center_side_text">
                <h2 id="side_info">The project has use case, implemented in Ukraine and Belarus. STOP COVID 19 activities will run from June 2020 to December 2020 <br><br> The information about health and seek persons in Lviv region, Western Ukraine and Belarus will be
                    collected and processed.</h2>
            </div>
        </div>
</template>

<script>

export default {
  name: 'Info',
}
</script>

<style scoped>
.info {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 0.4fr 0.5fr 0.5fr 0.6fr;
      grid-template-rows: 0.4fr 0.5fr 0.5fr 0.6fr;
}

#concern {
  font-size: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #BF1A2C;
  font-weight: 500;
}

#side_info {
  font-size: 20px;
  font-weight: normal;
}

.center_concern {
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
  -ms-grid-column: 2;
  -ms-grid-column-span: 5;
  grid-column: 2/7;
  -ms-grid-row: 2;
  -ms-grid-row-span: 2;
  grid-row: 2/4;
}

.center_side_text {
  display: -ms-grid;
  display: grid;
  -ms-grid-column: 8;
  -ms-grid-column-span: 4;
  grid-column: 8/12;
  -ms-grid-row: 2;
  -ms-grid-row-span: 2;
  grid-row: 2/4;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
}

@media only screen and (max-width: 900px) {
  .info {
    margin-bottom: 50px;
    display: block;
  }
  #concern {
    font-size: 16px;
    text-align: center;
  }
  #side_info {
    font-size: 8px;
  }
  .center_concern {
    padding-top: 70px;
    padding-bottom: 40px;
    width: 80%;
    margin: auto;
  }
  .center_side_text {
    width: 80%;
    margin: auto;
  }
}
</style>
