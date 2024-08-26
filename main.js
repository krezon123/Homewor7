// Домашняя работа на 7 урок

var action; 

function func() {
    var result;
    var line1 = Number(document.getElementById("line1").value);
    var line2 = Number(document.getElementById("line2").value);

    switch (action) {
         case '+':
        result = line1 + line2;
        break;
        case '-':
        result = line1 - line2;
        break;
        case '*':
        result = line1 * line2;
        break;
        case '/':
        result = line1 / line2;
        break;
    }

    document.getElementById("result").innerHTML = result;
}