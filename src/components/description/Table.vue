<template>
<div>
<h1 class="table_title">
            Target group(s)
        </h1>
        <table>
            <tr>
                <th></th>
                <th>Belarus</th>
                <th>Ukraine</th>
            </tr>
            <tr>
                <td>education operators</td>
                <td>2 persons</td>
                <td>2 persons</td>
            </tr>
            <tr>
                <td>doctors</td>
                <td>2 persons</td>
                <td>2 persons</td>
            </tr>
            <tr>
                <td>patients</td>
                <td>1000 persons</td>
                <td>1000 persons</td>
            </tr>
            <tr>
                <td>health operators</td>
                <td>1 person</td>
                <td>1 person</td>
            </tr>
        </table>
</div>
</template>

<script>
export default {
  name: 'Table',
    
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table_title {
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 85px;
  color: #A80315;
  margin-bottom: 70px;
}

.table {
  display: -ms-grid;
  display: grid;
  -ms-flex-line-pack: center;
      align-content: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  background: #ECECEC;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  padding: 10px;
  border: 5px solid #A80315;
  border-collapse: collapse;
  text-align: center;
}

@media only screen and (max-width: 414px) {
  .table_title {
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 85px;
    color: #A80315;
    margin-top: 40px;
    margin-bottom: 10px;
  }
  table,
  th,
  td {
    background: #ECECEC;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    padding: 10px;
    border: 5px solid #A80315;
    border-collapse: collapse;
    text-align: center;
  }
}
</style>
