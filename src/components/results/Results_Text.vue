<template>
<div class="results_text">
            <div class="left_wing"></div>
            <h1 class="survey_title">The dataset for COVID19 resistance prediction is used. The list of parameters is following: </h1>
            <ul class="survey_list">
                <li>TID,</li>
                <li>time stamp,</li>
                <li>age,</li>
                <li>gender,</li>
                <li>region,</li>
                <li>smoking yes/no,</li>
                <li>IgM level,</li>
                <li>IgG level,</li>
                <li>blood group,</li>
                <li>was / were vaccinated against influenza,</li>
                <li>was / were vaccinated against tuberculosis, </li>
                <li>was/ were ill with influenza this year,</li>
                <li>was/ were ill wit tuberculosis this year,</li>
                <li>was/ were ill wit COVID19 this year.</li>

            </ul>
            <div class="right_wing"></div>
        </div>
</template>

<script>
export default {
  name: 'Results_Text',
   
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results_text {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 10% (minmax(10px, 1fr))[10] 10%;
      grid-template-columns: 10% repeat(10, minmax(10px, 1fr)) 10%;
  -ms-grid-rows: 2fr 5fr;
      grid-template-rows: 2fr 5fr;
  background-color: #A80315;
  color: white;
}

.survey_title {
  padding: 20px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  grid-row: 1/2;
  -ms-grid-column: 2;
  -ms-grid-column-span: 8;
  grid-column: 2/10;
}

.survey_list {
  margin-left: 50px;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  -ms-grid-column: 2;
  -ms-grid-column-span: 8;
  grid-column: 2/10;
  padding: 20px;
}

.left_wing {
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  grid-row: 1/3;
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  grid-column: 1/2;
  background-color: #A80315;
}

.right_wing {
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  grid-row: 1/3;
  -ms-grid-column: 12;
  -ms-grid-column-span: 1;
  grid-column: 12/13;
  background-color: #A80315;
}

@media only screen and (max-width: 415px) {
  .results_text {
    -ms-grid-rows: 1fr 2fr;
        grid-template-rows: 1fr 2fr;
  }
  .survey_title {
    font-size: 14px;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
  }
  .survey_list {
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    font-size: 10px;
    margin-left: 10px;
    padding: auto;
  }
}

@media only screen and (min-width: 415px) and (max-width: 768px) {
  .results_text {
    -ms-grid-rows: 0.5fr 2fr;
        grid-template-rows: 0.5fr 2fr;
  }
  .survey_title {
    font-size: 20px;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
  }
  .survey_list {
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    font-size: 14px;
    margin-left: 10px;
    padding: auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .results_text {
    -ms-grid-rows: 0.5fr 2fr;
        grid-template-rows: 0.5fr 2fr;
  }
  .survey_title {
    font-size: 20px;
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
  }
  .survey_list {
    -ms-grid-column: 2;
    -ms-grid-column-span: 10;
    grid-column: 2/12;
    font-size: 14px;
    margin-left: 10px;
    padding: auto;
  }
}

</style>
