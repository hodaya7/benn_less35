$(document).ready(function () {
    $("button").click(function () {
        callAjax($(".inp_stampDate").val());

    });
});


function callAjax(stamp) {
    //קריאה כשאין קווארי פאראמס
    $.getJSON("https://api.covidtracking.com/v1/us/" + stamp + ".json")
        .done(function (data) {//מה יקרה כשסיימת את הקריאה
            // console.log(typeof data.date);
            $("#date").text(`${data.date.toString().substring(6, 8)}/${data.date.toString().substring(4, 6)}/${data.date.toString().substring(0, 4)}`);
            // $("#date").text(data.date);
            $("#positive").text(data.positive);
            $("#negative").text(data.negative);
            $("#pending").text(data.pending);
            $("#totalTest-Results").text(data.totalTestResults);
            $("#totalTest-ResultsIncrease").text(data.totalTestResultsIncrease);
            // console.log(data.date);
            // console.log(data);
        });
};
