function done(e) {
    if (checkbox.checked == true) {
        e.target.classList.toggle('athuzott');
    }
}
function del(e) {
    e.target.remove();
}
function general() {
    //document.getElementById('').innerHTML = "";
    let bekert = document.getElementById('field').value;
    if (bekert == '') {
        alert('ááááááááááááááááááááááááááááááá');
        return;
    }
    let li = document.createElement('li');
    li.style.listStyleType = "none";
    let checkbox = document.getElementsByName('chex');
    let a = "X";
    
    li.innerHTML= '<input type="checkbox" name="chex">'+bekert+a;
    /*li.addEventListener("click", done);
    a.addEventListener("click", del);*/
    document.getElementById('lista').appendChild(li);
    document.getElementById('field').value ='';
}
function init() {
    document.getElementById("gomb").addEventListener("click", general);
}
document.addEventListener("DOMContentLoaded", init)