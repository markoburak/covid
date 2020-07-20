<template>
<div>
        <div class="line">

        </div>

        <div id="first_title" class="first_title">
            <div class="image1">
                <img id="img1" src="../../assets/clock.jpg" alt="">
            </div>
            <div class="title1">
                <p class="text1">Nearly one million people worldwide have contracted COVID 19. Of these, more than 700,000 are still ill, more than 200,000 have been cured. More than 80,000 people died from the disease. Overall, the disease was detected in 203 countries.
                    Hundreds of thousands of people in the world have come together to fight this disease. Hospitals, laboratories are being set up, and unprecedented measures are being taken to prevent the worldwide spread of the COVID 19 pandemic. Against
                    this background, we do not stand aside, but try to make a strong contribution to the fight against COVID 19. The implementation of our ideas will allow us to prove the patterns of dependence on the prevalence of COVID 19 in the territory
                    of different countries, depending on the presence in humans of certain antibodies to influenza virus, tuberculosis, which may be correlated with a particular human blood group. It will allow the explaining the tendency for a lower
                    prevalence of COVID 19 among these people.</p>
            </div>
        </div>
        <div id="second_title" class="second_title">
            <div class="image2">
                <img id="img2" src="../../assets/white_combine.png" alt="">
            </div>
            <div class="title2">
                <p class="text2">Nearly one million people worldwide have contracted COVID 19. Of these, more than 700,000 are still ill, more than 200,000 have been cured. More than 80,000 people died from the disease. Overall, the disease was detected in 203 countries.
                    Hundreds of thousands of people in the world have come together to fight this disease. Hospitals, laboratories are being set up, and unprecedented measures are being taken to prevent the worldwide spread of the COVID 19 pandemic. Against
                    this background, we do not stand aside, but try to make a strong contribution to the fight against COVID 19. The implementation of our ideas will allow us to prove the patterns of dependence on the prevalence of COVID 19 in the territory
                    of different countries, depending on the presence in humans of certain antibodies to influenza virus, tuberculosis, which may be correlated with a particular human blood group. It will allow the explaining the tendency for a lower
                    prevalence of COVID 19 among these people.</p>
            </div>
        </div>

        <div id="third_title" class="third_title">
            <div class="title3">
                <p class="text3">
                    The first idea is that in the presence of Rapid tests - (the main rapid tests to determine the presence of immunoglobulins in the blood and available in Europe today), it is possible to carry out monitoring - research among a certain number of citizens
                    wishing to detect specific antibodies, for example in the Lviv region. In addition, there will be one condition for those wishing to take the test - to answer in the questionnaire three questions: was / were vaccinated against influenza,
                    tuberculosis, and whether they were ill with influenza / tuberculosis this year. Additionally, a person should indicate which blood group they have. Compared to other regions or countries (just in Europe such testing is being done,
                    we have not yet) and it will probably reveal the causes of different incidence of COVID 19 in different countries. The information about health and seek persons in Lviv region, Western Ukraine and Belarus will be collected and processed.
                    In addition, the open source information about other CEI countries will be processed. The second idea is to create the software application that will allow you to analyze the information received on major social networks (Twitter,
                    Facebook, etc.) and compare it with information from official websites of the MoH or WHO. This will make it possible to objectify the real situation with COVID 19 and reduce panic among the population and develop covinophobia. For
                    example, on the social network, certain information is published about the number of patients, or about the death rate, or other COVID-related information. The program seeks confirmation of this information by key phrases, dates, etc.
                    on the main and official sites of medicine and WHO and the Ministry of Health and others. In its absence, the denial of the fake is immediately published. This will significantly reduce panic among the population and make people only
                    use truthful information. The results of implementation of this idea allow education operators and health operators to increase theirs professional output and find the sources of fake news.
                </p>
            </div>
        </div>
        <div class="center">

            <button id="read" class="read" v-on:click="readMore">
            Read more
            </button>

        </div>
        </div>
</template>

<script>
export default {
  name: 'Three_content',
    methods: {
    readMore: function(){
        var width = window.innerWidth;
        var third = document.getElementById("third_title");
        var second = document.getElementById("second_title");
        var but = document.getElementById("read");
        but.style.display = "none";
        if (width <= 1024) {

            second.style.display = "flex";
            third.style.display = "flex";

        } else {
            second.style.display = "grid";
            third.style.display = "grid";
        }
    }
    }
    
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  width: 100%;
  height: 50px;
  background: #A80315;
  -webkit-box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.4);
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.4);
}

.first_title {
  padding-top: 60px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 4fr;
      grid-template-rows: 4fr;
  padding-bottom: 60px;
}

.image1 {
  -ms-grid-column: 2;
  -ms-grid-column-span: 5;
  grid-column: 2/7;
}

#img1 {
  width: 100%;
}

.title1 {
  -ms-grid-column: 8;
  -ms-grid-column-span: 4;
  grid-column: 8/12;
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.text1 {
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  /* or 41px */
  text-align: justify;
}

@media only screen and (max-width: 414px) {
  .first_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-bottom: 40px;
  }
  .image1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 40px;
  }
  #img1 {
    width: 80%;
  }
  .title1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text1 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16 px;
    text-align: justify;
  }
}

@media only screen and (max-width: 768px) and (min-width: 414px) {
  .first_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-bottom: 40px;
  }
  .image1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 40px;
  }
  #img1 {
    width: 80%;
  }
  .title1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text1 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16 px;
    text-align: justify;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 768px) {
  .first_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-bottom: 40px;
  }
  .image1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 40px;
  }
  #img1 {
    width: 60%;
  }
  .title1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text1 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16 px;
    text-align: justify;
  }
}

.second_title {
  padding-top: 60px;
  display: none;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 4fr;
      grid-template-rows: 4fr;
  padding-bottom: 60px;
}

.image2 {
  -ms-grid-column: 8;
  -ms-grid-column-span: 4;
  grid-column: 8/12;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* so we can position the logo based on this container */
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

#img2 {
  width: 120%;
  /* these 4 lines will center the logo */
}

.title2 {
  -ms-grid-column: 2;
  -ms-grid-column-span: 5;
  grid-column: 2/7;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  grid-row: 1/2;
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.text2 {
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  /* or 41px */
  text-align: justify;
}

@media only screen and (max-width: 414px) {
  .second_title {
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .image2 {
    position: static;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 40px;
  }
  #img2 {
    width: 80%;
  }
  .title2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text2 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }
}

@media only screen and (max-width: 768px) and (min-width: 414px) {
  .second_title {
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .image2 {
    position: static;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 40px;
  }
  #img2 {
    width: 80%;
  }
  .title2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text2 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 768px) {
  .second_title {
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .image2 {
    position: static;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 40px;
  }
  #img2 {
    width: 60%;
  }
  .title2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text2 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }
}

#third_title {
  padding-top: 60px;
  display: none;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 4fr;
      grid-template-rows: 4fr;
  padding-bottom: 60px;
}

.title3 {
  -ms-grid-column: 2;
  -ms-grid-column-span: 10;
  grid-column: 2/12;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  grid-row: 1/2;
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.text3 {
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  /* or 41px */
  text-align: justify;
}

@media only screen and (max-width: 414px) {
  #third_title {
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .title3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text3 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }
}

@media only screen and (max-width: 768px) and (min-width: 414px) {
  #third_title {
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .title3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text3 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 768px) {
  #third_title {
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .title3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .text3 {
    width: 80%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }
}

.center {
  margin-bottom: 10%;
  display: -ms-grid;
  display: grid;
  -ms-flex-line-pack: center;
      align-content: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.read {
  width: 250px;
  height: 57px;
  background: #A80315;
  -webkit-box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.4);
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.4);
  border-radius: 35px;
  border: none;
  text-align: center;
  text-decoration: none;
  color: white;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
}


</style>
