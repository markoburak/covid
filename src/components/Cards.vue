<template>
        <div class="cards">
            <div class="card">
                <img src="../assets/covid_planet.png" alt="">
                <div class="title">
                    <router-link to="/applicant"><h1 class="title_text"><u>General information</u></h1></router-link>
                </div>
                <div class="article">
                   <h3 class="article_text">Two countries will participate in the STOP COVID 19 project. <br><br> Ukraine is represented by Lviv Polytechnic National University and Danylo Halytsky Lviv National Medical University.<br><br> Belarus is represented by Belarus State
                        Economic University.
                    </h3>
                </div>
            </div>
            <div class="card">
                <img src="../assets/covid_mask.png" alt="">
                <div class="title">
                    <router-link to="/description"><h1 class="title_text"><u>Description of the activity</u></h1></router-link>
                </div>
                <div class="article">
                     <h3 class="article_text">The implementation of our ideas will allow us to prove the patterns of dependence on the prevalence of COVID 19 in the territory of different countries. <br><br> Depending on the presence in humans of certain antibodies to influenza
                        virus, tuberculosis, which may be correlated with a particular human blood group.</h3>
                  </div>
            </div>
            <div class="card">
                <img src="../assets/covid_small.jpg" alt="">
                <div class="title">
                    <router-link to="/results"><h1 class="title_text"><u>Results</u></h1></router-link>
                </div>
                <div class="article">
                    <h3 class="article_text">The dataset for COVID19 resistance prediction is used.<br><br> The results will be published in European scientific journals and will be implemented on at the level of the project participants.</h3>
                </div>
            </div>


        </div>
</template>

<script>

export default {
  name: 'Cards',
}
</script>

<style scoped>
.card {
  -ms-flex-line-pack: justify;
      align-content: space-between;
  width: 356px;
  height: 682px;
  background-color: #E2E2E2;
  border-radius: 20px;
  margin: 20px;
}

.card img {
  width: 356px;
  height: 260px;
  border-radius: 20px 20px 0px 0px;
}

.card .title {
  height: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.card .title_text {
  text-align: center;
  font-size: 24px;
}

.card .article {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 30px;
}

.card .article_text {
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  margin: 0px 20px 0px 20px;
}

.cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  width: 80%;
  margin: auto;
}
@media only screen and (max-width: 520px) {
  .cards {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .card {
    width: 300px;
    height: 450px;
    background-color: #E2E2E2;
    border-radius: 20px;
    margin: 40px 0px 40px 0px;
  }
  .card img {
    width: 300px;
    height: 200px;
    border-radius: 20px 20px 0px 0px;
  }
  .card .title {
    height: 60px;
  }
  .card .title_text {
    text-align: center;
    font-size: 14px;
  }
  .card .article_text {
    font-size: 10px;
    font-weight: 500;
  }
}
@media only screen and (max-width: 900px) and (min-width: 520px)  {
.cards {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .card {
    width: 300px;
    height: 450px;
    background-color: #E2E2E2;
    border-radius: 20px;
    margin: 0px 40px 40px 40px;
  }
  .card img {
    width: 300px;
    height: 200px;
    border-radius: 20px 20px 0px 0px;
  }
  .card .title {
    height: 60px;
  }
  .card .title_text {
    text-align: center;
    font-size: 14px;
  }
  .card .article_text {
    font-size: 10px;
    font-weight: 500;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 900px)  {
  .cards {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .card {
    width: 300px;
    height: 450px;
    background-color: #E2E2E2;
    border-radius: 20px;
    margin: 0px 40px 40px 40px;
  }
  .card img {
    width: 300px;
    height: 200px;
    border-radius: 20px 20px 0px 0px;
  }
  .card .title {
    height: 60px;
  }
  .card .title_text {
    text-align: center;
    font-size: 14px;
  }
  .card .article_text {
    font-size: 10px;
    font-weight: 500;
  }

}
</style>
