document.getElementById('SVM CODER HUB ADMIN PANEL VISIBILITY').style.visibility = 'hidden';

function login() {
    uname = document.getElementById('uname').value;
    pass = document.getElementById('pass').value;
    if (uname == '' || pass == '' || pass < 1 || uname <1) {
        alert('⚠ Error while logging-in!\n1. Must Fill the required inputs\n2. Username & Password must contain atleast 1 word.')
    }
    else if (uname == 'Laxmi' && pass == 'svmtchr1') {
        localStorage.setItem('name','Laxmi')
        localStorage.setItem('role','Teacher')
        localStorage.setItem('badge','<a href="ADMIN/home.html">Admin</a>')
        window.location.replace('home.html')
    }
    else if (uname == 'Yashraj' && pass == 'Yash@bestfriend') {
        localStorage.setItem('name','Yash Raj')
        localStorage.setItem('role','Friend')
        localStorage.setItem('badge','Admin')
        window.location.replace('home.html')
    }
    else if (uname == 'Shaurya' && pass == 'uioplol!') {
        localStorage.setItem('name','Shaurya Tripathi')
        localStorage.setItem('role','Developer')
        localStorage.setItem('badge','<a href="ADMIN/home.html">Admin</a>')
        window.location.replace('home.html')
    }
    else if (uname == uname && pass == pass) {
        localStorage.setItem('name',uname)
        localStorage.setItem('role','Student')
        localStorage.setItem('badge','User')
        window.location.replace('home.html')
        localStorage.setItem('regs',localStorage.getItem('regs')+1);
    }
}
function project() {
    window.location.replace('projects.html')
}
function profile() {
    window.location.replace('profile.html')
}
function learn() {
    window.location.replace('learn-to-code.html')
}
function code() {
    window.location.replace('code.html')
}

document.getElementById('name').innerHTML = localStorage.getItem('name');
document.getElementById('role').innerHTML = localStorage.getItem('role');
document.getElementById('badge').innerHTML = localStorage.getItem('badge');
if (localStorage.getItem('badge') == 'Admin' || 'Owner') {
    document.getElementById('SVM CODER HUB ADMIN PANEL VISIBILITY').style.visibility = 'visible';
}
else {
    console.error('ERROR 404 | YOU ARE NOT AN ADMIN.')
}
document.getElementById('regs').innerHTML = localStorage.getItem('regs');