<template>
<div>
<div id="LPNU" class="section_grid">
            <div class="upper_line">
            </div>
            <div class="upper_cube">
                <img class="local_logo" src="../../assets/LPNU.logo.jpg" alt="">
            </div>
            <div class="local_title">
                <h1 class="title_uni">Lviv Polytechnic National University</h1>
            </div>
            <div class="local_context">
                <p class="para">
                    &nbsp;&nbsp;&nbsp;&nbsp;Lviv Polytechnic National University (LPNU), Ukraine, http://lp.edu.ua is one of the oldest technical educational institution in Eastern Europe. LPNU is ranked among top 5 technical universities in Ukraine. LPNU consists of 21
                    education and scientific institutes, 85 scientific and research, testing and branch laboratories. <br>&nbsp;&nbsp;&nbsp;&nbsp;The University has 102 departments, 35000 students including 11000 students of IT specialties,
                    and over 2000 academic and pedagogical staff. LPNU has participated in several Tempus, EU FP7, H2020 projects. We are establishing the Innovation office and innovation support service within the UNI4INNO Tempus project. Over the past
                    five years, researchers of Lviv Polytechnic University have implemented over 50 grants and projects, which were received for research work from foreign institutions and within European programs, more than 40 economic contracts on the
                    order of foreign companies and institutions and 29 joint research projects within the framework of international agreements.
                </p>
            </div>

        </div>
        <div class="divider">

        </div>
        <div id="LNMU" class="section_grid">
            <div class="upper_line">
            </div>
            <div class="upper_cube">
                <img class="local_logo" src="../../assets/LNMU.png" alt="">
            </div>
            <div class="local_title">
                <h1 class="title_uni">Danylo Halytsky Lviv National Medical University</h1>
            </div>
            <div class="local_context">
                <p class="para">
                    &nbsp;&nbsp;&nbsp;&nbsp;Danylo Halytsky Lviv National Medical University (LNMU) - http://www.meduniv.lviv.ua/ was founded in 1661. It is a modern diversified higher medical education institution with a powerful research, material and technical facilities.
                    The University has over 19000 students, including more than 900 foreign students. <br> &nbsp;&nbsp;&nbsp;&nbsp;LNMU holds top positions in the rankings of higher educational institutions and medical schools of Ukraine.
                    The University won the second place among all medical schools of Ukraine and the second place among all medical universities of Ukraine, according to the international database Scopus. LNMU received the Grand Prix "Leader of International
                    Activities" at the sixth international exhibition "Modern educational establishments". LNMU consists of 6 faculties, Medical College, 75 departments, Dental Medical Center, teaching drugstore, botanical garden, Central Research Laboratory
                    (CRL), Laboratory of Industrial Toxicology, Immunologic laboratory, Center of Pharmaceutic Care and Innovation etc. The Committee on Ethics and Bioethics has been functioning at the University since 2001. Science schools of such areas
                    of focus were established and are developing now in the University: Chemistry of biologically active azolidines, thiazines and related heterocyclic systems as potential drugs; Cardiovascular pathology; Physiology of adaptation processes;
                    Immune regulation and immunotherapy of human diseases; Influence of ecological and social factors on children’s dental health; Treatment of oncology patients based on principles of individualization and personification. <br>&nbsp;&nbsp;&nbsp;&nbsp;
                    LNMU is implementing agreements on cooperation in science, education and student exchanges with Medical University of Vienna (Austria), Wroclaw Medical University (Poland), Medical University of Warsaw ( Poland), University of Würzburg
                    (Germany), Medical University of Lublin (Poland), Institute of Health Policy and Management of Erasmus University Rotterdam (the Netherlands), Jagiellonian University (Poland), Medical University of Sofia (Bulgaria), Poznan University
                    of Medical Sciences (Poland), University of Silesia (Poland), Medical University of Gdansk (Poland). LNMU is a member of The Association for Regional Cooperation in the fields of Health, Science and Technology. 83 scientists of the
                    university are active members of international professional societies. The main aim of LNMU is to develop and promote strong educational and research environment be means of international cooperation and implementation of world-recognized
                    Standards in Biomedicine and Health care.

                </p>
            </div>

        </div>
        <div id="BSEU" class="section_grid">
            <div class="upper_line">
            </div>
            <div class="upper_cube">

                <img class="local_logo" src="../../assets/BSEU.png" alt="">
            </div>
            <div class="local_title">
                <h1 class="title_uni">Belarus State Economic University</h1>
            </div>
            <div class="local_context">
                <p class="para">
                    &nbsp;&nbsp;&nbsp;&nbsp;Belarus State Economic University (BSEU) was founded in 1933. One of the largest universities in the country, it trains specialists in the field of economics, management and law. The graduates of the university work in all the
                    sectors of the national economy both in the country and abroad. The university provides training and research within eight schools. In addition, BSEU incorporates Higher School of Tourism, Higher School of Business and Management,
                    Consulting Center for Commerce, a specialized school of pre-university training, and a specialized school of psychological and teaching updating. The university has a Research Center, an International Relations Division, and a Publishing
                    Center. There are two branches of the university beyond Minsk - in Bobruisk and Pinsk. <br> &nbsp;&nbsp;&nbsp;&nbsp;Belarus State Economic University's student body accounts for 25,000 students, with 1,200 faculty
                    members teaching them, of whom 47% have advanced degrees and titles. <br> The consortium is well balanced and presented by all necessary specialist – doctors, IT-specialists, statistics.

                </p>
            </div>

        </div>
        <div class="divider">

        </div>
</div>
</template>

<script>
export default {
  name: 'Universities',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section_grid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 0.15fr 0.5fr 0.2fr 0.6fr 0.1fr;
      grid-template-rows: 0.15fr 0.5fr 0.2fr 0.6fr 0.1fr;
}

.upper_line {
  -ms-grid-column: 1;
  -ms-grid-column-span: 12;
  grid-column: 1/13;
  background: #A80315;
  -webkit-box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.4);
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.4);
}

.upper_cube {
  height: 375px;
  width: 400px;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  -ms-grid-column: 9;
  -ms-grid-column-span: 1;
  grid-column: 9/10;
  background: #A80315;
  -webkit-box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4);
          box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4);
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
}

.local_logo {
  width: 350px;
}

.local_title {
  -ms-grid-column: 2;
  -ms-grid-column-span: 5;
  grid-column: 2/7;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  margin-top: 70px;
  margin-bottom: 50px;
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-line-pack: center;
      align-content: center;
}

.title_uni {
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.35);
}

.local_context {
  -ms-grid-column: 2;
  -ms-grid-column-span: 10;
  grid-column: 2/12;
  -ms-grid-row: 4;
  -ms-grid-row-span: 1;
  grid-row: 4/5;
}

.para {
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: justify;
}

.divider {
  height: 50px;
  background: white;
}

@media only screen and (max-width: 768px) {
  .section_grid {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
        grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
    -ms-grid-rows: 0.10fr 0.2fr 0.000001fr 0.6fr 0.1fr;
        grid-template-rows: 0.10fr 0.2fr 0.000001fr 0.6fr 0.1fr;
  }
  .upper_line {
    -ms-grid-column: 1;
    -ms-grid-column-span: 12;
    grid-column: 1/13;
  }
  .local_logo {
    width: 94px;
  }
  .upper_cube {
    height: 100px;
    width: 107px;
  }
  .local_title {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .title_uni {
    font-size: 16px;
    line-height: 20px;
  }
  .para {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16 px;
    text-align: justify;
  }
  .divider {
    height: 5px;
    background: white;
  }
}
@media only screen and (max-width: 1200px) and (min-width: 768px) {

  .section_grid {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
        grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
    -ms-grid-rows: 0.10fr 0.2fr 0.000001fr 0.6fr 0.1fr;
        grid-template-rows: 0.10fr 0.2fr 0.000001fr 0.6fr 0.1fr;
  }
.local_logo {
    width: 126px;
  }
    .upper_cube {
    height: 136px;
    width: 140px;
  }
  .upper_line {
    -ms-grid-column: 1;
    -ms-grid-column-span: 12;
    grid-column: 1/13;
    width: 100%;
  }
  .local_title {
    margin-top: 20px;
    margin-bottom: 80px;
  }
}
</style>
