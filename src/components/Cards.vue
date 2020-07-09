<template>
        <div class="cards">
            <div class="card">
                <img src="../assets/sample1.jpg" alt="">
                <div class="title">
                    <h1 class="title_text">Lorem Ipsum is simply </h1>
                </div>
                <div class="article">
                    <h3 class="article_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </h3>
                </div>
            </div>
            <div class="card">
                <img src="../assets/Coronavirus-test-tube.png" alt="">
                <div class="title">
                    <h1 class="title_text">Lorem Ipsum is simply </h1>
                </div>
                <div class="article">
                    <h3 class="article_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </h3>
                </div>
            </div>
            <div class="card">
                <img src="../assets/corona.jpg" alt="">
                <div class="title">
                    <h1 class="title_text">Lorem Ipsum is simply </h1>
                </div>
                <div class="article">
                    <h3 class="article_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </h3>
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
  width: 380px;
  height: 652px;
  background-color: #E2E2E2;
  border-radius: 20px;
  margin: 8px;
}

.card img {
  width: 380px;
  height: 310px;
  border-radius: 20px 20px 0px 0px;
}

.card .title {
  height: 134px;
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

@media only screen and (max-width: 600px) {
  .cards {
    width: 100%;
    margin: auto;
  }
  .card {
    width: 360px;
    height: 550px;
    background-color: #E2E2E2;
    border-radius: 20px;
    margin: 40px 40px 0px 0px;
  }
  .card img {
    width: 360px;
    height: 310px;
    border-radius: 20px 20px 0px 0px;
  }
  .card .title {
    height: 90px;
  }
  .card .title_text {
    text-align: center;
    font-size: 14px;
  }
  .card .article_text {
    font-size: 10px;
    font-weight: 600;
  }
}
</style>
