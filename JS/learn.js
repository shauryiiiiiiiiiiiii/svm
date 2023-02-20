function task1() {
    ans = document.getElementById('q1').value;
    if (ans == "<h1>Hello World</h1>") {
        document.getElementById('q2').style.visibility = 'visible';
        lvl = localStorage.getItem('lvl')
        localStorage.setItem('lvl',lvl+25)
    }
    else {
        document.getElementById('eq1').innerHTML = "Hmm... your answer doesn't seem right. Keep going and try again\n#Never lose hope :)"
    }
}
function task2() {
    ans = document.getElementById('q2').value;
    if (ans == "<video><source src=''></video>") {
        document.getElementById('q3').style.visibility = 'visible';
        lvl = localStorage.getItem('lvl')
        localStorage.setItem('lvl',lvl+25)
    }
    else {
        document.getElementById('eq2').innerHTML = "Hmm... your answer doesn't seem right. Keep going and try again\n#Never lose hope :)"
    }
}
function task3() {
    ans = document.getElementById('q3').value;
    if (ans == "<a href=''>Hello World</a>") {
        lvl = localStorage.getItem('lvl')
        localStorage.setItem('lvl',lvl+25)
    }
    else {
        document.getElementById('eq3').innerHTML = "Hmm... your answer doesn't seem right. Keep going and try again\n#Never lose hope :)"
    }
}