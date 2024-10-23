

function func() {

    let b1 = document.getElementById("b1")
    let b2 = document.getElementById("b2")
    let b3 = document.getElementById("b3")
    let b4 = document.getElementById("b4")
    let b5 = document.getElementById("b5")
    let b6 = document.getElementById("b6")
    let b7 = document.getElementById("b7")
    let b8 = document.getElementById("b8")
    let b9 = document.getElementById("b9")

    let bv1 = document.getElementById("b1").value
    let bv2 = document.getElementById("b2").value
    let bv3 = document.getElementById("b3").value
    let bv4 = document.getElementById("b4").value
    let bv5 = document.getElementById("b5").value
    let bv6 = document.getElementById("b6").value
    let bv7 = document.getElementById("b7").value
    let bv8 = document.getElementById("b8").value
    let bv9 = document.getElementById("b9").value

    let turn = document.getElementById("turn")

    let result=document.getElementById("res")

    if (bv1 == 'X' && bv2 == 'X' && bv3 == 'X') {
        result.innerHTML = "Players X wins"

        b4.disabled = "true"
        b5.disabled = "true"
        b6.disabled = "true"
        b7.disabled = "true"
        b8.disabled = "true"
        b9.disabled = "true"

        b1.style.backgroundColor = "red"
        b2.style.backgroundColor = "red"
        b3.style.backgroundColor = "red"
    }
    else if (bv1 == 'X' && bv4 == 'X' && bv7 == 'X') {
        result.innerHTML = "Players X wins"

        b2.disabled = "true"
        b3.disabled = "true"
        b5.disabled = "true"
        b6.disabled = "true"
        b8.disabled = "true"
        b9.disabled = "true"

        b1.style.backgroundColor = "red"
        b4.style.backgroundColor = "red"
        b7.style.backgroundColor = "red"
    }
    else if (bv7 == 'X' && bv8 == 'X' && bv9 == 'X') {
        result.innerHTML = "Players X wins"

        b1.disabled = "true"
        b2.disabled = "true"
        b3.disabled = "true"
        b4.disabled = "true"
        b5.disabled = "true"
        b6.disabled = "true"

        b8.style.backgroundColor = "red"
        b9.style.backgroundColor = "red"
        b7.style.backgroundColor = "red"
    }
    else if (bv3 == 'X' && bv6 == 'X' && bv9 == 'X') {
        result.innerHTML = "Players X wins"

        b1.disabled = "true"
        b2.disabled = "true"
        b4.disabled = "true"
        b5.disabled = "true"
        b7.disabled = "true"
        b8.disabled = "true"

        b3.style.backgroundColor = "red"
        b6.style.backgroundColor = "red"
        b9.style.backgroundColor = "red"
    }
    else if (bv4 == 'X' && bv5 == 'X' && bv6 == 'X') {
        result.innerHTML = "Players X wins"

        b1.disabled = "true"
        b2.disabled = "true"
        b3.disabled = "true"
        b7.disabled = "true"
        b8.disabled = "true"
        b9.disabled = "true"

        b4.style.backgroundColor = "red"
        b5.style.backgroundColor = "red"
        b6.style.backgroundColor = "red"
    }
    else if (bv1 == 'X' && bv5 == 'X' && bv9 == 'X') {
        result.innerHTML = "Players X wins"

        b2.disabled = "true"
        b3.disabled = "true"
        b4.disabled = "true"
        b6.disabled = "true"
        b7.disabled = "true"
        b8.disabled = "true"

        b1.style.backgroundColor = "red"
        b5.style.backgroundColor = "red"
        b9.style.backgroundColor = "red"
    }
    else if (bv2 == 'X' && bv5 == 'X' && bv8 == 'X') {
        result.innerHTML = "Players X wins"

        b1.disabled = "true"
        b3.disabled = "true"
        b4.disabled = "true"
        b6.disabled = "true"
        b7.disabled = "true"
        b9.disabled = "true"

        b2.style.backgroundColor = "red"
        b5.style.backgroundColor = "red"
        b8.style.backgroundColor = "red"
    }


    else if (bv2 == 'O' && bv5 == 'O' && bv8 == 'O') {
        result.innerHTML = "Players O wins"

        b1.disabled = "true"
        b3.disabled = "true"
        b4.disabled = "true"
        b6.disabled = "true"
        b7.disabled = "true"
        b9.disabled = "true"

        b2.style.backgroundColor = "red"
        b5.style.backgroundColor = "red"
        b8.style.backgroundColor = "red"
    }
    else if (bv1 == 'O' && bv2 == 'O' && bv3 == 'O') {
        result.innerHTML = "Players O wins"

        b4.disabled = "true"
        b5.disabled = "true"
        b6.disabled = "true"
        b7.disabled = "true"
        b8.disabled = "true"
        b9.disabled = "true"

        b1.style.backgroundColor = "red"
        b2.style.backgroundColor = "red"
        b3.style.backgroundColor = "red"
    }
    else if (bv1 == 'O' && bv4 == 'O' && bv7 == 'O') {
        result.innerHTML = "Players O wins"

        b2.disabled = "true"
        b3.disabled = "true"
        b5.disabled = "true"
        b6.disabled = "true"
        b8.disabled = "true"
        b9.disabled = "true"

        b1.style.backgroundColor = "red"
        b4.style.backgroundColor = "red"
        b7.style.backgroundColor = "red"
    }
    else if (bv7 == 'O' && bv8 == 'O' && bv9 == 'O') {
        result.innerHTML = "Players O wins"

        b1.disabled = "true"
        b2.disabled = "true"
        b3.disabled = "true"
        b4.disabled = "true"
        b5.disabled = "true"
        b6.disabled = "true"

        b8.style.backgroundColor = "red"
        b9.style.backgroundColor = "red"
        b7.style.backgroundColor = "red"
    }
    else if (bv3 == 'O' && bv6 == 'O' && bv9 == 'O') {
        result.innerHTML = "Players O wins"

        b1.disabled = "true"
        b2.disabled = "true"
        b4.disabled = "true"
        b5.disabled = "true"
        b7.disabled = "true"
        b8.disabled = "true"

        b3.style.backgroundColor = "red"
        b6.style.backgroundColor = "red"
        b9.style.backgroundColor = "red"
    }
    else if (bv4 == 'O' && bv5 == 'O' && bv6 == 'O') {
        result.innerHTML = "Players O wins"

        b1.disabled = "true"
        b2.disabled = "true"
        b3.disabled = "true"
        b7.disabled = "true"
        b8.disabled = "true"
        b9.disabled = "true"

        b4.style.backgroundColor = "red"
        b5.style.backgroundColor = "red"
        b6.style.backgroundColor = "red"
    }
    else if (bv1 == 'O' && bv5 == 'O' && bv9 == 'O') {
        result.innerHTML = "Players O wins"

        b2.disabled = "true"
        b3.disabled = "true"
        b4.disabled = "true"
        b6.disabled = "true"
        b7.disabled = "true"
        b8.disabled = "true"

        b1.style.backgroundColor = "red"
        b5.style.backgroundColor = "red"
        b9.style.backgroundColor = "red"
    }

    else if ((bv1 == 'X' || bv1 == 'O') && (bv2 == 'X' || bv2 == 'O') && (bv3 == 'X' || bv3 == 'O') && (bv4 == 'X' || bv4 == 'O') && (bv5 == 'X' || bv6 == 'O') && (bv7 == 'X' || bv7 == 'O') && (bv8 == 'X' || bv8 == 'O') && (bv9 == 'X' || bv9 == 'O')) {
        result.innerHTML = "Match Tie"
    }
    else {
        if (flag == 1) {
            turn.innerHTML = "Player X Turn"
        }
        else {
            turn.innerHTML = "Player O Turn"
        }
    }

}

function resetall() {
    location.reload()
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ""
}
flag = 1;
function func1() {

    if (flag == 1) {
        document.getElementById("b1").value = 'X'
        document.getElementById("b1").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b1").value = 'O'
        document.getElementById("b1").disabled = "true"
        flag = 1
    }
}
function func2() {

    if (flag == 1) {
        document.getElementById("b2").value = 'X'
        document.getElementById("b2").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b2").value = 'O'
        document.getElementById("b2").disabled = "true"
        flag = 1
    }
}
function func3() {

    if (flag == 1) {
        document.getElementById("b3").value = 'X'
        document.getElementById("b3").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b3").value = 'O'
        document.getElementById("b3").disabled = "true"
        flag = 1
    }
}
function func4() {

    if (flag == 1) {
        document.getElementById("b4").value = 'X'
        document.getElementById("b4").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b4").value = 'O'
        document.getElementById("b4").disabled = "true"
        flag = 1
    }
}
function func5() {

    if (flag == 1) {
        document.getElementById("b5").value = 'X'
        document.getElementById("b5").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b5").value = 'O'
        document.getElementById("b5").disabled = "true"
        flag = 1
    }
}
function func6() {

    if (flag == 1) {
        document.getElementById("b6").value = 'X'
        document.getElementById("b6").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b6").value = 'O'
        document.getElementById("b6").disabled = "true"
        flag = 1
    }
}
function func7() {

    if (flag == 1) {
        document.getElementById("b7").value = 'X'
        document.getElementById("b7").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b7").value = 'O'
        document.getElementById("b7").disabled = "true"
        flag = 1
    }
}
function func8() {

    if (flag == 1) {
        document.getElementById("b8").value = 'X'
        document.getElementById("b8").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b8").value = 'O'
        document.getElementById("b8").disabled = "true"
        flag = 1
    }
}
function func9() {

    if (flag == 1) {
        document.getElementById("b9").value = 'X'
        document.getElementById("b9").disabled = "true"
        flag = 0
    }
    else {
        document.getElementById("b9").value = 'O'
        document.getElementById("b9").disabled = "true"
        flag = 1
    }
}
