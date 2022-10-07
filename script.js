function forNumber(x) {
    var value1 = document.getElementById("display").value;
    if (value1 != "0") {
        if ((x == "+") || (x == "-") || (x == "*") || (x == "/") || (x == ".")) {
            var expLength = value1.length;
            var frontValue = value1[expLength - 1];
            if ((frontValue == "+") || (frontValue == "-") || (frontValue == "*") || (frontValue == "/") || (frontValue == ".")) {
                document.getElementById("display").value = "Error!!";
            }
            else
            {
                document.getElementById("display").value = value1 + x;
            }
        }
        else {
            document.getElementById("display").value = value1 + x;
        }
    } else {
        document.getElementById("display").value = x;
    }
}
function clear1() {
    document.getElementById("display").value = 0;
}
function forAns() {
    let exp = document.getElementById("display").value;
    document.getElementById("display").value = eval(exp);
}
