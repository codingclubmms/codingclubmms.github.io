var state;



$(document).ready(function () {
        $("#si").click(function () {
            state = "signUp"
        })

        $('#as').click(function () {
            state = "assign"
        })

        $("#qu").click(function () {
            state = "question"
        })

});

function setState(state) {
  switch (state){
      case "signUp": {
          document.getElementById("emailSubject").innerHTML = "Sign up <span class='caret'></span>"
      }
      case "assign": {
          document.getElementById("emailSubject").innerHTML = "Assignments <span class='caret'></span>"
      }
      case "question": {
          document.getElementById("emailSubject").innerHTML = "Questions <span class='caret'></span>"
      }
  }
}