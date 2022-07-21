/* https://stackoverflow.com/questions/19912375/javascript-typing-effect */
function type(i, t, oe, text) {
    var input = text;
    document.getElementById(oe).innerHTML += input.charAt(i);
    setTimeout(function(){
        if (i < input.length - 1)
            type(i+1, t, oe, text);
    }, t);
}

setTimeout(function () {
    type(0, 100, "typeout-1", "Documentation for LKSCO users");
    type(0, 100, "typeout-2", "Documentation for other users and developers");
}, 1000);
