/* https://stackoverflow.com/questions/19912375/javascript-typing-effect */
function type(i, t, oe, text) {
    var input = text;
    document.querySelector(oe).innerHTML += input.charAt(i);
    setTimeout(function () {
        if (i < input.length - 1)
            type(i + 1, t, oe, text);
    }, t / input.length);
}

setTimeout(function () {
    type(0, 3000, "#typeout-1 .lang1", "Documentation for LKSCO users");
    type(0, 3000, "#typeout-2 .lang1", "Documentation for other users and developers");
    setTimeout(function () {
        type(0, 2000, "#typeout-1 .lang2", "為本校中樂團而設之說明");
        type(0, 2000, "#typeout-2 .lang2", "為其他用家或開發者而設之說明");
    }, 3500);
}, 1000);