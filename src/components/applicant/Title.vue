<template>
<div>
<div class="tilte_section">
            <div class="title_center">
                <h1 id="title">
                    Two countries will participate in the STOP COVID 19 project.
                </h1>
            </div>


            <a id="button1" href="#LPNU"><button class="btn"  type="button" >LPNU</button></a>
            <a id="button2" href="#LNMU"><button class="btn"  type="button" >LNMU</button></a>
            <a id="button3" href="#BSEU"><button class="btn"  type="button" >BSEU</button></a>

        </div>
        <div class="context">
            <div class="context_justify">
                <h1>Ukraine is represented by Lviv Polytechnic National University and Danylo Halytsky Lviv National Medical University.<br><br> Belarus is represented by Belarus State Economic University.
                </h1>
            </div>
        </div>

</div>
</template>

<script>
export default {
  name: 'Title',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tilte_section {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 0.4fr 0.5fr 0.4fr;
      grid-template-rows: 0.4fr 0.5fr 0.4fr;
  height: 168px;
  background-color: #A80315;
  -webkit-box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
}

#title {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: white;
  text-align: center;
}

.title_center {
  -ms-grid-column: 5;
  -ms-grid-column-span: 4;
  grid-column: 5/9;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
}

#anchor_center1 {
  -ms-grid-column: 10;
  -ms-grid-column-span: 1;
  grid-column: 10/11;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
}

.btn {
  background-color: black;
  border: black;
  border-radius: 10px;
  color: white;
  padding: 10px 10px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 16px;
  font-weight: 500;
}

#button1 {
  -ms-grid-column: 10;
  -ms-grid-column-span: 1;
  grid-column: 10/11;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
}

#button2 {
  -ms-grid-column: 11;
  -ms-grid-column-span: 1;
  grid-column: 11/12;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
}

#button3 {
  margin-right: 41px;
  -ms-grid-column: 12;
  -ms-grid-column-span: 1;
  grid-column: 12/13;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
}

.context {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 0.5fr 0.5fr 0.5fr;
      grid-template-rows: 0.5fr 0.5fr 0.5fr;
}

.context_justify {
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  -ms-grid-column: 2;
  -ms-grid-column-span: 8;
  grid-column: 2/10;
}

.context_justify h1 {
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
}

@media only screen and (max-width: 768px) {
  #title {
    text-align: start;
    font-size: 16px;
  }
  .title_center {
    -ms-grid-column: 2;
    -ms-grid-column-span: 6;
    grid-column: 2/8;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    display: block;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: justify;
    -ms-flex-line-pack: stretch;
        align-content: stretch;
  }
  #button1 {
    -ms-grid-column: 10;
    -ms-grid-column-span: 2;
    grid-column: 10/12;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-line-pack: center;
        align-content: center;
  }
  #button2 {
    -ms-grid-column: 10;
    -ms-grid-column-span: 2;
    grid-column: 10/12;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-line-pack: center;
        align-content: center;
  }
  #button3 {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-line-pack: center;
        align-content: center;
    margin-right: 0;
    -ms-grid-column: 10;
    -ms-grid-column-span: 2;
    grid-column: 10/12;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
  }
  .btn {
    padding: 6px 6px;
    margin: 10px;
    font-size: 16px;
  }
  .context {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
        grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
    -ms-grid-rows: 0.5fr 0.5fr 0.5fr;
        grid-template-rows: 0.5fr 0.5fr 0.5fr;
  }
  .context_justify {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    -ms-grid-column: 2;
    -ms-grid-column-span: 8;
    grid-column: 2/10;
  }
  .context_justify h1 {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
  }
}
@media only screen and (max-width: 1200px) and (min-width: 768px) {
#title{
  font-size: 24px;
}
}
</style>
