$(document).ready(function () {

    $("button").click(function () {
        callAjax($(".inp_name").val());

    });
});


function callAjax(userName) {
    var headline = "";
    //קריאה
    $.ajax({
        type: "GET",
        dataType: "json",
        data: {//query params להעברה
            "name": userName,
            // "query": "Batman v Superman"
        },
        url: "https://api.genderize.io/",
        //מה קורה בהצלחה
        success: function (data) {//מה שחזר יכנס לכאן
            console.log("suc", data);
            headline = `
         Name: ${data.name},
         Gender: ${data.gender},
         Probability: ${data.probability},
         Count: ${data.count}.
         `;
            //  headline= data.response.docs[0].abstract;
            console.log("ll ", headline);

            var newReviewHeadLine = $("<div></div>");
            console.log("new ", headline);
            newReviewHeadLine.text(headline);
            $("body").append(newReviewHeadLine);
        }
    });
}