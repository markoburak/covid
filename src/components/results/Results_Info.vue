<template>
<div class="results">
            <a href="https://forms.gle/evnzg29MNrym3oyY8" id="survey_btn" class="survey_btn">
                Complete the questionnaire
            </a>

       
        </div>
</template>

<script>
export default {
  name: 'Results_Info',
   
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results {
  min-height: 20vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.survey_btn {
  background: #A80315;
  padding: 24px;
  -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
          box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 35px;
  border: none;
  text-align: center;
  text-decoration: none;
  color: white;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  margin: 90px;
}

@media only screen and (max-width: 415px) {
  .results {
    min-height: 20vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }
  .survey_btn {
    background: #A80315;
    padding: 24px;
    -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    border: none;
    text-align: center;
    text-decoration: none;
    color: white;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin: 40px;
  }
  h1 {
    font-size: 20px;
  }
}

@media only screen and (min-width: 415px) and (max-width: 768px) {
  .results {
    min-height: 20vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }
  .survey_btn {
    background: #A80315;
    padding: 30px;
    -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    border: none;
    text-align: center;
    text-decoration: none;
    color: white;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    margin: 40px;
  }
  h1 {
    font-size: 30px;
  }
}
</style>
