function done(e) {
    e.target.parentNode.getElementsByTagName('span')[0].classList.toggle('athuzott');
}
function del(e) {
    e.target.parentNode.remove();
}

function general() {
    let bekert = document.getElementById('field').value;
    if (bekert == '') {
        alert('You can\'t do nothing!');
        return;
    }
    let li = document.createElement('li');
    li.style.listStyleType = "none";
    let sp1 = document.createElement("span");
    let sp2 = document.createElement("span");
    sp1.innerText=bekert;
    sp2.innerText ="x";
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox);
    li.appendChild(sp1);
    li.appendChild(sp2);
    checkbox.addEventListener("click", done);
    sp2.addEventListener("click", del);
    document.getElementById('lista').appendChild(li);
    document.getElementById('field').value ='';
}
function init() {
    document.getElementById("gomb").addEventListener("click", general);
}
document.addEventListener("DOMContentLoaded", init)