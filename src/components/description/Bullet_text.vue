<template>
<div class="bullet_text">
            <div class="center_bullet_title">
                <h1 id="bullet_title">According to the results, it is planned to organize the international workshop. The scientific articles will be published on the coverage of researches carried out within the framework of this project, namely</h1><br><br>
            </div>
            <div class="center_bullet_content">

                <ul>
                    <li id="bullet_content">the analysis of statistical results of the methods of combating viral infections and finding new approaches to the resistance of the group of patients to the COVID 19 strain,</li><br><br>
                    <li id="bullet_content">the development and analysis of artificial intelligence methods for recognition of fake information in social networks to prevent the negative consequences of its impact.</li>
                </ul>
               
            </div>
            <div class="center_bullet_results">
                <h1 id="bullet_results">The results of the study will be processed by modern methods. The results will be published in European scientific journals and will be implemented on at the level of the project participants.</h1>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Bullet_text',
   
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bullet_text {
  margin-top: 120px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 1.3fr 2.9fr 1fr;
      grid-template-rows: 1.3fr 2.9fr 1fr;
}

.center_bullet_title {
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  grid-row: 1/2;
  -ms-grid-column: 2;
  -ms-grid-column-span: 10;
  grid-column: 2/12;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

#bullet_title {
  font-family: Georgia;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 159%;
}

.center_bullet_content {
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  -ms-grid-column: 2;
  -ms-grid-column-span: 7;
  grid-column: 2/9;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

#bullet_content {
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
}

.center_bullet_results {
  -ms-grid-row: 3;
  -ms-grid-row-span: 1;
  grid-row: 3/4;
  -ms-grid-column: 2;
  -ms-grid-column-span: 10;
  grid-column: 2/12;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

#bullet_results {
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 157%;
}

@media only screen and (max-width: 420px) {
  .bullet_text {
    margin-top: 50px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
        grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
    -ms-grid-rows: 1.3fr 2.2fr 1fr;
        grid-template-rows: 1.3fr 2.2fr 1fr;
  }
  .center_bullet_title {
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_title {
    font-family: Georgia;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 159%;
  }
  .center_bullet_content {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    -ms-grid-column: 2;
    -ms-grid-column-span: 7;
    grid-column: 2/9;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_content {
    font-family: Georgia;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
  .center_bullet_results {
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_results {
    font-family: Georgia;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 157%;
  }
}

@media only screen and (max-width: 768px) and (min-width: 420px) {
  .bullet_text {
    margin-top: 50px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
        grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
    -ms-grid-rows: 1.3fr 4fr 1fr;
        grid-template-rows: 1.3fr 4fr 1fr;
  }
  .center_bullet_title {
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_title {
    font-family: Georgia;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 159%;
  }
  .center_bullet_content {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    -ms-grid-column: 2;
    -ms-grid-column-span: 7;
    grid-column: 2/9;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_content {
    font-family: Georgia;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
  .center_bullet_results {
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_results {
    font-family: Georgia;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 157%;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 768px) {
  .bullet_text {
    margin-top: 50px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
        grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
    -ms-grid-rows: 1.3fr 3.5fr 1fr;
        grid-template-rows: 1.3fr 3.5fr 1fr;
  }
  .center_bullet_title {
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_title {
    font-family: Georgia;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 159%;
  }
  .center_bullet_content {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    -ms-grid-column: 2;
    -ms-grid-column-span: 7;
    grid-column: 2/9;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_content {
    font-family: Georgia;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
  .center_bullet_results {
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #bullet_results {
    font-family: Georgia;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 157%;
  }
}

</style>
