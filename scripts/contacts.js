var bodyElement;
var state;

$(document).ready(function () {
    bodyElement = $('#emailBody');

    $("#si").click(function () {
        setState("signUp");
    })

    $('#as').click(function () {
        setState("assign");
    })

    $("#qu").click(function () {
        setState("question");
    });

});

function convertChildren(unencoded) {
    return encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
}

function emailPlease(thelink) {
    $("#mailMe").click(function () {
        // convertChildren(bodyElement.val())
        window.open(thelink + "&body=" +  convertChildren(bodyElement.val()));
    })
}


function setState(newState) {
    var originLink = "mailto:gayatri.rajan@masonohioschools.com?cc=luke.trenaman@masonohioschools.com;jessicag.li@masonohioschools.com"
    switch (newState) {

        case "signUp":
            {
                document.getElementById("emailSubject").innerHTML = "Sign up <span class='caret'></span>";
                var signUpLink = originLink + "&subject=Sign%20up";
                emailPlease(signUpLink);
                break;
            }
        case "assign":
            {
                document.getElementById("emailSubject").innerHTML = "Assignments <span class='caret'></span>"
                var assignLink = originLink + "&subject=Assignment";
                emailPlease(assignLink);
                break;
            }
        case "question":
            {
                document.getElementById("emailSubject").innerHTML = "Questions <span class='caret'></span>"
                var questionLink = originLink + "&subject=I%20have%20a%20question"
                emailPlease(questionLink);
                break;
            }
    }
    state = newState;

}