$(document).ready(function () {
    //קריאה כשאין קווארי פאראמס
    $.getJSON("https://api.covidtracking.com/v1/us/daily.json")
        .done(function (data) {//מה יקרה כשסיימת את הקריאה
            // console.log(typeof data.date);
            $("#date").text(`${data[0].date.toString().substring(6, 8)}/${data[0].date.toString().substring(4, 6)}/${data[0].date.toString().substring(0, 4)}`);
            // $("#date").text(data.date);
            $("#positive").text(data[0].positive);
            $("#negative").text(data[0].negative);
            $("#pending").text(data[0].pending);
            $("#totalTest-Results").text(data[0].totalTestResults);
            $("#totalTest-ResultsIncrease").text(data[0].totalTestResultsIncrease);
            // console.log(data.date);
            //  console.log(data);
        });
});


