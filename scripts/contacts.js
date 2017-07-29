var signUp = false;
var assign = false;
var question = false;

document.getElementById('si').onclick = function() {
    signUp = true;
    assign = false;
    question = false;
}​;​

document.getElementById('as').onclick = function(){
    signUp = false;
    assign = true;
    question = false
};

document.getElementById('qu').onclick = function(){
    signUp = false;
    assign = false;
    question = true;
};

